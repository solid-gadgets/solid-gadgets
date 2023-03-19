const pkgRootPath = `<rootDir>`;
const solidJsPath = `${pkgRootPath}/../../node_modules/solid-js`;

module.exports = {
  preset: "ts-jest",

  globals: {
    "ts-jest": {
      tsconfig: `${pkgRootPath}/tsconfig.json`,
      babelConfig: {
        presets: ["@babel/preset-env", "babel-preset-solid"]
      }
    }
  },

  testEnvironment: "jsdom",

  setupFilesAfterEnv: [`${pkgRootPath}/../../jest.setup.ts`, "regenerator-runtime"],

  moduleNameMapper: {
    "solid-js/web": `${solidJsPath}/web/dist/web.cjs`,
    "solid-js/store": `${solidJsPath}/store/dist/store.cjs`,
    "solid-js": `${solidJsPath}/dist/solid.cjs`,
  },

  verbose: true,
  testTimeout: 30000
};
