const validateEmailBasic = (req, res, next) => {
	const email = req.body.email;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		
	if (!email || !emailRegex.test(email)) {
		return res.status(400).send({ message: "Please enter a valid email" });
	}

	next();
};

module.exports = validateEmailBasic;
