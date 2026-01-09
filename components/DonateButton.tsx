import siteMetadata from '@/data/siteMetadata';

export default function DonateButton() {
  return (
    <div className="border-primary-500/30 bg-primary-100 dark:border-primary-500/20 dark:bg-primary-950/20 rounded-lg border-2 px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          Support my blog:
        </span>
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
            className="from-primary-400 to-primary-500 hover:from-primary-500 hover:to-primary-600 rounded-lg bg-gradient-to-r px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-md"
            aria-label="Donate via PayPal"
          >
            PayPal
          </a>
        </div>
      </div>
    </div>
  );
}
