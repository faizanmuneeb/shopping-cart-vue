import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartProducts: [],
  },
  getters: {
    cartProductsCount(state) {
      return state.cartProducts.reduce((prev, current) => {
        prev += current.count;
        return prev;
      }, 0);
    },
    cartProducts(state) {
      return state.cartProducts;
    },
    cartTotalAmount(state) {
      return state.cartProducts.reduce((prev, current) => {
        prev += current.count * current.price;
        return prev;
      }, 0);
    },
  },
  mutations: {
    addProductToCart(state, product) {
      const index = state.cartProducts.findIndex(
        (item) => item.id === product.id
      );
      if (index === -1) {
        state.cartProducts.push({ ...product, count: 1 });
      } else {
        state.cartProducts[index].count++;
      }
    },
    incrementCartProduct(state, id) {
      const index = state.cartProducts.findIndex((item) => item.id === id);
      state.cartProducts[index].count++;
    },
    decrementCartProduct(state, id) {
      const index = state.cartProducts.findIndex((item) => item.id === id);
      state.cartProducts[index].count--;
      if (state.cartProducts[index].count === 0) {
        state.cartProducts.splice(index, 1);
      }
    },
  },
  actions: {
    addProductToCart({ commit }, product) {
      commit("addProductToCart", product);
    },
    incrementCartProduct({ commit }, id) {
      commit("incrementCartProduct", id);
    },
    decrementCartProduct({ commit }, id) {
      commit("decrementCartProduct", id);
    },
  },
  modules: {},
});
