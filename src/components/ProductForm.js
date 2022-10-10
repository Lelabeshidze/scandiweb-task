import React from "react";
import { useState } from "react";
import { useProductContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
const ProductForm = () => {
  const ProductData = {
    SKU: "",
    Name: "",
    Price: "",
    Size: "",
    Weight: "",
    Height: "",
    Width: "",
    Length: "",
  };

  const [formValues, setFormValues] = useState(ProductData);
  const [formErrors, setFormErrors] = useState({});
  const [onSubmit, setOnSubmit] = useState(false);

  const { addProduct } = useProductContext();
  const navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const validationResult = validate(formValues);
    if (
      validationResult.SKU ||
      validationResult.Name ||
      validationResult.Price ||
      validationResult.Size ||
      validationResult.Weight ||
      validationResult.Height ||
      validationResult.Length ||
      validationResult.Width
    ) {
      setFormErrors(validationResult);
    } else {
      setOnSubmit(true);
      const SKU = formValues.SKU;
      const Name = formValues.Name;
      const Price = formValues.Price;
      const Size = formValues.Size;
      const Weight = formValues.Weight;
      const Height = formValues.Height;
      const Width = formValues.Width;
      const Length = formValues.Length;
      addProduct({ SKU, Name, Price, Size, Weight, Height, Width, Length });
      navigate("/");
    }
  };

  const [dvdFields, setDvdFields] = useState(false);

  const showDVDFields = () => {
    setDvdFields(true);
    setfurnitureFields(false);
    setBookFields(false);
  };
  const [furnitureFields, setfurnitureFields] = useState(false);
  const showfurnitureFields = () => {
    setfurnitureFields(true);
    setDvdFields(false);
    setBookFields(false);
  };
  const [bookFields, setBookFields] = useState(false);
  const showBookFields = () => {
    setBookFields(true);
    setDvdFields(false);
    setfurnitureFields(false);
  };

  const [productType, setProductType] = useState("");
  const handleChange = (e) => {
    setProductType(e.target.value);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.SKU) {
      errors.SKU = "SKU is required";
    } else if (values.SKU < 0) {
      errors.SKU = "SKU must be positive number";
    }
    if (!values.Name) {
      errors.Name = "Name is required";
    }
    if (!values.Price) {
      errors.Price = "Price is required";
    } else if (values.Price < 0) {
      errors.Price = "Price must be positive number";
    }
    if (!values.Size) {
      errors.Size = "Size is required";
    } else if (values.Size < 0) {
      errors.Srice = "Size must be positive number";
    }
    if (!values.Weight) {
      errors.Weight = "Weight is required";
    } else if (values.Weight < 0) {
      errors.Weight = "Weight must be positive number";
    }
    if (!values.Height) {
      errors.Height = "Height is required";
    } else if (values.Height < 0) {
      errors.Height = "Height must be positive number";
    }
    if (!values.Length) {
      errors.Length = "Length is required";
    } else if (values.Length < 0) {
      errors.Length = "Length must be positive number";
    }
    if (!values.Width) {
      errors.Width = "Width is required";
    } else if (values.Width < 0) {
      errors.Width = "Width must be positive number";
    }
    return errors;
  };
  return (
    <div>
      <div className="Flex">
        <div>
          <Typography>Product Add</Typography>
        </div>
        <div className="Flex FlexBtn">
          <div className="Padding">
            <Button variant="outlined" onClick={handleOnSubmit} id="ADD">
              Save
            </Button>
          </div>
          <div>
            <Button variant="outlined" sx={{ width: "150px" }}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
      <div className="Center" id="product_form">
        <FormControl sx={{ width: "55%" }} required={true}>
          <TextField
            id="SKU"
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
            label="Price"
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
            <FormControl fullWidth required={true}>
              <InputLabel id="demo-simple-select-label">
                Product Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select productType"
                value={productType}
                label="Product Type"
                onChange={handleChange}
              >
                <MenuItem id="DVD" value="DVD" onClick={showDVDFields}>
                  DVD
                </MenuItem>
                <MenuItem
                  id="Furniture"
                  value="Furniture"
                  onClick={showfurnitureFields}
                >
                  Furniture
                </MenuItem>
                <MenuItem id="Book" value="Book" onClick={showBookFields}>
                  Book
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {dvdFields && (
            <TextField
              id="size"
              label="Size"
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
          {bookFields && (
            <TextField
              id="weight"
              label="Weight"
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
          {furnitureFields && (
            <FormControl required={true}>
              <TextField
                id="height"
                label="Height"
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
                id="#width"
                label="Width"
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
                id="#length"
                label="Length"
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
    </div>
  );
};

export default ProductForm;
