import { slug } from 'github-slugger';
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import siteMetadata from '@/data/siteMetadata';
import ListLayout from '@/layouts/ListLayoutWithTags';
import { allBlogs, allRecipes } from 'contentlayer/generated';
import blogTagData from 'app/tag-data.blog.json';
import recipeTagData from 'app/tag-data.recipe.json';
import { genPageMetadata } from 'app/seo';
import { Metadata } from 'next';

const POSTS_PER_PAGE = 4;

export async function generateMetadata(props: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const tag = decodeURI(params.tag);
  return genPageMetadata({
    title: tag,
    description: `${siteMetadata.title} ${tag} tagged content`,
    alternates: {
      canonical: './',
      types: {
        'application/rss+xml': `${siteMetadata.siteUrl}/tags/${tag}/feed.xml`,
      },
    },
  });
}

export const generateStaticParams = async () => {
  // Combine tag counts from both blog and recipe
  const tagCounts: Record<string, number> = { ...blogTagData };
  for (const [tag, count] of Object.entries(recipeTagData)) {
    tagCounts[tag] = (tagCounts[tag] || 0) + Number(count);
  }
  const tagKeys = Object.keys(tagCounts);
  return tagKeys.map((tag) => ({
    tag: encodeURI(tag),
  }));
};

export default async function TagPage(props: { params: Promise<{ tag: string }> }) {
  const params = await props.params;
  const tag = decodeURI(params.tag);
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1);

  // Filter both blog and recipe posts that have this tag
  const filteredBlogs = allBlogs.filter(
    (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag) && post.draft !== true
  );
  const filteredRecipes = allRecipes.filter(
    (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag) && post.draft !== true
  );

  // Combine and sort all posts with this tag
  const filteredPosts = allCoreContent(sortPosts([...filteredBlogs, ...filteredRecipes]));

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const initialDisplayPosts = filteredPosts.slice(0, POSTS_PER_PAGE);
  const pagination = {
    currentPage: 1,
    totalPages: totalPages,
  };

  return (
    <ListLayout
      posts={filteredPosts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title={title}
    />
  );
}
