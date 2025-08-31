"use strict"

import { fetchProfile } from "/scripts/api.js";

const profile = await fetchProfile();

if (profile) {
	document.title = profile.username || "undefined"; 
	document.getElementById("profile-title").innerText = `Hello, ${profile.username}`;
	document.getElementById("profile-picture").src = profile.photoUrl || "https://placehold.co/300x300";	
} else {
	alert("a unexpected error happened, try again later");
	window.location.href = '/';
}
