import DetailedError, { Details } from './DetailedError';

export default class WrappedError extends DetailedError {
	constructor(err: Error | DetailedError, msg: string, details?: Details) {
		super(msg, details);
		this.message = msg + ', caused by: ' + err.message;

		this.stack = err.stack; // perserve original stack

		if (err instanceof DetailedError) {
			// add additional information to the details object
			this.details = Object.assign({}, err.details, details);
		}

	}
}
