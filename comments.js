// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

//Create database
const Datastore = require('nedb');
const database = new Datastore('database.db');
database.loadDatabase();

//Serve static files
app.use(express.static('public'));
app.use(bodyParser.json());

//Listen to port 3000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});