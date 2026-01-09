import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Root } from 'mdast';

// Match Instagram post URLs and reels (stories/highlights are not embeddable)
const INSTAGRAM_REGEX =
  /^https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel)\/[\w-]+\/?(?:\?.*)?$/;

/**
 * Remark plugin to convert standalone Instagram URLs into InstagramEmbed components
 */
const remarkInstagramEmbed: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, 'paragraph', (node: any, index: any, parent: any) => {
      // Check if paragraph contains a link to Instagram
      if (node.children && node.children.length === 1) {
        const child = node.children[0];

        // Case 1: Direct text node with Instagram URL
        if (child.type === 'text' && INSTAGRAM_REGEX.test(child.value.trim())) {
          const url = child.value.trim();

          const jsxNode = {
            type: 'mdxJsxFlowElement',
            name: 'InstagramEmbed',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'url',
                value: url,
              },
            ],
            children: [],
          };

          if (parent && typeof index === 'number') {
            parent.children[index] = jsxNode;
          }

          return;
        }

        // Case 2: Link node with Instagram URL
        if (child.type === 'link' && INSTAGRAM_REGEX.test(child.url)) {
          const url = child.url;

          const jsxNode = {
            type: 'mdxJsxFlowElement',
            name: 'InstagramEmbed',
            attributes: [
              {
                type: 'mdxJsxAttribute',
                name: 'url',
                value: url,
              },
            ],
            children: [],
          };

          if (parent && typeof index === 'number') {
            parent.children[index] = jsxNode;
          }
        }
      }
    });
  };
};

export default remarkInstagramEmbed;
