"use strict"

const express = require("express");
const router = express.Router();
const validateUsername = require("../middlewares/validate-username.js");
const validateEmailBasic = require("../middlewares/validate-email-basic.js");

router.post("/users/", validateUsername, validateEmailBasic, (req, res) => {
	res.status(201).send({ message: "User Created Successfully" });
});

module.exports = router;
