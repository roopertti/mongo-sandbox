'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before(() => {
	mongoose.connect('mongodb://localhost/mongo_sandbox');
	mongoose.connection
	.once('open', () => {})
	.on('error', (error) => {
		console.warn('Warning', error);
	});
});

beforeEach((done) => {
	mongoose.connection.collections.users.drop(() => {
		done();
	});
});