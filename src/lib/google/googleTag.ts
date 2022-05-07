const trackEvent = (name: string, params: Record<string, unknown>): void => {
  try {
    window.gtag('event', name, params);
  } catch (error) {
    console.warn('Error tracking event', error);
  }
};
export default trackEvent;
