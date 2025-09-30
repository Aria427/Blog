import React, { useState } from 'react';
import Tag from '@/components/Tag';

type Post = {
  type?: string;
  tags?: string[];
};

interface TabSectionProps {
  posts: Post[];
}

const TabSection: React.FC<TabSectionProps> = ({ posts }) => {
  const [activeTab, setActiveTab] = useState<'blog' | 'recipes'>('blog');
  const blogTags = posts.filter((p) => p.type === 'Blog').flatMap((p) => p.tags || []);
  const recipeTags = posts.filter((p) => p.type === 'Recipes').flatMap((p) => p.tags || []);
  // Count tags for each type independently, regardless of overlap
  const blogTagCounts = blogTags.reduce((acc: Record<string, number>, tag: string) => {
    tag = String(tag);
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  const recipeTagCounts = recipeTags.reduce((acc: Record<string, number>, tag: string) => {
    tag = String(tag);
    acc[tag] = (acc[tag] || 0) + 1;
    return acc;
  }, {});
  return (
    <div className="w-full">
  <div className="mb-4 flex gap-4">
        <button
          className={`rounded px-4 py-2 ${activeTab === 'blog' ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setActiveTab('blog')}
        >
          Blog Tags
        </button>
        <button
          className={`rounded px-4 py-2 ${activeTab === 'recipes' ? 'bg-primary-500 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
          onClick={() => setActiveTab('recipes')}
        >
          Recipe Tags
        </button>
      </div>
      {activeTab === 'blog' && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(blogTagCounts).map(([tag, count]) => (
            <Tag key={`blog-${tag}`} text={`${tag} (${count})`} />
          ))}
        </div>
      )}
      {activeTab === 'recipes' && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(recipeTagCounts).map(([tag, count]) => (
            <Tag key={`recipe-${tag}`} text={`${tag} (${count})`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TabSection;
