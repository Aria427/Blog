import { Author, allAuthors } from 'contentlayer/generated';
import { MDXLayoutRenderer } from 'pliny/mdx-components';
import AuthorLayout from '@/layouts/AuthorLayout';
import { coreContent } from 'pliny/utils/contentlayer';
import { genPageMetadata } from 'app/seo';
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
// import NewsletterForm from 'pliny/ui/NewsletterForm'

export const metadata = genPageMetadata({ title: 'Home' });

const MAX_DISPLAY = 4;

export default function Home({ posts }) {
  const author = allAuthors.find((p) => p.slug === 'author/default') as Author;
  const mainContent = coreContent(author);

  // Filter out draft posts
  const filteredPosts = posts.filter((post) => post.draft !== true);
  
  return (
    <>
      <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 pt-6">
        {/* About Section (Left) */}
        <AuthorLayout content={mainContent}>
          <div className="text-justify">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
        </AuthorLayout>
        {/* Latest List (Right) */}
        <div className="w-full xl:w-1/3 flex justify-center">
          <div className="block h-full max-h-screen max-w-[320px] min-w-[280px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 mx-auto">
            <div className="px-6 py-4">
              <h3 className="font-bold text-primary-500 uppercase mb-4">Latest Posts & Recipes</h3>
              <ul>
                {!filteredPosts.length && <li>No posts found.</li>}
                {filteredPosts.slice(0, MAX_DISPLAY).map((post) => {
                  const { slug, date, title, type } = post;
                  const prefix = type === 'Recipes' ? '/recipes/' : '/blog/';
                  return (
                    <li key={`${type || 'post'}-${slug}`} className="mb-6">
                      <div className="space-y-1 ">
                        <h4 className="text-lg font-bold ">
                          <Link href={`${prefix}${slug}`} className="text-gray-900 dark:text-gray-100">
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
              {filteredPosts.length > MAX_DISPLAY && (
                <div className="flex justify-end text-base leading-6 font-medium mt-4">
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
