import type {Config} from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  rootDir: '.',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  clearMocks: true,
  moduleFileExtensions: [
    'js',
    'ts',
    'tsx',
  ],
  moduleDirectories: [
    'node_modules', 'src'
  ],
  preset: "ts-jest",
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.app.json',
      },
    ],
  },
}

export default config;
