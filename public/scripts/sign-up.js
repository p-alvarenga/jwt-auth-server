import { SignUpUser } from "/scripts/api.js"

"use strict"

const signup_form = document.getElementById("signup_form");

signup_form.addEventListener("submit", (ev) => {
	ev.preventDefault(); 
	const formData = new FormData(ev.target);
	const data = {
		username: formData.get("username"),
		email: formData.get("email"),
		password: formData.get("password"),
	};
	
	SignUpUser(data);
});

//console.log("running /script/sign-up.js");
