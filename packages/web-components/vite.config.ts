/* eslint-disable @typescript-eslint/naming-convention */
import path from "path";

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import solidPlugin from "vite-plugin-solid";

import pkg from "./package.json";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      tsConfigFilePath: "tsconfig.build.json",
      insertTypesEntry: true,
      noEmitOnError: true,
      skipDiagnostics: false,
      logDiagnostics: true,
    }),
  ],
  resolve: {
    alias: {
      "@solid-gadgets/components": path.resolve(
        __dirname,
        "../../packages/components/src/index.ts"
      ),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      formats: ["es", "cjs"],
      fileName: format => (format === "es" ? "index.mjs" : "index.cjs"),
    },
    rollupOptions: {
      external: [...Object.keys(pkg.dependencies), "solid-js", "solid-js/web", "solid-js/store"],
    },
  },
});
