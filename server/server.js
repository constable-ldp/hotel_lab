const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
    .then((client) => {
        const db = client.db('rooms');
        const bookingsCollection = db.collection('bookings');
        const bookingsRouter = createRouter(bookingsCollection);
        app.use('/api/bookings', bookingsRouter);
    })
    .catch(console.err);

app.listen(3000, function () {
    console.log(`Listening on port ${ this.address().port }`);
    });