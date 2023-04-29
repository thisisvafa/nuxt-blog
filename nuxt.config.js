export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // scripts: [
    //   { src: "https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js", referrerpolicy: true }
    // ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axios',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  // auth: {
  //   strategies: {
  //     'laravelSanctum': {
  //       provider: 'laravel/sanctum',
  //       url: 'http://localhost',
  //       endpoints:{
  //         login: {s
  //           url: '/api/login',
  //         }
  //       }
  //     }  
        
  //   }
  // },

  // auth: {
  //   strategies: {
  //     cookie: {
  //       endpoints: {
  //         csrf: {
  //           url: '/sanctum/csrf-cookie'
  //         },
  //         login: {
  //           url: '/api/login',
  //         },
  //         register: {
  //           url: '/api/register',
  //         },
  //         logout: {
  //           url: '/api/logout',
  //         },
  //         user: {
  //           url: '/api/user',
  //         }
  //       },
  //       user: {
  //         property: 'data'
  //       },
  //     }
  //   },

  //   redirect: {
  //     login: '/auth/login',
  //     logout: '/auth/login',
  //     home: '/dashboard',
  //   },

  //   plugins: [
  //     '~/plugins/axios'
  //   ]
  // },

  // auth: {
  //   strategies: {
  //     cookie: {
  //       endpoints: {
  //         csrf: {
  //           url: '/sanctum/csrf-cookie'
  //         },
  //         login: {
  //           url: '/login',
  //         },
  //         register: {
  //           url: '/register',
  //         },
  //         logout: {
  //           url: '/logout',
  //         },
  //         user: {
  //           url: '/user',
  //         }
  //       },
  //       user: {
  //         property: 'data'
  //       },
  //     }
  //   },

  //   redirect: {
  //     login: '/auth/login',
  //     logout: '/auth/login',
  //     home: '/dashboard',
  //   },

  //   plugins: [
  //     '~/plugins/axios'
  //   ]
  // },
  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: process.env.PUBLIC_API_URL,
        // url: 'https://api.japachronicles.xyz',
        endpoints:{
          login: {
            url: '/login',
          },
          register: {
            url: '/register',
          },
          logout: {
            url: '/logout',
          },
          user: {
            url: '/api/user',
          }
        },
        user: {
          property: false
        }
      }
    },
      redirect: {
        login: '/auth/login',
        logout: '/auth/login',
        home: '/dashboard',
      },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.PUBLIC_API_URL,
    // baseURL: 'https://api.japachronicles.xyz',
    credentials: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  publicRuntimeConfig: {
    myPublicVariable: process.env.PUBLIC_IMAGE_API_URL,
    myLink: process.env.MAIN_URL,
  },

  // env:{
  //   baseUrl: process.env.BASE_URL || 'http://localhost/'
  // },
}
