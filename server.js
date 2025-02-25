"use strict"

const { join } = require("node:path");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
	res.sendFile(join(join(__dirname, 'public'), 'index.html'));
});

app.listen(port, () => {
	console.log("running at *:3000");
});
