import { BuildOptions } from "https://deno.land/x/dnt@0.30.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {},

  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "@urlland/url-concat",
    version,
    description: "URL parts concatenating faithful to RFC 3986",
    keywords: [
      "url",
      "concat",
      "concatenate",
      "join",
      "url-concat",
      "url-join",
    ],
    license: "MIT",
    homepage: "https://github.com/urlland/url-concat",
    repository: {
      type: "git",
      url: "git+https://github.com/urlland/url-concat.git",
    },
    bugs: {
      url: "https://github.com/urlland/url-concat/issues",
    },
    sideEffects: false,
    type: "module",
    publishConfig: {
      access: "public",
    },
  },
  packageManager: "pnpm",
});
