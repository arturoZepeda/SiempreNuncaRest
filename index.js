require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const mongoString = process.env.DATABASE_URL;
const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection;
var cors = require('cors')
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', routes);
app.listen(3001, () => {
    console.log(`Server Started at ${3001}`)
})
