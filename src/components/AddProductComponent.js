// import {
//   Button,
//   FormControl,
//   InputLabel,
//   MenuItem,
//   Select,
//   TextField,
//   Typography,
// } from "@mui/material";
// import { Box } from "@mui/system";
// import axios from "axios";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useProductContext } from "../context/productContext";
// import { useForm, isRequired } from "../hooks/useForm";
// export const AddProductComponent = (onSubmit) => {
//   const initialState = {
//     SKU: "",
//     Name: "",
//     Price: "",
//     Size: "",
//     Weight: "",
//     Height: "",
//     Width: "",
//     Length: "",
//   };
//   const { addProduct } = useProductContext();
//   const navigate = useNavigate();
//   const [dvdFields, setDvdFields] = useState(false);

//   const showDVDFields = () => {
//     setDvdFields(true);
//     setfurnitureFields(false);
//     setBookFields(false);
//   };
//   const [furnitureFields, setfurnitureFields] = useState(false);
//   const showfurnitureFields = () => {
//     setfurnitureFields(true);
//     setDvdFields(false);
//     setBookFields(false);
//   };
//   const [bookFields, setBookFields] = useState(false);
//   const showBookFields = () => {
//     setBookFields(true);
//     setDvdFields(false);
//     setfurnitureFields(false);
//   };

//   const [productType, setProductType] = useState("");
//   const handleChange = (e) => {
//     setProductType(e.target.value);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const SKU = values.SKU;
//     const Name = values.Name;
//     const Price = values.Price;
//     const Size = values.Size;
//     const Weight = values.Weight;
//     const Height = values.Height;
//     const Width = values.Width;
//     const Length = values.Length;
//     addProduct({ SKU, Name, Price, Size, Weight, Height, Width, Length });
//     navigate("/");
//   };
//   const validations = [
//     ({ SKU }) =>
//       SKU < 0
//         ? {
//             SKU: " SKU should be positive number",
//           }
//         : isRequired(SKU) || {
//             SKU: " Please, provide SKU",
//           },
//     ,
//     ({ Name }) =>
//       isRequired(Name) || {
//         Name: " Please, provide a Name.",
//       },
//     ({ Price }) =>
//       Price <= 0
//         ? {
//             Price: " Price should be positive number",
//           }
//         : isRequired(Price) || {
//             Price: " Please, provide Price",
//           },
        
//     ({ Size }) =>
//       Size <= 0
//         ? {
//             Size: " Size should be positive number",
//           }
//         : isRequired(Size) || {
//             Size: " Please, provide Size",
//           },
//     ,
//     ({ Weight }) =>
//       Weight <= 0
//         ? {
//             Weight: " Weight should be positive number",
//           }
//         : isRequired(Weight) || {
//             Weight: " Please, provide Weight",
//           },
//     ,
//     ({ Height }) =>
//       Height <= 0
//         ? {
//             Height: " Height should be positive number",
//           }
//         : isRequired(Height) || {
//             Height: " Please, provide Height",
//           },
//     ,
//     ({ Width }) =>
//       Width <= 0
//         ? {
//             Width: " Width  should be positive number",
//           }
//         : isRequired(Width) || {
//             Width: " Please, provide Width ",
//           },
//     ,
//     ({ Length }) =>
//       Length <= 0
//         ? {
//             Length: " Length  should be positive number",
//           }
//         : isRequired(Length) || {
//             Length: " Please, provide Length ",
//           },
//     ,
//   ];

//   const { values, errors, isValid, changeHandler } = useForm(
//     initialState,
//     validations,
//     onSubmit
//   );
//   return (
//     <div>
//       <div className="Flex">
//         <div>
//           <Typography>Product Add</Typography>
//         </div>
//         <div className="Flex FlexBtn">
//           <div className="Padding">
//             <Button 
//             variant="outlined"
//               onClick={submitHandler}
//               id="ADD"
//               disabled={!isValid}
//             >
//               Save
//             </Button>
//           </div>
//           <div>
//             <Button variant="outlined" sx={{ width: "150px" }}>
//               Cancel
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className="Center" id="product_form">
//         <FormControl sx={{ width: "55%" }} required={true}>
//           <TextField
//           id="sku"
//             label="SKU"
//             type="number"
//             name="SKU"
//             required
//             value={values.SKU}
//             onChange={changeHandler}
//             error={!!values.SKU && !!errors.SKU}
//             helperText={values.SKU && errors.SKU}
//             margin="dense"
//           />
//           <TextField
//           id="name"
//             label="Name"
//             type="text"
//             name="Name"
//             required
//             value={values.Name}
//             onChange={changeHandler}
//             error={!!values.Name && !!errors.Name}
//             helperText={values.Name && errors.Name}
//             margin="dense"
//           />
//           <TextField
//           id="price"
//             label="Price"
//             type="number"
//             name="Price"
//             required
//             value={values.Price}
//             onChange={changeHandler}
//             error={!!values.Price && !!errors.Price}
//             helperText={values.Price && errors.Price}
//             margin="dense"
//           />
//           <Box>
//             <FormControl fullWidth required={true}>
//               <InputLabel id="demo-simple-select-label">
//                 Product Type
//               </InputLabel>
//               <Select
//                 labelId="demo-simple-select-label"
//                 id="demo-simple-select productType"
//                 value={productType}
//                 label="Product Type"
//                 onChange={handleChange}

//               >
//                 <MenuItem id="DVD" value="DVD" onClick={showDVDFields}>
//                   DVD
//                 </MenuItem>
//                 <MenuItem
//                   id="Furniture"
//                   value="Furniture"
//                   onClick={showfurnitureFields}
//                 >
//                   Furniture
//                 </MenuItem>
//                 <MenuItem id="Book" value="Book" onClick={showBookFields}>
//                   Book
//                 </MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//           {dvdFields && (
//             <TextField
//             id="size"
//               label="Size"
//               type="number"
//               name="Size"
//               required
//               value={values.Size}
//               onChange={changeHandler}
//               error={!!values.Size && !!errors.Size}
//               helperText={values.Size && errors.Size}
//               margin="dense"
//             />
//           )}
//           {bookFields && (
//             <TextField
//             id="weight"
//               label="Weight"
//               type="number"
//               name="Weight"
//               required
//               value={values.Weight}
//               onChange={changeHandler}
//               error={!!values.Weight && !!errors.Weight}
//               helperText={values.Weight && errors.Weight}
//               margin="dense"
//             />
//           )}
//           {furnitureFields && (
//             <FormControl required={true}>
//               <TextField
//               id="height"
//                 label="Height"
//                 type="number"
//                 name="Height"
//                 required
//                 value={values.Height}
//                 onChange={changeHandler}
//                 error={!!values.Height && !!errors.Height}
//                 helperText={values.Height && errors.Height}
//                 margin="dense"
//               />
//               <TextField
//               id="#width"
//                 label="Width"
//                 type="number"
//                 name="Width"
//                 required
//                 value={values.Width}
//                 onChange={changeHandler}
//                 error={!!values.Width && !!errors.Width}
//                 helperText={values.Width && errors.Width}
//                 margin="dense"
//               />
//               <TextField
//               id="#length"
//                 label="Length"
//                 type="number"
//                 name="Length"
//                 required
//                 value={values.Length}
//                 onChange={changeHandler}
//                 error={!!values.Length && !!errors.Length}
//                 helperText={values.Length && errors.Length}
//                 margin="dense"
//               />
//             </FormControl>
//           )}
//         </FormControl>
//       </div>
//     </div>
//   );
// };
