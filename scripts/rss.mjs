import { writeFileSync, mkdirSync } from 'fs';
import path from 'path';
import { slug } from 'github-slugger';
import { escape } from 'pliny/utils/htmlEscaper.js';
import siteMetadata from '../data/siteMetadata.js';
import blogTagData from '../app/tag-data.blog.json' with { type: 'json' };
import recipeTagData from '../app/tag-data.recipe.json' with { type: 'json' };
import { allBlogs, allRecipes } from '../.contentlayer/generated/index.mjs';
import { sortPosts } from 'pliny/utils/contentlayer.js';

const outputFolder = process.env.EXPORT ? 'out' : 'public';

const generateRssItem = (config, post) => {
  // Determine the path based on post type
  const postPath = post.type === 'Recipes' ? 'recipes' : 'blog';
  return `
  <item>
    <guid>${config.siteUrl}/${postPath}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${postPath}/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`;
};

/** Missing: <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate> */
const generateRss = (config, posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/blog</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post)).join('')}
    </channel>
  </rss>
`;

async function generateRSS(config, allBlogs, allRecipes, page = 'feed.xml') {
  // Combine blogs and recipes, filter out drafts
  const allPosts = [...allBlogs, ...allRecipes];
  const publishPosts = allPosts.filter((post) => post.draft !== true);

  // RSS for all posts (blogs and recipes combined)
  if (publishPosts.length > 0) {
    const rss = generateRss(config, sortPosts(publishPosts));
    writeFileSync(`./${outputFolder}/${page}`, rss);
  }

  // Combine tag counts from both blog and recipe
  const tagCounts = { ...blogTagData };
  for (const [tag, count] of Object.entries(recipeTagData)) {
    tagCounts[tag] = (tagCounts[tag] || 0) + count;
  }
  if (publishPosts.length > 0) {
    for (const tag of Object.keys(tagCounts)) {
      // Filter both blogs and recipes that have this tag
      const filteredPosts = allPosts.filter(
        (post) => post.tags && post.tags.map((t) => slug(t)).includes(tag) && post.draft !== true
      );
      const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`);
      const rssPath = path.join(outputFolder, 'tags', tag);
      mkdirSync(rssPath, { recursive: true });
      writeFileSync(path.join(rssPath, page), rss);
    }
  }
}

const rss = () => {
  generateRSS(siteMetadata, allBlogs, allRecipes);
  console.log('RSS feed generated...');
};
export default rss;
