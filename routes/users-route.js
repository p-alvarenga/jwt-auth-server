"use strict"

const express = require("express");
const router = express.Router();

const authenticateToken = require("../middlewares/authenticate-token.js.js");
const { isValidUsername, isValidEmail, isValidPassword } = require("../middlewares/validate-credentials.js");

const UsersController = require("../controllers/users-controller.js");

router.post("/api/users/", 
	isValidUsername, 
	isValidEmail, 
	//isValidPassword,
	UsersController.postNewUser
);

router.post("/api/login/", 
	isValidEmail,
	//isValidPassword, 
	UsersController.userLogin
);

router.get("/api/profile", 
	authenticateToken, 
	UsersController.getProfile
);

module.exports = router
