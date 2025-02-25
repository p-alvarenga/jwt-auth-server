const validateUsername = (req, res, next) => {
	const username = req.body.username; 
	const usernameRegex = /^[a-zA-z0-9]+$/

	if (!username || username.length > 8 || username.length < 3) {
		return res.status(400).send({ message: "Username must have more than 2 characters and less than 8" });
	}

	if (!usernameRegex.test(username)) {
		return res.status(400).send({ message: "Username must me alphanumeric" });
	}

	next();
};

module.exports = validateUsername;
