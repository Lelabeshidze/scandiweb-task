import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='/addproduct'>
        <Button>Add Product</Button>
      </Link>
    </div>
  );
};

export default Header;
