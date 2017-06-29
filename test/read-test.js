'use strict';

const assert = require('assert');
const User = require('../schema/user');

describe('Reading users of database', () => {
	
	let joe;
	
	beforeEach((done) => {
		joe = new User({ name: "Joe"});
		joe.save()
			.then(() => done());
	});
	
	it('finds all users with name joe', () => {
		User.find({ name: "joe" })
			.then((users) => {
				assert(users[0]._id.toString() === joe._id.toString());
				done();
			});
	});
	
	it('finds one user with id', (done) => {
		User.findOne({_id: joe._id})
			.then((user) => {
				assert(user.name === 'Joe');
				done();
			});
	});
	
});