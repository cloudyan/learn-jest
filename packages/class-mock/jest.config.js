/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest', // 这个是jest的默认配置
    '^.+\\.ts?$': 'ts-jest', // typescript转换
  },
  projects: [
    '<rootDir>',
    // '<rootDir>/examples/*/',
  ],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1', // 用@来代替根目录的src目录
    // 因为jest中配置了@别名，因此也会将@babel开头的库也一起转换了，导致无法使用babel
  },
  collectCoverageFrom: [
    '__tests__/*.js',
    '**/packages/*/**/*.ts',
    '!**/bin/**',
    '!**/cli/**',
    '!**/perf/**',
    '!**/__mocks__/**',
    '!**/__tests__/**',
    '!**/build/**',
    '!**/vendor/**',
    '!e2e/**',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  // watchPathIgnorePatterns: ['coverage'],
  // watchPlugins: [
  //   'jest-watch-typeahead/filename',
  //   'jest-watch-typeahead/testname',
  // ],
};
