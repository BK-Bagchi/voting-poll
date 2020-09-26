const express = require('express')
const app = express()

const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    // res.send("Server is working well")
    res.json("Server is working well")
})

app.listen(4000, () => {
    console.log("Server listening");
})