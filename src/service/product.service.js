import axios from "axios";

export const getCategories = async () => {
  const res = await axios.get("https://fakestoreapi.com/products/categories");
  return res.data;
};

export const getCategoryProducts = async (category) => {
  const res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.data;
};

export const getProductDetails = async (productId) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${productId}`);
  return res.data;
};
