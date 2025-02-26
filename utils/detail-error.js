class DetailError extends Error {
	constructor(message, cause, code) {
		super(message);
		this.cause = cause;
		this.code = code;
	}
}

module.exports = DetailError;
