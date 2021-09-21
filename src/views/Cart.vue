<template>
  <div class="cart-container">
    <div class="heading">
      <h2>Shopping Cart</h2>
      <h2>Total: ${{ cartTotalAmount }}</h2>
    </div>
    <v-card elevation="2" tile class="card-container">
      <div
        v-for="product of cartProducts"
        :key="product.id"
        class="product-item-container"
      >
        <v-img
          alt="product-image"
          :src="product.image"
          width="200px"
          height="200px"
          min-height="200px"
          max-height="200px"
          contain
        />
        <div class="product-details">
          <div class="product-title">{{ product.title }}</div>
          <div class="product-price">
            <strong>Price:</strong> ${{ product.price }}
          </div>
        </div>
        <div class="product-actions">
          <v-btn icon @click="onItemDecrement(product.id)">
            <v-icon>mdi-minus</v-icon>
          </v-btn>
          <div>{{ product.count }}</div>
          <v-btn icon @click="onItemIcrement(product.id)">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Cart",

  components: {},

  data: () => ({}),
  computed: {
    ...mapGetters({
      cartProducts: "cartProducts",
      cartTotalAmount: "cartTotalAmount",
    }),
  },
  methods: {
    onItemIcrement(id) {
      this.$store.dispatch("incrementCartProduct", id);
    },
    onItemDecrement(id) {
      this.$store.dispatch("decrementCartProduct", id);
    },
  },
};
</script>

<style lang="scss">
.cart-container {
  margin: 5px 10px;
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  .heading {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    width: 80%;
  }
  h2 {
    text-align: center;
  }
  .card-container {
    width: 80%;
    border-radius: 12px !important;
    margin: 20px 0;
  }

  .product-item-container {
    display: flex;
    flex-direction: row;
    padding: 20px 30px;

    .product-image {
      width: 30%;
    }
    .product-details {
      width: 50%;
    }
    .product-actions {
      width: 20%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  }
}
</style>
