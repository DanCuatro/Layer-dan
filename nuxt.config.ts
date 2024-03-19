// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    'nuxt-mapbox',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@formkit/auto-animate/nuxt',
    'nuxt-icon',
  ],
  devtools: { enabled: true }
})
