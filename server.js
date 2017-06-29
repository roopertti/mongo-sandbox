'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db.js');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

db.init();

app.get('/', (req,res) => {
	res.send('hello');
});

app.listen(port, () => {
	console.log('listening to ' + port);
});