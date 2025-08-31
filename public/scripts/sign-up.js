"use strict"

import { signUpUser } from "/scripts/api.js"

const signupForm = document.getElementById("signup_form");

signupForm.addEventListener("submit", (ev) => {
	ev.preventDefault(); 
	const formData = new FormData(ev.target);
	
	const data = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	};
	
	signUpUser(data);
});
