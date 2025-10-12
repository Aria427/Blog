import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs, allRecipes } from 'contentlayer/generated';
import Main from './Main';

export default async function Page() {
  const sortedBlogs = sortPosts(allBlogs);
  const sortedRecipes = sortPosts(allRecipes);
  const blogs = allCoreContent(sortedBlogs);
  const recipes = allCoreContent(sortedRecipes);
  return <Main blogs={blogs} recipes={recipes} />;
}
