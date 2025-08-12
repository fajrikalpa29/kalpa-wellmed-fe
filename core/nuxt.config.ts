// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";
const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  experimental: {
    localLayerAliases: true,
  },
  components: [
    {
      pathPrefix: false,
      path: join(currentDir, "./components"),
    },
  ],
  extends: ["../layers/base-ui"],
  modules: ["@nuxt/icon", "@nuxt/image"],
  app: {
    head: {
      title: "Wellmed Clinic",
      titleTemplate: "%s | Kalpa Inovasi Digital",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no",
        },
        {
          name: "description",
          content: "Wellmed Clinic - Kalpa Inovasi Digital",
        },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  vite: {
    resolve: {
      alias: {
        "@base": fileURLToPath(new URL("./../layers/base-ui/", import.meta.url)),
      },
    },
    build: {
      chunkSizeWarningLimit: 5000,
      rollupOptions: {
        external: [],
      },
    },
  },
});