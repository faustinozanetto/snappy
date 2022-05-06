import { __GTAGID__, __PROD__ } from '@lib/constants';

export const initializeGTag = (): void => {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || {};

  if (__PROD__) {
    console.log('Enabled analytics');

    window.gtag = function gtag(..._args) {
      window.dataLayer.push(_args);
    };

    window.gtag('js', new Date());
    window.gtag('config', __GTAGID__, {
      page_path: window.location.pathname,
    });
  } else {
    console.log('Disabled analytics');
    window.gtag = (...args) => console.log('Analytics event: ', args);
  }
};
export const trackEvent = (name: string, params: Record<string, unknown>): void => {
  try {
    window.gtag('event', name, params);
  } catch (error) {
    console.warn('Error tracking event', error);
  }
};
