module.exports = {
    roots: ['<rootDir>/src'],
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{ts,tsx}',
      '!<rootDir>/src/main/**/*',
      '!<rootDir>/src/domain/**/*',
      '!<rootDir>/src/presentation/components/router/**/*',
      '!<rootDir>/src/presentation/pages/index.ts',
      '!**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom', //node
    transform: {
      '.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
      '@/(.*)': '<rootDir>/src/$1',
      '\\.scss$': 'identity-obj-proxy'
    }
  }