import { assert } from 'chai';

import DetailedError from "../DetailedError";
import WrappedError from "../WrappedError";

describe('wrapped error', () => {
	it('should wrap a detailed error', () => {
		const err = new DetailedError('foobar', { foo: 'bar' });
		assert.equal(err.details.foo, 'bar');

		const wrapped = new WrappedError(err, 'barfoo', { bar: 'foo' });
		assert.equal(wrapped.details.foo, 'bar');
		assert.equal(wrapped.details.bar, 'bar');
	})
});