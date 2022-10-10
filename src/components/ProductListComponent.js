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

const ProductListComponent = () => {
  const [product, setProduct] = useState([]);

  const [isChecked, setChecked] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    try {
      const { data } = await instance.get("/api/products");
      setProduct(data);
    } catch (err) {
      alert("Error");
    }
  };

  const handleCheckBox = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setChecked([...isChecked, value]);
    } else {
      setChecked(isChecked.filter((e) => e !== value));
    }
  };

  const deleteProduct = () => {
   isChecked.map((sku) => {
    const { data } = instance.delete(`/api/product/${sku}/delete`);
    getProduct();
   }) 
   console.log(isChecked);
  };

  return (
    <div>
      <div>
        <Link to="/addproduct">
          <Button variant="outlined">Add Product</Button>
        </Link>

        <Button
          variant="outlined"
          id="delete-product-btn"
          onClick={deleteProduct}
        >
          Mass Delete
        </Button>
      </div>
      <h1>Product List</h1>
      {product?.map((product, key) => (
        <div key={key}>
          <CardContent>
            <Checkbox
              className="delete-checkbox"
              value={product.SKU}
              checked={product.isChecked}
              onChange={(e) => handleCheckBox(e)}
            />
            <Typography>{product.Name}</Typography>
            <Typography>{product.Price}</Typography>
            <Typography>{product.Size}</Typography>
            <Typography>{product.Size} </Typography>
          </CardContent>
        </div>
      ))}
    </div>
  );
};

export default ProductListComponent;
