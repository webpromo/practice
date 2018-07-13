
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
require('dotenv').config();

const app = express();
massive(CONNECTION_STRING="")
.then( dbInstance => app.set('db', dbInstance))
.catch( err => {
    console.log(err);
    res.status(500).send(err);
    })
app.use( bodyParser.json() );
app.use( cors() );

// ENDPOINTS
// const productCtrl = require
app.get('/api/products', )
 
const port = process.env.PORT || 3006;
// console.log(port); 
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );