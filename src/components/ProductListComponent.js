import React from "react";
import UseAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, TextField,Checkbox,Button } from "@mui/material";
const ProductListComponent = () => {
  const { data } = UseAxios("/api/products");
  console.log(data);
  return (
    <div>
          <div>
      <Link to='/addproduct'>
        <Button variant="outlined">Add Product</Button>
      </Link>
      <Button variant="outlined" id="delete-product-btn">Mass Delete</Button>
    </div>
      <h1>Product List</h1>
      {data.map((product, key) => (
        <div key={key}>
          <CardContent>
          <Checkbox className="delete-checkbox" />
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
