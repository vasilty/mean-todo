'use strict';

var express = require('express');

var app = express();

app.use('/', express.static('public'));

var router = express.Router();

router.get('/todos', function(req, res) {
	res.json({ todos: [] });
});

// TODO: Add POST route to create new entries

// TODO: Add PUT route to update existing entries

// TODO: Add DELETE route to remove existing entries

app.use('/api', router);

app.listen(3000, function() {
    console.log("The server is running on port 3000!");
});
