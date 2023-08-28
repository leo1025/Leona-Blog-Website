import { defineNuxtConfig } from 'nuxt/config'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [ '~/node_modules/bootstrap/dist/css/bootstrap.min.css', '~/assets/styles/main.css' ],
})