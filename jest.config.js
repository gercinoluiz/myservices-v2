module.exports = {
     preset: 'jest-expo',
     setupFilesAfterEnv: [
          '@testing-library/jest-native/extend-expect',
          'jest-styled-components',
          './testFiles/index.ts',
     ],

     collectCoverage: true,
     collectCoverageFrom: [
          '**/*.{js,jsx}',
          '!**/coverage/**',
          '!**/node_modules/**',
          '!**/babel.config.js',
          '!**/jest.setup.js',
     ],
}
