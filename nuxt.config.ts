// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: false },
    ssr: false,
    // vue: {
    //     compilerOptions: {
    //         isCustomElement: (tag) => tag === 'MyPrefix-Navigation',
    //     },
    // },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                    quietDeps: true,
                    additionalData: '@import  "@/assets/style/color.scss";',
                },
            },
        },
    },
    css: ['@/assets/style/index.scss'],
    modules: [
        'nuxt-quasar-ui',
        '@nuxt/icon',
        '@nuxtjs/google-fonts',
        'nuxt-swiper',
        'vue3-carousel-nuxt',
    ],
    icon: {
        serverBundle: {
            collections: ['uil', 'mdi'],
        },
    },
    carousel: {
        prefix: 'MyPrefix',
    },
    googleFonts: {
        families: {
            Montserrat: '200..700',
        },
    },
    quasar: {
        config: {
            brand: {
                primary: '#FEC11B',
            },
        },
    },
    compatibilityDate: '2024-11-16',
})
