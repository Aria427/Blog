import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer';
import { allBlogs, allRecipes } from 'contentlayer/generated';
import Main from './Main';

export default async function Page() {
  const sortedPosts = sortPosts([...allBlogs, ...allRecipes]);
  const posts = allCoreContent(sortedPosts);
  return <Main posts={posts} />;
}
