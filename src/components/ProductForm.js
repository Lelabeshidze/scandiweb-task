import React from "react";
import { useState } from "react";
import { useProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Validation from "./Validation";

const ProductForm = () => {
  const [Category, setShowHide] = useState("");
  const [formValues, setFormValues] = useState({
    SKU: "",
    Name: "",
    Price: "",
    Size: "",
    Weight: "",
    Height: "",
    Width: "",
    Length: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const { validateDVD, validateBook, validateFurniture } = Validation();
  const { addProduct } = useProductContext();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
      Category,
    });
  };

  const handleshowhide = (e) => {
    const getForm = e.target.value;
    setShowHide(getForm);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const validationResultDVD = validateDVD(formValues);
    const validationResultBook = validateBook(formValues);
    const validationResultFurniture = validateFurniture(formValues);
    if (
      Category === "DVD" &&
      !validationResultDVD.SKU &&
      !validationResultDVD.Name &&
      !validationResultDVD.Price &&
      !validationResultDVD.Size
    ) {
      addProduct(formValues);
      console.log(formValues);
      navigate("/");
    } else setFormErrors(validationResultDVD);

    if (
      Category === "Book" &&
      !validationResultBook.SKU &&
      !validationResultBook.Name &&
      !validationResultBook.Price &&
      !validationResultBook.Weight
    ) {
      addProduct(formValues);
      navigate("/");
    } else setFormErrors(validationResultBook);

    if (
      Category === "Furniture" &&
      !validationResultFurniture.SKU &&
      !validationResultFurniture.Name &&
      !validationResultFurniture.Price &&
      !validationResultFurniture.Height &&
      !validationResultFurniture.Width &&
      !validationResultFurniture.Length
    ) {
      addProduct(formValues);
      navigate("/");
    } else setFormErrors(validationResultFurniture);
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div className="ProductForm">
      <div className="Flex FormContent">
        <div>
          <h2 className="Title">Product Add</h2>
        </div>
        <div className="Flex FlexBtn">
          <div className="Padding">
            <Button variant="contained" onClick={handleOnSubmit} id="ADD" color="success">
              Save
            </Button>
          </div>
          <div>
            <Button variant="contained" sx={{ width: "150px" }} onClick={cancel} color="warning">
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className="Center" id="product_form">
        <FormControl sx={{ width: "55%" }} required={true} id="product_form">
          <TextField
            id="sku"
            label="SKU"
            type="number"
            name="SKU"
            required
            value={formValues.SKU}
            onChange={handleOnChange}
            error={!!formErrors.SKU}
            helperText={formErrors.SKU}
            margin="dense"
          />

          <TextField
            id="name"
            label="Name"
            type="text"
            name="Name"
            required
            value={formValues.Name}
            onChange={handleOnChange}
            error={!!formErrors.Name}
            helperText={formErrors.Name}
            margin="dense"
          />
          <TextField
            id="price"
            label="Price($)"
            type="number"
            name="Price"
            required
            value={formValues.Price}
            onChange={handleOnChange}
            error={!!formErrors.Price}
            helperText={formErrors.Price}
            margin="dense"
          />

          <Box>
            <FormControl fullWidth required={true} id="product_form">
              <InputLabel
                id="demo-simple-select-label"
                error={!!formErrors.Category}
              >
                Product Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select productType"
                name="Category"
                value={Category}
                label="Product Type"
                onChange={(e) => handleshowhide(e)}
                displayEmpty={false}
              >
                <MenuItem id="DVD" name="DVD" value="DVD">
                  DVD
                </MenuItem>
                <MenuItem name="Furniture" id="Furniture" value="Furniture">
                  Furniture
                </MenuItem>
                <MenuItem id="Book" value="Book" name="Book">
                  Book
                </MenuItem>
              </Select>
            </FormControl>
          </Box>

          {Category === "DVD" && (
            <TextField
              id="size"
              label="Size(MB)"
              type="number"
              name="Size"
              required
              value={formValues.Size}
              onChange={handleOnChange}
              error={!!formErrors.Size}
              helperText={formErrors.Size}
              margin="dense"
            />
          )}
          {Category === "Book" && (
            <TextField
              id="weight"
              label="Weight(kg)"
              type="number"
              name="Weight"
              required
              value={formValues.Weight}
              onChange={handleOnChange}
              error={!!formErrors.Weight}
              helperText={formErrors.Weight}
              margin="dense"
            />
          )}
          {Category === "Furniture" && (
            <FormControl required={true} id="product_form">
              <TextField
                id="height"
                label="Height(cm)"
                type="number"
                name="Height"
                required
                value={formValues.Height}
                onChange={handleOnChange}
                error={!!formErrors.Height}
                helperText={formErrors.Height}
                margin="dense"
              />
              <TextField
                id="width"
                label="Width(cm)"
                type="number"
                name="Width"
                required
                value={formValues.Width}
                onChange={handleOnChange}
                error={!!formErrors.Width}
                helperText={formErrors.Width}
                margin="dense"
              />
              <TextField
                id="length"
                label="Length(cm)"
                type="number"
                name="Length"
                required
                value={formValues.Length}
                onChange={handleOnChange}
                error={!!formErrors.Length}
                helperText={formErrors.Length}
                margin="dense"
              />
            </FormControl>
          )}
        </FormControl>
      </div>
      <div>
      <div className="Line Footer"></div>
      <h2 className="FooterText">Scandiweb Test assignment</h2>
      </div>
    </div>
  );
};

export default ProductForm;
