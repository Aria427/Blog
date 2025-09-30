'use client';

import { usePathname } from 'next/navigation';
import { slug } from 'github-slugger';
import { formatDate } from 'pliny/utils/formatDate';
import { CoreContent } from 'pliny/utils/contentlayer';
import type { Blog, Recipes } from 'contentlayer/generated';
import Link from '@/components/Link';
import Tag from '@/components/Tag';
import siteMetadata from '@/data/siteMetadata';
import blogTagData from 'app/tag-data.blog.json';
import recipeTagData from 'app/tag-data.recipe.json';

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}
interface ListLayoutProps {
  posts: CoreContent<Blog | Recipes>[];
  title: string;
  initialDisplayPosts?: CoreContent<Blog | Recipes>[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const lastSegment = segments[segments.length - 1];
  const basePath = pathname
    .replace(/^\//, '') // Remove leading slash
    .replace(/\/page\/\d+\/?$/, '') // Remove any trailing /page
    .replace(/\/$/, ''); // Remove trailing slash
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages;

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            Previous
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            Next
          </Link>
        )}
      </nav>
    </div>
  );
}

export default function ListLayoutWithTags({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}: ListLayoutProps) {
  const pathname = usePathname();
  // Show only blog tags on blog pages, only recipe tags on recipe pages, combined tags elsewhere
  let tagCounts: Record<string, number>;
  if (pathname.startsWith('/blog') || (pathname.startsWith('/tags/blog') && !pathname.startsWith('/tags/recipe'))) {
    tagCounts = blogTagData;
  } else if (pathname.startsWith('/recipes') || (pathname.startsWith('/tags/recipe') && !pathname.startsWith('/tags/blog'))) {
    tagCounts = recipeTagData;
  } else {
    tagCounts = { ...blogTagData };
    for (const [tag, count] of Object.entries(recipeTagData)) {
      tagCounts[tag] = (tagCounts[tag] || 0) + Number(count);
    }
  }
  const tagKeys = Object.keys(tagCounts);
  const sortedTags = tagKeys.sort((a, b) => tagCounts[b] - tagCounts[a]);

  const displayPosts = initialDisplayPosts.length > 0 ? initialDisplayPosts : posts;

  return (
    <>
      <div>
        <div className="pt-6 pb-6">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:hidden sm:text-2xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
            {title}
          </h1>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:space-x-24">
          <div>
            <ul>
              {displayPosts.map((post) => {
                const { path, date, title, summary, tags } = post;
                return (
                  <li key={path} className="py-5">
                    <article className="flex flex-col space-y-2 xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                          <time dateTime={date} suppressHydrationWarning>
                            {formatDate(date, siteMetadata.locale)}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-3">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link href={`/${path}`} className="text-gray-900 dark:text-gray-100">
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags?.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400 text-justify">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
            {pagination && pagination.totalPages > 1 && (
              <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
          </div>
          <div className="mx-auto mt-8 flex h-full max-h-screen max-w-[280px] min-w-[280px] flex-wrap overflow-auto rounded-sm bg-gray-50 pt-5 shadow-md sm:mt-0 dark:bg-gray-900/70 dark:shadow-gray-800/40">
            <div className="px-6 py-4">
              {(pathname.startsWith('/recipes') || pathname.startsWith('/tags/recipe')) ? (
                pathname === '/recipes' ? (
                  <h3 className="text-primary-500 font-bold uppercase">All Recipes</h3>
                ) : (
                  <Link
                    href="/recipes"
                    className="hover:text-primary-500 dark:hover:text-primary-500 text-gray-700 font-bold uppercase dark:text-gray-300"
                  >
                    All Recipes
                  </Link>
                )
              ) : (pathname.startsWith('/blog') || pathname.startsWith('/tags/blog')) ? (
                pathname === '/blog' ? (
                  <h3 className="text-primary-500 font-bold uppercase">All Posts</h3>
                ) : (
                  <Link
                    href="/blog"
                    className="hover:text-primary-500 dark:hover:text-primary-500 text-gray-700 font-bold uppercase dark:text-gray-300"
                  >
                    All Posts
                  </Link>
                )
              ) : (
                <Link
                  href="/blog"
                  className="hover:text-primary-500 dark:hover:text-primary-500 text-gray-700 font-bold uppercase dark:text-gray-300"
                >
                  All Posts
                </Link>
              )}
              <ul>
                {sortedTags.map((t) => {
                  const tagSlug = slug(t);
                  const selectedTag = decodeURI(pathname.split('/tags/')[1]);
                  const highlightTag = selectedTag === tagSlug;
                  return (
                    <li key={t} className="my-3">
                      {highlightTag ? (
                        <h3 className="text-primary-500 mb-4 font-bold uppercase inline px-3 py-2 text-sm">
                          {`${t} (${tagCounts[t]})`}
                        </h3>
                      ) : (
                        <Link
                          href={`/tags/${tagSlug}`}
                          className="hover:text-primary-500 dark:hover:text-primary-500 px-3 py-2 text-sm text-gray-500 font-medium uppercase dark:text-gray-300"
                          aria-label={`View posts tagged ${t}`}
                        >
                          {`${t} (${tagCounts[t]})`}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
