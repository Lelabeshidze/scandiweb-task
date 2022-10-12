import React from 'react'

const Validation = () => {
    // const create = () => {
    //     if ( 
    //         validationResultDVD.SKU ||
    //         validationResultDVD.Name ||
    //         validationResultDVD.Price ||
    //         validationResultDVD.Size
    //       ) {
    //         setFormErrors(validationResultDVD);
    //       } else {
    //         addProduct(formValues);
    //         console.log(formValues);
    //         // navigate("/");
    //       }
      
    //       if (
    //         validationResultBook.SKU ||
    //         validationResultBook.Name ||
    //         validationResultBook.Price ||
    //         validationResultBook.Weight
    //       ) {
    //         setFormErrors(validationResultBook);
    //       } else {
    //         addProduct(formValues);
    //         console.log(formValues);
    //         navigate("/");
    //       }
      
    //       if (
    //         validationResultFurniture.SKU ||
    //         validationResultFurniture.Name ||
    //         validationResultFurniture.Price ||
    //         validationResultFurniture.Height ||
    //         validationResultFurniture.Length ||
    //         validationResultFurniture.Width
    //       ) {
    //         setFormErrors(validationResultFurniture);
    //       } else {
    //         addProduct(formValues);
    //         console.log(formValues);
    //         navigate("/");
    //       }
    // }
const validateDVD = (values) => {
    const errors = {};
    if (!values.SKU) {
        errors.SKU = "SKU is required";
      } else if (values.SKU < 0) {
        errors.SKU = "SKU must be positive number";
      }
      if (!values.showhide) {
        errors.showhide = "Type is required";
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
      return errors;
}
const validateBook = (values) => {
const errors = {};
if (!values.SKU) {
    errors.SKU = "SKU is required";
  } else if (values.SKU < 0) {
    errors.SKU = "SKU must be positive number";
  }
  if (!values.showhide) {
    errors.showhide = "Type is required";
  }
  if (!values.Name) {
    errors.Name = "Name is required";
  }
  if (!values.Price) {
    errors.Price = "Price is required";
  } else if (values.Price < 0) {
    errors.Price = "Price must be positive number";
  }
  if (!values.Weight) {
    errors.Weight = "Weight is required";
  } else if (values.Weight < 0) {
    errors.Weight = "Weight must be positive number";
  }
  return errors;
}
const validateFurniture = (values) => {
    const errors = {};
    if (!values.SKU) {
        errors.SKU = "SKU is required";
      } else if (values.SKU < 0) {
        errors.SKU = "SKU must be positive number";
      }
      if (!values.showhide) {
        errors.showhide = "Type is required";
      }
      if (!values.Name) {
        errors.Name = "Name is required";
      }
      if (!values.Price) {
        errors.Price = "Price is required";
      } else if (values.Price < 0) {
        errors.Price = "Price must be positive number";
      }    if (!values.Height) {
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
}
  return {
    validateDVD,
    validateBook,
    validateFurniture
  }
}

export default Validation