export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'trocafrontend',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', integrity: 'sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC', crossorigin: 'anonymous' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.compat.min.css', integrity: 'sha512-b42SanD3pNHoihKwgABd18JUZ2g9j423/frxIP5/gtYgfBz/0nDHGdY/3hi+3JwhSckM3JLklQ/T6tJmV7mZEw==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/tiny-slider.min.css', integrity: 'sha512-06CZo7raVnbbD3BlY8/hGUoUCuhk8sTdVGV3m3nuh9i2R+UmkLbLRTE/My8TuJ3ALbDulhBObJQWtOUt0mXzNQ==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css', crossorigin: 'anonymous', referrerpolicy: 'no-referrer' },
      { rel: 'stylesheet', href: 'https://cdn.lineicons.com/3.0/lineicons.css' }
    ],
    script: [
      { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM', crossorigin: 'anonymous', body: true  },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/tiny-slider/2.9.4/min/tiny-slider.js', integrity: 'sha512-j+F4W//4Pu39at5I8HC8q2l1BNz4OF3ju39HyWeqKQagW6ww3ZF9gFcu8rzUbyTDY7gEo/vqqzGte0UPpo65QQ==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer', body: true  },
      { src: '/js/wow.min.js', body: true },
      { src: '/js/main.js', body: true }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/styles.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'top-center',
    iconPack: 'fontawesome',
    duration: 3000,
    register: [
      {
        name: 'defaultSuccess',
        message: (payload) =>
          !payload.msg ? 'success' : payload.msg,
        options: {
          type: 'success',
          icon: 'check'
        }
      },
      {
        name: 'defaultError',
        message: (payload) =>
          !payload.msg ? 'Oops.. Something went wrong!' : payload.msg,
        options: {
          type: 'error',
          icon: 'times'
        }
      }
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:8000/',
  },

  auth: {
    strategies: {
      local: {
        endpoints: {
          // * Authentication
          login: {
            url: 'auth/v1/token/login/',
            method: 'post',
            propertyName: 'auth_token'
          },
          logout: {
            url: 'auth/v1/token/logout/',
            method: 'post'
          },
          register: {
            url: 'account/v1/register/',
            method: 'post',
            propertyName: false
          },
          user: {
            url: 'account/v1/data/',
            method: 'get',
            propertyName: false
          },
          updateUser: {
            url: 'account/v1/data/',
            method: 'put',
            propertyName: false
          },
          deleteUser: {
            url: 'account/v1/data/',
            method: 'delete',
            propertyName: false
          },
          allUsers: {
            url: 'account/v1/users/',
            method: 'get',
            propertyName: false
          },
          // * Contact us
          contact: {
            url: 'account/v1/contact/',
            method: 'post',
            propertyName: false
          },
          // * Products
          categories: {
            url: 'products/v1/categories/',
            method: 'get',
            propertyName: false
          },
          location: {
            url: 'products/v1/location/',
            method: 'get',
            propertyName: false
          },
          salesRent: {
            url: 'products/v1/sales_rent/',
            method: 'get',
            propertyName: false
          },
          allProducts: {
            url: 'products/v1/all_products/',
            method: 'get',
            propertyName: false
          },
        },
        tokenType: 'Token',
        tokenName: 'Authorization',
      },
      redirect: {
        login: '/login',
        logout: '/',
        home: '/'
      },
    },
  },

  router: {
    middleware: ['auth']
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
