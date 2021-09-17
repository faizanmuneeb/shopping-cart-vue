<template>
  <div class="shop-container">
    <div class="categories-container">
      <div
        v-for="category of categories"
        :key="category"
        :class="['category-item', { selected: selectedCategory === category }]"
      >
        <div @click="onCategoryClick(category)">
          {{ category }}
        </div>
      </div>
    </div>
    <div class="products-container" v-if="products.length > 0">
      <div v-for="product of products" :key="product.id" class="product-item">
        <v-img
          alt="product-image"
          :src="product.image"
          width="200px"
          height="200px"
          min-height="200px"
          max-height="200px"
          contain
        />
        <div class="product-title">{{ product.title }}</div>
        <div><strong>Price:</strong> ${{ product.price }}</div>
      </div>
    </div>
    <div v-else class="products-container">no items found</div>
  </div>
</template>

<script>
import * as productService from "./../service/product.service";

export default {
  name: "Shop",
  data: () => ({
    categories: [],
    products: [],
    selectedCategory: "",
  }),
  components: {},
  async beforeMount() {
    const categories = await productService.getCategories();
    this.categories = categories;
    this.onCategoryClick("electronics");
  },
  methods: {
    async onCategoryClick(category) {
      this.selectedCategory = category;
      const products = await productService.getCategoryProducts(category);
      this.products = products;
    },
  },
};
</script>

<style lang="scss">
.shop-container {
  // height: 600px;
  margin: 5px 10px;
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  .categories-container {
    width: 30%;
    height: 100%;
    padding: 20px;

    .category-item {
      padding: 10px 10px;
      width: 90%;
      margin: auto;
      border-radius: 5px;
      margin: 10px 0;

      &:hover {
        background: lightgrey;
        cursor: pointer;
      }
    }

    .category-item.selected {
      background: #e63e6d;
      color: white;
    }
  }
  .products-container {
    width: 70%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border-left: 1px solid lightgrey;
    padding: 20px;
    .product-item {
      width: calc(100% / 4);
      margin: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s;
      border-radius: 5px;
      padding: 10px;
      cursor: pointer;

      .product-title {
        margin: 10px 0;
      }

      &:hover {
        box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
        background: rgb(235, 234, 234);
        transform: scale(1.1);
      }
    }
  }
}
</style>
