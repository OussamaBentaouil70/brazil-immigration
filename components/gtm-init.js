'use client';

import { useEffect } from 'react';

export default function GTMInit() {
  useEffect(() => {
    // Initialize dataLayer immediately if not already present
    if (typeof window !== 'undefined' && !window.dataLayer) {
      window.dataLayer = window.dataLayer || [];
    }

    // Ensure GTM base values are set
    window.dataLayer.push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js',
    });
  }, []);

  return null;
}
