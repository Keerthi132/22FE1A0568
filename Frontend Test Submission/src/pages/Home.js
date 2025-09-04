// src/pages/Home.js
import React, { useState } from "react";
import UrlForm from "../components/UrlForm";
import UrlList from "../components/UrlList";
import { Container, Typography } from "@mui/material";

const Home = () => {
  const [urls, setUrls] = useState([]);

  const addUrls = (newUrls) => {
    setUrls((prev) => [...prev, ...newUrls]);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <UrlForm onShorten={addUrls} />
      <UrlList urls={urls} />
    </Container>
  );
};

export default Home;
