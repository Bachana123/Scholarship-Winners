import tailwindcss from "@tailwindcss/vite";
import Aura from '@primeuix/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    components: {
      exclude: ['Form', 'FormField']
    },
    options: {
        theme: {
            preset: Aura
        }
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_BASE_URL,
    }
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr: true,
})