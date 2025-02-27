"use strict"

const express = require("express");
const router = express.Router();

const validateUsername = require("../middlewares/validate-username.js");
const validateEmailBasic = require("../middlewares/validate-email-basic.js");
const authenticateToken = require("../middlewares/auth.js");

const UsersController = require("../controllers/users-controller.js");

router.post("/api/users/", 
	validateUsername, 
	validateEmailBasic, 
	UsersController.PostNewUser
);

router.post("/api/login/", 
	validateEmailBasic,
	UsersController.UserLogin
);

router.get("/api/profile", 
	authenticateToken, 
	UsersController.getProfile
);

module.exports = router;
