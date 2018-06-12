import DetailedError from "../DetailedError";
import { assert } from 'chai';
describe('detailed error', () => {
	it('should create a detailed error', () => {
		const err = new DetailedError('foobar', { foo: 'bar' });
		assert.equal(err.details.foo, 'bar');
	});

	it('instanceof checks should work', () => {
		const err = new DetailedError('foobar', { foo: 'bar' });
		if (!(err instanceof Error)) {
			throw new Error('DetailedError is not an instance of Error');
		}
		if (!(err instanceof DetailedError)) {
			throw new Error('DetailedError is not an instance of DetailedError');
		}
	});
});