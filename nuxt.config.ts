// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'nuxt-mapbox',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@formkit/auto-animate/nuxt',
    'nuxt-icon',
  ],
  runtimeConfig: {
    public: {
        bucket: process.env.NUXT_PUBLIC_BUCKET,
    },
},
  devtools: { enabled: true }
})
