class DetailError extends Error {
	constructor(message, cause, code, statusCode) {
		super(message);
		this.cause = cause;
		this.code = code;
		this.statusCode = statusCode;
	}
}

module.exports = DetailError;
