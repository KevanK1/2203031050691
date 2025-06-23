const express = require('express');
const mongoose = require('mongoose');
const shortURL = require("./models/model");
const connection = require("./config/db.config");
const app = express();
app.use(express.json());

const logger = require('./middleware/Logger');

app.get('/', logger ,(req, res) => {res.send('Welcome to URL Shortener!');});

app.listen(3000, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
    console.log('Server is running on port 3000');
});