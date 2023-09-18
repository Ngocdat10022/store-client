// GET PRODUCT

import instance from "@/config/axios";

export const getAllProduct = async () => {
  return await instance.get("/products");
};

// GET DETAI PRODUCT

export const getDetaiProduct = async (slug: string) => {
  return await instance.get(`/products/detail/${slug}`);
};

// GET PRODUCT BY CATEGORY

export const getProductByCart = async (slug: string) => {
  return await instance.get(`/products/${slug}`);
};
