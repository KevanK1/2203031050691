const express = require('express');
const mongoose = require('mongoose');
const shortURL = require("./models/model");
const connection = require("./config/db.config");
const app = express();
app.use(express.json());

const logger = require('./middleware/Logger');

app.get('/', logger ,(req, res) => {});
const generateShortcode = () => Math.random().toString(36).substring(2, 7);
