// * State ~ Data
export const state = () => ({
  products: [] // * Ads ~ Products Variable
})

// * Mutate State Variables
export const mutations = {
  // * Ads ~ Products Mutation
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

// * Actions ~ Methods To Commit Mutations
export const actions = {
  // * Retrieve Ads ~ Products Data
  async getProducts ({ commit }) {
    try { 
      let response = await this.$axios
        .get('http://127.0.0.1:8000/products/v1/all_products/')
        commit('SET_PRODUCTS', response.data)
    }
    catch (error) {
      console.log(error)
    }
  }
}

// * Getters
export const getters = {
  // * Check If User If Authenticated/LoggedIn
  isAuthenticated: (state) => {
    return state.auth.loggedIn
  },

  // * Fetch Authenticated User Data
  loggedInUser: (state) => {
    return state.auth.user
  },

  products: (state) => {
    return state.products
  }
}
