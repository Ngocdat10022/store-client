import instance from "@/config/axios";

// Authentication
export const requestAuthRegister = async (values: any) => {
  return await instance.post("/auth/signup", values);
};

export const requestAuthLogin = async (values: any) => {
  return await instance.post("/auth/login", values);
};
