require('dotenv').config()
const express = require('express')
const configurator = require("./config");
const config = configurator();
const app = express()
const port = config.application.port

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Waste Not instance started on port ${port}`)
})