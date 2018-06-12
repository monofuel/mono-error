
export interface Details {
	[key: string]: number | string | boolean | undefined | null;
}

export default class DetailedError extends Error {
	public details: Details;
	constructor(msg: string, details?: Details) {
		super(msg);
		this.details = details || {};
		this.details.stack = this.stack;
	}
}
