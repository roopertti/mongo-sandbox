'use strict';

const assert = require('assert');
const User = require('../schema/user');

describe('Deleting user', () => {
	
	let joe;
	
	beforeEach((done) => {
		joe = new User({ name: "Joe"});
		joe.save()
			.then(() => done());
	});
	
	it('remove joe', (done) => {
		joe.remove()
			.then(() => User.findOne({ name: 'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	});
	
	it('class method remove', (done) => {
		User.remove({ name: 'Joe'})
			.then(() => User.findOne({ name: 'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	});
	
	it('class method findOneAndRemove', (done) => {
		User.findOneAndRemove({ name: 'Joe' })
			.then(() => User.findOne({ name: 'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	});
	
	it('class method findByIdAndRemove', (done) => {
		User.findByIdAndRemove(joe._id)
			.then(() => User.findOne({ name: 'Joe'}))
			.then((user) => {
				assert(user === null);
				done();
			});
	});
	
});