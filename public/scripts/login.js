"use strict"

import { authenticateUser } from "/scripts/api.js"
const login_form = document.getElementById("login_form");

login_form.addEventListener("submit", (ev) => {
	ev.preventDefault();
	const formData = new FormData(ev.target);
	const data = {
		email: formData.get("email"),
		password: formData.get("password"),
	};


	authenticateUser(data); 
});
