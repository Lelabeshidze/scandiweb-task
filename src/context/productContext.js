import { createContext, useContext, useState } from "react";
import { instance } from "../hooks/instance";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
  const addProduct = async (values) => {
    try {
      const { data } = await instance.post("/api/product/save", values);
    } catch (err) {
      return err;
    }
  };
  return (
    <ProductContext.Provider value={{ addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
