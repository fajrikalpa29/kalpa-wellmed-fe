// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "node:url";
import { dirname, join } from "path";
import { preset } from './theme-preset';
const currentDir = dirname(fileURLToPath(import.meta.url));

export default defineNuxtConfig({
  $meta: {
    name: "base-ui",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: [
    join(currentDir, "./app/assets/css/main.css"),
    // join(currentDir, "./app/assets/css/vendors/simplebar.css"),
    join(currentDir, "./app/assets/css/themes/hurricane.css"),
  ],
  components: [
    {
      pathPrefix: false,
      path: join(currentDir, "./app/components"),
      priority: 1,
    },
  ],
  imports: {
    dirs: [join(currentDir, "./app/stores")],
  },
  headlessui: {
    prefix: "Headless",
  },
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: preset,
        ripple: true,
        options: {
          darkModeSelector: "class",
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@primevue/nuxt-module",
    "@vueuse/nuxt",
    "nuxt-headlessui",
    "@pinia/nuxt", // required
    "pinia-plugin-persistedstate/nuxt",
    // "dayjs-nuxt",
    // "@vee-validate/nuxt",
    // "nuxt-permissions",
  ],
  vite: {
    resolve: {
      alias: {
        "@": join(currentDir, "./app/"),
        "@assets": join(currentDir, "./app/assets"),
      },
    },
    build: {
      chunkSizeWarningLimit: 5000,
    },
  },
});