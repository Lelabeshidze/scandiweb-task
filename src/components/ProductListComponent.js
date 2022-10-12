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

  const deleteProduct = async () => {
    isChecked.map((sku) => {
      const { data } = instance.delete(`/api/product/${sku}/delete`);
      getProduct();
    });
    console.log(isChecked);
  
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <div>
        <Link to="/add-product">
          <Button variant="outlined" id="#product_form">
            ADD
          </Button>
        </Link>

        <Button
          variant="outlined"
          id="delete-product-btn"
          onClick={deleteProduct}
        >
          MASS DELETE
        </Button>
      </div>
      <h1>Product List</h1>
      <div className="ProductList">
        {product?.map((product, key) => (
          <div key={key}>
            <CardContent>
              <Card sx={{ width: 300, height: 200 }}>
                <div className="DeleteCheckbox delete-checkbox">
                  <Checkbox
                    className="delete-checkbox"
                    value={product.SKU}
                    checked={product.isChecked}
                    onChange={(e) => handleCheckBox(e)}
                  />
                </div>
                <div>
                  <Typography>Name-{product.Name}</Typography>
                  <Typography>Price-${product.Price}</Typography>
                  <Typography>Size-{product.Size}</Typography>
                  <Typography>Height-{product.Height} </Typography>
                </div>
              </Card>
            </CardContent>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListComponent;
