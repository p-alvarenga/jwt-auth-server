"use strict"

import { fetchProfile } from "/scripts/api.js";

const profile = await fetchProfile();

console.log(profile);

document.getElementById("profile-title").innerText = `Hello, ${profile.username}`;
document.getElementById("profile-picture").src = profile.photoUrl || "https://placehold.co/300x300";

