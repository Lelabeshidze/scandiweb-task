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
    <div className="Container">
      <div className="Header">
        <div>
          <Link to="/">
            <h2>Product List</h2>
          </Link>
        </div>
        <div className="Buttons">
          <Link to="/add-product">
            <Button
              variant="contained"
              id="product_form"
              className="Add-btn"
              color="success"
            >
              ADD
            </Button>
          </Link>
          <Button
            color="warning"
            variant="contained"
            id="delete-product-btn"
            onClick={deleteProduct}
          >
            MASS DELETE
          </Button>
        </div>
      </div>
      <div className="ProductList">
        {product?.map((product, key) => (
          <div key={key}>
            <CardContent>
              <Card
                sx={{ width: 300, height: 200 }}
                raised
                style={{ backgroundColor: "rgb(73, 73, 232)" }}
              >
                <div className="DeleteCheckbox delete-checkbox">
                  <Checkbox
                    className="delete-checkbox"
                    value={product.SKU}
                    checked={product.isChecked}
                    onChange={(e) => handleCheckBox(e)}
                  />
                </div>

                {product.Category === "DVD" ? (
                  <div style={{color:"white"}}>
                    <Typography>Category-{product.Category}</Typography>
                    <Typography>Name-{product.Name}</Typography>
                    <Typography>Price-${product.Price}</Typography>
                    <Typography>Size-{product.Size}MB</Typography>
                  </div>
                ) : product.Category === "Book" ? (
                  <div  style={{color:"white"}}>
                    {" "}
                    <Typography>Category-{product.Category}</Typography>
                    <Typography>Name-{product.Name}</Typography>
                    <Typography>Price-${product.Price}</Typography>
                    <Typography>Weight-{product.Weight}kg</Typography>
                  </div>
                ) : (
                  <div  style={{color:"white"}}>
                    {" "}
                    <Typography>Category-{product.Category}</Typography>
                    <Typography>Name-{product.Name}</Typography>
                    <Typography>Price-${product.Price}</Typography>
                    <Typography>height-{product.Height}cm</Typography>
                    <Typography>Length-{product.Length}cm</Typography>
                    <Typography>Width-{product.Width}cm</Typography>
                  </div>
                )}
              </Card>
            </CardContent>
          </div>
        ))}
      </div>
      <div>
      <div class="Line Footer"></div>
      <h2 className="FooterText">Scandiweb Test assignment</h2>
      </div>
    </div>
  );
};

export default ProductListComponent;
