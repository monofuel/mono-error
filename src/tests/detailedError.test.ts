import DetailedError from "../DetailedError";
import { assert } from 'chai';
describe('detailed error', () => {
	it('should create a detailed error', () => {
		const err = new DetailedError('foobar', { foo: 'bar' });
		assert.equal(err.details.foo, 'bar');
	})
});