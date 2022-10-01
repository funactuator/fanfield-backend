const express = require("express");
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const morgan = require('morgan')
const helmet = require('helmet')

dotenv.config()
//express server setup
const app = express();

//database connection
mongoose.connect(process.env.MONGO_URL,() => {
    console.log("Database connection successful")
})


//middlewares
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))

app.listen(8800,() => {
    console.log("fanfield backend is up and running!")
})

//mongodb database connection


app.get('/', (req, res) => {
    res.send("Welcome to fanfield!")
})
