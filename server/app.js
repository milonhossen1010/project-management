//Express js implement
const express = require("express")
const app = new express();

// Route api import
const router = require("./src/routes/api")

//BoudyParser import
const bodyParser = require("body-parser")

// Database Lib Import
const mongoose = require('mongoose');

// security middleware lib import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Security Middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

//Body Parser Implement
app.use(bodyParser.json());


// Request Rate Limit
const limiter = rateLimit({ windosMs: 15 * 60 * 1000, max: 3000 });
app.use(limiter);

// Mongo DB Database Connection
let URI = 'mongodb://127.0.0.1/project-mangement';
let OPTION={user:'',pass:'', autoIndex:true}
mongoose
  .connect(URI, OPTION)
  .then(() => console.log('MongoDB Connect Successfull.'))
  .catch(err => console.log(err));



//Route Implement
app.use("/api/v1/", router)

// Undefinedf Route Implement
app.use('*', (req, res) =>
  res.status(404).json({ status: 'Fail', data: 'Not Found' })
);





module.exports = app;