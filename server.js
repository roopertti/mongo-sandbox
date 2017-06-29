'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const assert = require('assert');
const db = require('./db.js');
const User = require('./schema/user');

//app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

db.init();

app.get('/', (req,res) => {
	res.send('hello');
});

app.get('/add-user/:name', (req,res) => {
	const name = req.params.name;
	const user = new User({name: name});
	user.save()
		.then(() => {
			assert(!user.isNew);
		})
	res.send(user);
});

app.listen(port, () => {
	console.log('listening to ' + port);
});