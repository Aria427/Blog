import { genPageMetadata } from 'app/seo';
import siteMetadata from '@/data/siteMetadata';

export const metadata = genPageMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Nomad Gourmet Chronicles',
});

export default function PrivacyPolicy() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Privacy Policy
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Last updated: January 2026
        </p>
      </div>
      <div className="prose max-w-none pt-8 pb-8 text-justify dark:prose-invert">
        <h2>Introduction</h2>
        <p>
          Welcome to {siteMetadata.title}. 
          This Privacy Policy explains how your information is collected, used, and protected when you visit this website.
        </p>

        <h2>Information I Collect</h2>
        <h3>Information You Provide</h3>
        <p>
          I may collect information you voluntarily provide, such as your email address when you contact me directly.
        </p>

        <h3>Automatically Collected Information</h3>
        <p>
          When you visit my website, I may automatically collect certain information about your device and usage, including:
        </p>
        <ul>
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Pages visited and time spent on pages</li>
          <li>Referring website addresses</li>
          <li>General geographic location (country/city level)</li>
        </ul>

        <h2>Cookies and Tracking Technologies</h2>
        <p>I use cookies and similar technologies to:</p>
        <ul>
          <li>Remember your preferences (such as dark/light theme)</li>
          <li>Understand how visitors use my website</li>
          <li>Improve my content and user experience</li>
        </ul>
        <p>
          You can control cookies through your browser settings. Disabling cookies may affect some functionality of the website.
        </p>

        <h2>Analytics</h2>
        <p>
          I use privacy-focused analytics to understand how visitors interact with my website.
          This helps me improve the content and user experience. 
          The analytics data collected is aggregated and does not personally identify you.
        </p>

        <h2>Third-Party Services</h2>
        <p>I may use the following third-party services:</p>
        <ul>
          <li>
            <strong>Hosting:</strong> This website is hosted on Vercel, which may collect server logs including IP addresses.
          </li>
          <li>
            <strong>Advertising:</strong> This website may use Google AdSense to display advertisements.
            Google AdSense uses cookies to serve ads based on your prior visits to this website or other websites.
            You can opt out of personalised advertising by visiting{' '}
            <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer">
              Google&apos;s Ads Settings
            </a>.
          </li>
        </ul>

        <h2>How I Use Your Information</h2>
        <p>I use the information collected to:</p>
        <ul>
          <li>Provide and maintain the website</li>
          <li>Respond to your enquiries</li>
          <li>Analyse website usage to improve content</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>Data Retention</h2>
        <p>
          I retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required by law.
        </p>

        <h2>Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access the personal information we hold about you</li>
          <li>Request correction of inaccurate information</li>
          <li>Request deletion of your personal information</li>
          <li>Unsubscribe from our newsletter at any time</li>
          <li>Object to the processing of your personal information</li>
        </ul>

        <h2>Children&apos;s Privacy</h2>
        <p>
          The website is not directed at children under 13 years of age. I do not knowingly collect personal information from children under 13.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          I may update this Privacy Policy from time to time. I will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact me at:{' '}
          <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
        </p>
      </div>
    </div>
  );
}
