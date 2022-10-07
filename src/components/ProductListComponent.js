import React from "react";
import UseAxios from "../hooks/useAxios";
import { Card, CardContent, Typography, TextField } from "@mui/material";
const ProductListComponent = () => {
  const { data } = UseAxios("/api/products");
  console.log(data);
  return (
    <div>
      {data.map((product, key) => (
        <div key={key}>
          <CardContent>
            <Typography>{product.Name}</Typography>
            <Typography>{product.Price}</Typography>
            <Typography>{product.Size}</Typography>
            <Typography>{product.Size}</Typography>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
