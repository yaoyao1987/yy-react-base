const path = require('path')
module.exports = {
  verbose: true,
  collectCoverage: true,
  cacheDirectory: '.cache',
  roots: ['<rootDir>/src/components'],
  // 这个属性是定义在每个测试文件运行之前，且在测试环境准备好后就会立即执行的文件或模块
  setupFilesAfterEnv: ['./tests/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy',
    '^components$': '<rootDir>/components/index.tsx',
    '^components(.*)$': '<rootDir>/components/$1',
    '@util': path.resolve(__dirname, './src/components/_util'),
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.ts?x?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: './tsconfig.json'
    }
  },
  testPathIgnorePatterns: ['/node_modules/', '/lib/', '/es/', '/dist/'],
  // preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.ts?x?$': 'ts-jest',
  // },
  // globals: {
  //   'ts-jest': {
  //     tsConfig: './tsconfig.json'
  //   }
  // },
  // testPathIgnorePatterns: [
  //   '<rootDir>/node_modules/',
  //   '<rootDir>/lib/',
  //   '<rootDir>/dist/',
  //   '<rootDir>/es/',
  // ],
  // moduleNameMapper: {
  //   '\\.(css|less|scss)$': 'identity-obj-proxy',
  //   '@util': path.resolve(__dirname, './src/components/_util')
  // },
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // testEnvironment: 'jsdom',
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx|js)?$',
}
