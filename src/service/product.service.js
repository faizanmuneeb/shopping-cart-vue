import axios from "axios";

export const getCategories = async () => {
  let res = await axios.get("https://fakestoreapi.com/products/categories");
  return res.data;
};

export const getCategoryProducts = async (category) => {
  let res = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.data;
};
