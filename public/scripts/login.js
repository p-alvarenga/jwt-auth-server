"use strict"

import { authenticateUser } from "/scripts/api.js"
const loginForm = document.getElementById("login_form");

loginForm.addEventListener("submit", (ev) => {
	ev.preventDefault();
	const formData = new FormData(ev.target);

	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};

	authenticateUser(data); 
});
