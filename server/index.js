
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use( bodyParser.json() );

const port = process.env.PORT || 3000;
console.log(port); 
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );