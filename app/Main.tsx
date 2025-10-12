import { Author, allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import AuthorLayout from '@/layouts/AuthorLayout';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';
import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import { formatDate } from 'pliny/utils/formatDate';
// import NewsletterForm from 'pliny/ui/NewsletterForm'

export const metadata = genPageMetadata({ title: 'Home' });

const MAX_DISPLAY = 2;

export default function Home({ blogs, recipes }) {
  const author = allAuthors.find((p) => p.slug === 'author/default') as Author;
  const mainContent = coreContent(author);

  // Filter out draft posts
  const filteredBlogs = blogs.filter((post) => post.draft !== true);
  const filteredRecipes = recipes.filter((post) => post.draft !== true);

  return (
    <>
      <div className="flex flex-col gap-8 pt-6 lg:flex-row xl:gap-16">
        {/* About Section (Left) */}
        <AuthorLayout content={mainContent}>
          <div className="text-justify">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
        </AuthorLayout>
        {/* Latest Lists (Right) */}
        <div className="flex w-full flex-col gap-8 xl:w-1/3">
          {/* Latest Posts */}
          <div className="mx-auto block h-full max-h-[400px] w-full max-w-[320px] min-w-[280px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40">
            <div className="px-6 py-4">
              <h3 className="text-primary-500 mb-4 font-bold uppercase">Latest Posts</h3>
              <ul>
                {!filteredBlogs.length && <li>No posts found.</li>}
                {filteredBlogs.slice(0, MAX_DISPLAY).map((post) => {
                  const { slug, date, title } = post;
                  return (
                    <li key={`blog-${slug}`} className="mb-6">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold">
                          <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                            {title}
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {filteredBlogs.length > 0 && (
                <div className="mt-4 flex justify-end text-base leading-6 font-medium">
                  <Link
                    href="/blog"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="All posts"
                  >
                    All Posts &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Latest Recipes */}
          <div className="mx-auto block h-full max-h-[400px] w-full max-w-[320px] min-w-[280px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40">
            <div className="px-6 py-4">
              <h3 className="text-primary-500 mb-4 font-bold uppercase">Latest Recipes</h3>
              <ul>
                {!filteredRecipes.length && <li>No recipes found.</li>}
                {filteredRecipes.slice(0, MAX_DISPLAY).map((post) => {
                  const { slug, date, title } = post;
                  return (
                    <li key={`recipe-${slug}`} className="mb-6">
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold">
                          <Link
                            href={`/recipes/${slug}`}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h4>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
              {filteredRecipes.length > 0 && (
                <div className="mt-4 flex justify-end text-base leading-6 font-medium">
                  <Link
                    href="/recipes"
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label="All recipes"
                  >
                    All Recipes &rarr;
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/*
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
      */}
    </>
  );
}
