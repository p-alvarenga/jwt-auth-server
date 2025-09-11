"use strict"

const { join } = require("node:path");

const express = require("express");
const cors = require("cors");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type,Authorization");

  if (req.method === "OPTIONS") {
    return res.sendStatus(204); // responde imediatamente o preflight
  }

  next();
});

const userRoutes = require("./routes/users-route.js");
const errorHandler = require("./middlewares/error-handler.js")
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use('/', userRoutes);

app.get('/', (req, res) => {
	res.sendFile(join(__dirname, "public/index.html"));
});

app.use((req, res) => {
	res.status(404).sendFile(__dirname + "/public/404.html");
});

app.use(errorHandler); 

app.listen(PORT, () => {
	console.log(`Server listening at *${PORT}`);
});
