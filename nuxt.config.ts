// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode' ],
    buildModules: ['@pinia/nuxt'],
    tailwindcss: {
        cssPath : '~/assets/css/tailwind.css',
        configPath : 'tailwind.config.js',
        exposeConfig : false,
        injectPosition : 0 ,
        viewer : true ,
    },
    colorMode: {
        classSuffix: '',
    },
    meta : {
        link : [
            {
                href : "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0",
                rel : "stylesheet" 
            },
        ],
    }
  })
  