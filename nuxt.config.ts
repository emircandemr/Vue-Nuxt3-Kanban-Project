// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode' ],
    tailwindcss: {
        cssPath : '~/assets/css/tailwind.css',
        configPath : 'tailwind.config.js',
        exposeConfig : false,
        // config : {},
        injectPosition : 0 ,
        viewer : true ,
    },
    colorMode: {
        classSuffix: '',
    },
    meta : {
        link : [
            {
                href : "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" ,
                rel : "stylesheet" 
            },
        ],
    }
  })
  