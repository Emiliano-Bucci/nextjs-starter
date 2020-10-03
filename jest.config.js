module.exports = {
  preset: "ts-jest",
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsConfig: "tsconfig.jest.json",
    },
  },
  snapshotSerializers: ["jest-emotion"],
  testMatch: ["**/**.test.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  modulePaths: ["<rootDir>"],
  testURL: "http://localhost",
  moduleNameMapper: {
    "\\.svg": "<rootDir>/testMocks.ts",
    "\\.(css|jpg|png)$": "<rootDir>/empty-module.js",
    "^.+\\.(ts|tsx)?$": "ts-jest",
  },
  moduleDirectories: ["node_modules", "./src"],
  notify: true,
  notifyMode: "always",
  collectCoverageFrom: ["**/*.{ts,tsx}", "!<rootDir>/node_modules/"],
  coverageThreshold: {
    global: {
      statements: 55,
      branches: 35,
      functions: 40,
      lines: 55,
    },
  },
};
