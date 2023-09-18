import instance from "@/config/axios";

export const getCategory = async () => {
  return await instance.get(`/category`);
};
