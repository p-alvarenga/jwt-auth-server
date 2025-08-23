const validateEmailBasic = (req, res, next) => {
	const email = req.body.email;
	const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		
	if (!email || !email_regex.test(email)) { // structure better the Error Structure
		return res.status(400).json({ 
			message: "Please enter a valid email" 
		});
	}

	next();
};

module.exports = validateEmailBasic;
