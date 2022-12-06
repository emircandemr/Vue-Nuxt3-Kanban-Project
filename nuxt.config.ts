// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss' ],
    buildModules: ['@pinia/nuxt','@nuxtjs/moment'],
    tailwindcss: {
        cssPath : '~/assets/css/tailwind.css',
        configPath : 'tailwind.config.js',
        exposeConfig : false,
        injectPosition : 0 ,
        viewer : true ,
    },
    meta : {
        link : [
            {
                href : "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
                rel : "stylesheet" 
            },
        ],
    },
    publicRuntimeConfig: {
        FIREBASE_API_KEY : process.env.FIREBASE_API_KEY,
        ADMIN_UUID : process.env.ADMIN_UUID,
    },
    privateRuntimeConfig: {
        FIREBASE_API_KEY : process.env.FIREBASE_API_KEY,
        ADMIN_UUID : process.env.ADMIN_UUID,

    },
  })
  