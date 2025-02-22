// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    // SCSS file in the project
    "~/assets/style/main.scss", // you should add main.scss somewhere in your app
  ],
  
  i18n: {
    locales: [
      { code: 'en', file: 'lang/en.ts', name: 'English' },
      { code: 'ar', file: 'lang/ar.ts', name: 'Arabic' },
    ],
    defaultLocale: 'en', // Set the default language
    lazy: true, // Load translations lazily
    // langDir: 'i18n/', // Path to your translations folder
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    'nuxt-swiper',
  ]
})