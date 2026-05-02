export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/i18n",
    "@nuxt/fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/robots",
    "@nuxt/eslint",
    "@pinia/nuxt",
  ],

  i18n: {
    locales: [
      { code: "en", iso: "en-US", file: "en.ts" },
      { code: "fr", iso: "fr-FR", file: "fr.ts" },
    ],
    defaultLocale: "fr",
    langDir: "locales/",
    strategy: "no_prefix",
  },

  primevue: {
    importTheme: { from: "@/utils/theme" },
    options: {
      ripple: true,
    },
  },

  css: ["primeicons/primeicons.css"],
  compatibilityDate: "2024-07-14",
  plugins: ["~/plugins/calendar-heatmap.client.ts"],
  runtimeConfig: {
    githubToken: process.env.NUXT_GITHUB_TOKEN,
    Env: process.env.NODE_ENV,
    xboxAuthorization: process.env.NUXT_XBOX_AUTHORIZATION,
    spotifyClientId: process.env.NUXT_SPOTIFY_CLIENT_ID,
    spotifyClientSecret: process.env.NUXT_SPOTIFY_CLIENT_SECRET,
  },

  app: {
    head: {
      titleTemplate: "%page - Kylian Renault",
      noscript: [{ innerHTML: "This website requires JavaScript." }],
      meta: [
        {
          charset: "utf-8",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
      ],
    },
  },
});
