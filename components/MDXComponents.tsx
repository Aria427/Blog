import TOCInline from 'pliny/ui/TOCInline';
import Pre from 'pliny/ui/Pre';
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm';
import type { MDXComponents } from 'mdx/types';
import Image from './Image';
import CustomLink from './Link';
import TableWrapper from './TableWrapper';
import InstagramEmbed from './InstagramEmbed';

const MDXImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
  <Image
    alt={props.alt || ''}
    src={props.src || ''}
    width={768}
    height={432}
    sizes="(max-width: 768px) 100vw, 768px"
    style={{ width: '100%', height: 'auto' }}
    loading="lazy"
  />
);

export const components: MDXComponents = {
  Image,
  img: MDXImage,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
  InstagramEmbed,
};
