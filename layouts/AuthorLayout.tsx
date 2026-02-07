import { ReactNode } from 'react';
import type { Author } from 'contentlayer/generated';
import SocialIcon from '@/components/social-icons';
import Image from '@/components/Image';
import { CoreContent } from 'pliny/utils/contentlayer';
import siteMetadata from '@/data/siteMetadata';

interface Props {
  children: ReactNode;
  content: CoreContent<Author>;
}

export default function AuthorLayout({ children, content }: Props) {
  const { avatar, role } = content;

  return (
    <>
      <div className="divide-primary-500/30 divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:space-y-0 xl:gap-x-8">
          <div className="flex flex-col items-center space-x-2 pt-8">
            {avatar && (
              <Image
                src={avatar}
                alt="avatar"
                width={192}
                height={192}
                className="h-48 w-48 rounded-full"
              />
            )}
            <h3 className="pt-4 pb-2 text-2xl leading-8 font-bold tracking-tight">
              {siteMetadata.author}
            </h3>
            <div className="text-gray-500 dark:text-gray-400">{role}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              {/*
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} />
              */}
            </div>
          </div>
          <div className="prose dark:prose-invert max-w-none pt-8 pb-8 xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
