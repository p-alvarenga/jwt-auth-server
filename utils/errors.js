"use strict"

class AppError extends Error {
	constructor(msg, code = "SERVER_ERROR", statusCode = 500) {
		super(msg);
		this.code = code;
		this.statusCode = statusCode;
	}
}

class ValidationError extends AppError {
	constructor(msg, code = "VALIDATION_ERROR") {
		super(msg, code, 400); 
	}
}

class AuthError extends AppError {
	constructor(msg, code = "AUTH_ERROR") {
		super(msg, code, 401); 
	}
}

class NotFoundError extends AppError {
	constructor(msg, code = "NOT_FOUND_ERROR") {
		super(msg, code, 404);
	}
}

module.exports = { AppError, ValidationError, AuthError, NotFoundError };
