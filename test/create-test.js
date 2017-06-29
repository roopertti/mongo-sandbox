'use strict';
const assert = require('assert');
const User = require('../schema/user');

describe('Creating records', () => {
	it('saves a user', () => {
		const joe = new User({ name: "Joe"});
		
		joe.save()
			.then(() => {
				assert(!joe.isNew);
				done();
			});
	});
});