import { genPageMetadata } from 'app/seo';
import siteMetadata from '@/data/siteMetadata';

export const metadata = genPageMetadata({
  title: 'Terms & Disclaimer',
  description: 'Terms of Use and Disclaimer for Nomad Gourmet Chronicles',
});

export default function Terms() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14 dark:text-gray-100">
          Terms & Disclaimer
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Last updated: January 2026
        </p>
      </div>
      <div className="prose max-w-none pt-8 pb-8 text-justify dark:prose-invert">
        <h2>Terms of Use</h2>
        <p>
          Welcome to {siteMetadata.title}. By accessing and using this website, you agree to be bound by these Terms of Use. 
          If you do not agree with any part of these terms, please do not use this website.
        </p>

        <h3>Use of Content</h3>
        <p>
          All content on this website, including but not limited to text, recipes, photographs, and graphics, is the property of {siteMetadata.title} and is protected by copyright laws. 
          You may:
        </p>
        <ul>
          <li>View and print content for personal, non-commercial use</li>
          <li>Share links to our content on social media</li>
          <li>
            Reference my recipes with proper attribution and a link back to the original post
          </li>
        </ul>
        <p>You may not:</p>
        <ul>
          <li>Republish, sell, or redistribute my content without written permission</li>
          <li>Copy entire recipes or substantial portions to other websites</li>
          <li>Use my photographs without explicit permission</li>
          <li>Use my content for commercial purposes without authorisation</li>
        </ul>

        <h3>User Conduct</h3>
        <p>When interacting with this website, you agree not to:</p>
        <ul>
          <li>Post or transmit any unlawful, harmful, or offensive content</li>
          <li>Attempt to gain unauthorised access to any part of the website</li>
          <li>Interfere with or disrupt the website or servers</li>
          <li>Use automated systems to access the website without permission</li>
        </ul>

        <h2>Disclaimer</h2>

        <h3>General Information</h3>
        <p>
          The content on {siteMetadata.title} is provided for general informational and entertainment purposes only. 
          While I strive to provide accurate and up-to-date information, I make no representations or warranties of any kind, express or implied,
          about the completeness, accuracy, reliability, or suitability of the information.
        </p>

        <h3>Recipe Disclaimer</h3>
        <p>
          The recipes shared on this website are based on my personal experience and preferences.
          Please note:
        </p>
        <ul>
          <li>
            <strong>Allergies & Dietary Restrictions:</strong> 
            While I label recipes as gluten-free, lactose-free, or pescatarian where applicable, I am not a certified nutritionist. 
            Always check ingredient labels and consult with a healthcare professional if you have specific dietary concerns or allergies.
          </li>
          <li>
            <strong>Nutritional Information:</strong> 
            Any nutritional information provided is an estimate only and may vary based on specific ingredients used, portion sizes, and
            preparation methods.
          </li>
          <li>
            <strong>Cooking Results:</strong> 
            Results may vary based on equipment, ingredient quality, altitude, and individual cooking skills. I cannot guarantee specific outcomes.
          </li>
          <li>
            <strong>Food Safety:</strong> 
            Please follow proper food safety guidelines when preparing, cooking, and storing food. 
            Ensure all ingredients, especially seafood, are fresh and properly handled.
          </li>
        </ul>

        <h3>Travel Information</h3>
        <p>
          Travel content on this website reflects my personal experiences at the time of my visits.
          Please note:
        </p>
        <ul>
          <li>Prices, opening hours, and availability may change without notice</li>
          <li>Always verify current information before making travel plans</li>
          <li>Travel recommendations are subjective and based on personal preference</li>
          <li>I am not responsible for any travel-related issues or disappointments</li>
        </ul>

        <h3>External Links</h3>
        <p>
          This website may contain links to external websites. 
          I am not responsible for the content, privacy practices, or availability of these external sites. 
          The inclusion of any link does not imply endorsement or approval.
        </p>

        <h3>Affiliate Links & Sponsorships</h3>
        <p>
          This website may contain affiliate links or sponsored content. 
          This means I may earn a small commission if you make a purchase through these links, at no additional cost to you.
          Any sponsored content will be clearly disclosed. My opinions and recommendations remain my own.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {siteMetadata.title} and its author shall not be
          liable for any indirect, incidental, special, consequential, or punitive damages, or any
          loss of profits or revenues, whether incurred directly or indirectly, or any loss of data,
          use, goodwill, or other intangible losses resulting from:
        </p>
        <ul>
          <li>Your use or inability to use this website</li>
          <li>Any errors or omissions in the content</li>
          <li>Any unauthorised access to or use of our servers</li>
          <li>Any recipes, advice, or information obtained from this website</li>
        </ul>

        <h2>Changes to These Terms</h2>
        <p>
          I reserve the right to update or modify these terms at any time without prior notice. 
          Your continued use of the website following any changes constitutes acceptance of those changes.
        </p>

        <h2>Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about these Terms & Disclaimer, please contact me at:{' '}
          <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
        </p>
      </div>
    </div>
  );
}
