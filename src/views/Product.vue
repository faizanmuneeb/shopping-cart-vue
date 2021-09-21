<template>
  <div class="product-container">
    <div class="product-image-container">
      <v-img
        alt="product-image"
        :src="selectedProduct.image"
        width="300px"
        height="300px"
        min-height="300px"
        max-height="300px"
        contain
      />
    </div>
    <div class="product-detail-container">
      <div class="product-title">{{ selectedProduct.title }}</div>
      <div class="product-price">
        <strong>Price:</strong> ${{ selectedProduct.price }}
      </div>
      <div class="product-description">{{ selectedProduct.description }}</div>
      <v-btn
        large
        elevation="2"
        rounded
        class="add-btn"
        color="#e63e6d"
        @click="onAddToCartClicked()"
        >Add to Cart</v-btn
      >
    </div>
  </div>
</template>

<script>
import * as productService from "./../service/product.service";

export default {
  name: "Product",

  components: {},
  async beforeMount() {
    const productId = this.$route.params.id;
    const productDetail = await productService.getProductDetails(productId);
    this.selectedProduct = productDetail;
  },
  data: () => ({
    selectedProduct: {},
  }),
  methods: {
    onAddToCartClicked() {
      this.$store.dispatch("addProductToCart", this.selectedProduct);
    },
  },
};
</script>

<style lang="scss">
.product-container {
  margin: 5px 10px;
  display: flex;
  flex-direction: row;
  margin-top: 40px;

  .product-image-container {
    display: flex;
    align-items: center;
    width: 40%;
  }

  .product-detail-container {
    width: 60%;
    text-align: left;
  }

  .product-title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .product-price {
    font-size: 24px;
  }

  .product-description {
    font-size: 18px;
    margin-top: 20px;
  }

  .add-btn {
    margin-top: 40px;
    .v-btn__content {
      color: white;
      font-size: 24px;
      padding: 10px;
    }
  }
}
</style>
