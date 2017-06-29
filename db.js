'use strict';

const mongoose = require('mongoose');

module.exports = {
	init: () => {
		mongoose.connect('mongodb://localhost/mongo_sandbox', { useMongoClient: true });
		mongoose.connection
			.once('open', () => console.log('Connection open!'))
			.on('error', (error) => {
				console.warn('Warning', error);
			});
	}
}

