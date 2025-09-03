const { AppError, ValidationError, AuthError, NotFoundError } = require("../utils/errors.js"); 

const errorHandler = (err, req, res, next) => {
	console.log(err.stack); 

	if (err instanceof AppError) {
		return res.status(err.statusCode).json({
			success: false,
			error: {
				code: err.code, 
				message: err.msg, 
			}
		});
	}

	return res.status(500).json({
		success: false, 
		error: {
			code: "SERVER_ERROR",
			message: err.message || "Internal Server Error" 
		}
	})
}

module.exports = errorHandler;
