const express = require("express");
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser');
const AppError = require("./Utils/AppError");
const globalErrorHandler = require('./Controllers/errorController');
require('dotenv').config();

const app = express();
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.get('/api/ping', (req, res) => {
    res.status(200).json({status: 'success', message: 'server is running..'})
});

// Mongoose
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(con => {
    console.log('DB connected succesfully')
}).catch(err => console.log("Error : ", err))


app.all("*", (req, res, next) => {
    next(new AppError(`Cant't find ${req.originalUrl} in the server!`, 404));
})

app.use(globalErrorHandler);


app.listen(3002, console.log('Server is running in port 3002'));
