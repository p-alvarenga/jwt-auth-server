"use strict"

const express = require("express");
const router = express.Router();
const validateUsername = require("../middlewares/validate-username.js");
const validateEmailBasic = require("../middlewares/validate-email-basic.js");

const UsersController = require("../controllers/users-controller.js");

router.post("/users/", 
	validateUsername, 
	validateEmailBasic, 
	UsersController.PostNewUser
);

module.exports = router;
