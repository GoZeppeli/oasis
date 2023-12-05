const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
require('dotenv').config();
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.DB_URI);
require("./routes/routes")(app);


app.listen(1000, () => {
    console.log("server started on 1000")
})