import { MetadataRoute } from 'next';
import { allBlogs, allRecipes } from 'contentlayer/generated';
import siteMetadata from '@/data/siteMetadata';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl;

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }));

  const recipeRoutes = allRecipes
    .filter((recipe) => !recipe.draft)
    .map((recipe) => ({
      url: `${siteUrl}/${recipe.path}`,
      lastModified: recipe.lastmod || recipe.date,
    }));

  const routes = ['', 'blog', 'recipes', 'tags', 'about', 'contact', 'privacy', 'terms'].map(
    (route) => ({
      url: `${siteUrl}/${route}`,
      lastModified: new Date().toISOString().split('T')[0],
    })
  );

  return [...routes, ...blogRoutes, ...recipeRoutes];
}
