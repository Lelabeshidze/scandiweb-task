import React, { useState } from "react";

const useForm = () => {
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

  const [category, setCategory] = useState("");
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return {
    dvdFields,
    showDVDFields,
    furnitureFields,
    showfurnitureFields,
    bookFields,
    showBookFields,
    category,
    handleChange,
  };
};

export default useForm;
