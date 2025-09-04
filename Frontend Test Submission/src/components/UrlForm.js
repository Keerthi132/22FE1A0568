// src/components/UrlForm.js
import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { generateShortcode } from "../utils/shortcode";


const UrlForm = ({ onShorten }) => {
  const [inputUrls, setInputUrls] = useState([""]);

  const handleChange = (index, value) => {
    const newUrls = [...inputUrls];
    newUrls[index] = value;
    setInputUrls(newUrls);
  };

  const addField = () => {
    if (inputUrls.length < 5) setInputUrls([...inputUrls, ""]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const shortened = inputUrls
      .filter((url) => url.trim() !== "")
      .map((url) => ({
        longUrl: url,
        shortCode: generateShortcode(),
      }));

    onShorten(shortened);
    setInputUrls([""]); // reset
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      {inputUrls.map((url, i) => (
        <TextField
          key={i}
          fullWidth
          margin="normal"
          label={`URL ${i + 1}`}
          value={url}
          onChange={(e) => handleChange(i, e.target.value)}
        />
      ))}
      {inputUrls.length < 5 && (
        <Button onClick={addField} variant="outlined" sx={{ mr: 2 }}>
          + Add More
        </Button>
      )}
      <Button type="submit" variant="contained">
        Shorten
      </Button>
    </Box>
  );
};

export default UrlForm;
