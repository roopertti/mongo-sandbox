'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo_sandbox');
mongoose.connection
	.once('open', () => console.log('Connection open!'))
	.on('error', (error) => {
		console.warn('Warning', error);
	});