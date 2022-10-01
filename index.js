const express = require("express");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')


const app = express();

app.listen(8800,() => {
    console.log("fanfield backend is up and running!")
})
