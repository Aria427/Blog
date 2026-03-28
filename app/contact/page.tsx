import { genPageMetadata } from 'app/seo';
import siteMetadata from '@/data/siteMetadata';
import SocialIcon from '@/components/social-icons';

export const metadata = genPageMetadata({
  title: 'Contact',
  description: 'Get in touch with Nomad Gourmet Chronicles',
});

export default function Contact() {
  return (
    <div className="divide-primary-500/30 divide-y">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Contact
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Get in touch - I&apos;d love to hear from you!
        </p>
      </div>
      <div className="pt-8 pb-8">
        <div className="prose dark:prose-invert max-w-none text-justify">
          <p>
            Have a question about a recipe? Want to share your own travel stories? Or just want to
            say hello? I&apos;d love to hear from you!
          </p>
          <p>
            Whether you&apos;ve tried one of my recipes, spotted an error, or have suggestions for
            new content, your feedback is always welcome.
          </p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Connect on Social Media
          </h2>
          <p className="mt-3 text-justify text-gray-500 dark:text-gray-400">
            You can also find me on these platforms. Feel free to reach out or follow along for more
            travel adventures and recipe inspiration.
          </p>
          <div className="mt-4 flex space-x-5">
            {siteMetadata.email && (
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={8} />
            )}
            {siteMetadata.instagram && (
              <SocialIcon kind="instagram" href={siteMetadata.instagram} size={8} />
            )}
            {siteMetadata.facebook && (
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={8} />
            )}
            {siteMetadata.linkedin && (
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={8} />
            )}
            {siteMetadata.github && (
              <SocialIcon kind="github" href={siteMetadata.github} size={8} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
