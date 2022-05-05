import type { Config } from '@jest/types';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const config: Config.InitialOptions = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleNameMapper: {
    '^@components(.*)$': '<rootdir>/components$1',
    '^@contexts(.*)$': '<rootdir>/contexts$1',
    '^@generated(.*)$': '<rootdir>/generated$1',
    '^@hooks(.*)$': '<rootdir>/hooks$1',
    '^@lib(.*)$': '<rootdir>/lib$1',
    '^@pages(.*)$': '<rootdir>/pages$1',
    '^@styles(.*)$': '<rootdir>/styles$1',
    '^@utils(.*)$': '<rootdir>/utils$1',
    '^@types(.*)$': '<rootdir>/types$1',
    '^@state(.*)$': '<rootdir>/state$1',
    '^@wrappers(.*)$': '<rootdir>/wrappers$1',
    '^@public(.*)$': '<rootdir>/..public$1',
    '^@typings(.*)$': '<rootdir>/typings$1',
    '^@modules(.*)$': '<rootdir>/modules$1',
  },

  collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    /* Use babel-jest to transpile tests with the next/babel preset
    https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object */
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
export default createJestConfig(config);
