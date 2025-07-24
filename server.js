require('dotenv').config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "¡Hola Mundo desde Frutti CI/CD!",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`🚀 Servidor Hello World ejecutándose en puerto ${port}`);
  console.log(`📊 Health check: http://localhost:${port}/health`);
});
