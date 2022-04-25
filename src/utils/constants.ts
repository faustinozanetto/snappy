/**
 * @returns true if app is in production or false if in development.
 */
export const __PROD__: boolean = process.env.NODE_ENV === 'production';

export const __VERSION__: string = process.env.VERSION || '0.0.0';
