import { assert } from 'chai';

import DetailedError from "../DetailedError";
import WrappedError from "../WrappedError";

describe('wrapped error', () => {
	it('should wrap a detailed error', () => {
		const err = new DetailedError('foobar', { foo: 'bar' });
		assert.equal(err.details.foo, 'bar');

		const wrapped = new WrappedError(err, 'barfoo', { bar: 'foo' });
		assert.equal(wrapped.details.foo, 'bar');
		assert.equal(wrapped.details.bar, 'foo');
	});

	it('instanceof checks should work', () => {
		const err = new WrappedError(new Error(), 'foobar', { foo: 'bar' });
		if (!(err instanceof Error)) {
			throw new Error('WrappedError is not an instance of Error');
		}
		if (!(err instanceof DetailedError)) {
			throw new Error('WrappedError is not an instance of DetailedError');
		}
		if (!(err instanceof WrappedError)) {
			throw new Error('WrappedError is not an instance of DetailedError');
		}
	});
});