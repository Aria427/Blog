'use client';

import { Comments as CommentsComponent } from 'pliny/comments';
import { useState } from 'react';
import siteMetadata from '@/data/siteMetadata';

export default function Comments({ slug }: { slug: string }) {
  const [loadComments, setLoadComments] = useState(false);

  if (!siteMetadata.comments?.provider) {
    return null;
  }
  return (
    <>
      {loadComments ? (
        <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
      ) : (
        <button
          className="bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 rounded-md px-4 py-2 font-medium text-white transition"
          onClick={() => setLoadComments(true)}
        >
          Load Comments
        </button>
      )}
    </>
  );
}
