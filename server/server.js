const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
require('dotenv').config();

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/api/ping', (req, res) => {
    res.status(200).json({status: 'success', message: 'server is running..'})
})

app.listen(3002, console.log('Server is running in port 3002'))