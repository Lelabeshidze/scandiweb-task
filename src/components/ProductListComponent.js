import React, { useEffect, useState } from "react";
import UseAxios from "../hooks/useAxios";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import { instance } from "../hooks/instance";
import axios from "axios";
const ProductListComponent = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    axios.get("http://localhost/api/products").then(function (response) {
      setProduct(response.data);
    });
  };

  const deleteProduct = async (SKU) => {
    try {
      const { data } = await instance.delete(`/api/product/${SKU}/delete`);
      getProduct();
    } catch (err) {
      return err;
    }
  };
  console.log(product);
  return (
    <div>
      <div>
        <Link to="/addproduct">
          <Button variant="outlined">Add Product</Button>
        </Link>
      </div>
      <h1>Product List</h1>
      {product.map((product, key) => (
        <div key={key}>
          <CardContent>
            <Checkbox className="delete-checkbox" />
            <Typography>{product.Name}</Typography>
            <Typography>{product.Price}</Typography>
            <Typography>{product.Size}</Typography>
            <Typography>{product.Size}</Typography>
            <Button
              variant="outlined"
              id="delete-product-btn"
              onClick={() => deleteProduct(product.SKU)}
            >
              Mass Delete
            </Button>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
