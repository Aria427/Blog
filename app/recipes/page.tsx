import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer';
import { allRecipes } from 'contentlayer/generated';
import { genPageMetadata } from 'app/seo';
import ListLayout from '@/layouts/ListLayoutWithTags';

const POSTS_PER_PAGE = 4;

export const metadata = genPageMetadata({ title: 'Recipes' });

export default async function RecipesPage(props: { searchParams: Promise<{ page: string }> }) {
  // Filter out draft recipes
  const posts = allCoreContent(sortPosts(allRecipes)).filter((post) => post.draft !== true);
  const pageNumber = 1;
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE * pageNumber);
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  };

  return (
    <ListLayout
      posts={posts}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Recipes"
    />
  );
}
