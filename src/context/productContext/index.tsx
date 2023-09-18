import { initialStateProduct } from "@/constant/stateProduct";
import { IProductContext, product } from "@/interface";
import { getAllProduct } from "@/service/product";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IPropProductContext {
  children: React.ReactNode;
}

const initialProductContext = {
  products: initialStateProduct.products,
};

const productContext = createContext<IProductContext>(initialProductContext);

const ProducContextProvider = ({ children }: IPropProductContext) => {
  const [products, setProducts] = useState<product[]>([]);

  // get all product
  useEffect(() => {
    const getProduct = async () => {
      const res = await getAllProduct();
      const data = res?.data;
      setProducts(data);
    };
    getProduct();
  }, []);
  return (
    <productContext.Provider value={{ products }}>
      {children}
    </productContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(productContext);
};
export default ProducContextProvider;
