/* eslint-disable @typescript-eslint/naming-convention */
import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";
import solidPlugin from "vite-plugin-solid";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    solidPlugin(),
    prismjs({
      languages: ["bash", "js", "tsx", "html", "css"],
      plugins: ["copy-to-clipboard", "line-highlight"],
      css: false,
    }),
  ],
  resolve: {
    alias: {
      "@/": fileURLToPath(new URL("./src/", import.meta.url)),
      "@solid-gadgets/components": path.resolve(
        __dirname,
        "../../packages/components/src/index.ts"
      ),
      "@solid-gadgets/web-components": path.resolve(
        __dirname,
        "../../packages/web-components/src/index.ts"
      ),
      "@solid-gadgets/utils": path.resolve(__dirname, "../../packages/utils/src/index.ts"),
    },
  },
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
  },
});
