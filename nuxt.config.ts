// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'nuxt-mapbox',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@formkit/auto-animate/nuxt',
    'nuxt-icon',
    '@pinia/nuxt',
  ],
  runtimeConfig: {
    public: {
        bucket: process.env.NUXT_PUBLIC_BUCKET,
        apiBase: process.env.NUXT_PUBLIC_API_BASE,
    },
  },
  devServer: {
    port: process.env.NUXT_PUBLIC_PORT || 3000
  },
  devtools: { enabled: true }
})
