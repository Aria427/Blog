'use client';

import { useState, useEffect } from 'react';
import Link from './Link';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent === null) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowConsent(false);
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-gray-100 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-sm text-gray-700 dark:text-gray-300 sm:text-left">
            This website uses cookies to enhance your experience and analyse site traffic.
            See the{' '}
            <Link href="/privacy" className="text-primary-500 hover:text-primary-600 underline">
              Privacy Policy
            </Link>{' '}
            for more information.
          </p>
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="rounded-md bg-primary-500 px-4 py-2 text-sm font-medium text-white hover:bg-primary-600"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
