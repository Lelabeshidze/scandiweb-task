import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { instance } from "../hooks/instance";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const addProduct = async (values) => {
    try {
      const { data } = await instance.post("/api/product/save", values);
      navigate("/");
    } catch(err ){
      console.log(err.response.message)
    }
  };
  return (
    <ProductContext.Provider value={{ addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
