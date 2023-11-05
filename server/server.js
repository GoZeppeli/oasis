const express = require('express')
const app = express()

app.get("/hi", (req,res) => {
    res.send("Hello")
})

app.listen(1000, () => {
    console.log("server started on 1000")
})