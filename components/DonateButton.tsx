import siteMetadata from '@/data/siteMetadata';

export default function DonateButton() {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600 dark:text-gray-400">Support my blog:</span>
      <div className="flex gap-2">
        <a
          href={siteMetadata.revolut}
          target="_blank"
          rel="noopener noreferrer"
          className="from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
          aria-label="Donate via Revolut"
        >
          Revolut
        </a>
        <a
          href={siteMetadata.paypal}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg bg-gradient-to-r from-primary-400 to-primary-500 px-4 py-2 text-sm font-medium text-white transition-all hover:from-primary-500 hover:to-primary-600 hover:shadow-md"
          aria-label="Donate via PayPal"
        >
          PayPal
        </a>
      </div>
    </div>
  );
}
