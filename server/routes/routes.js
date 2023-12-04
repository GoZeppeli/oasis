const Article = require('../models/article.model')

module.exports = function(app) {
    app.get("/api/hi", (req,res) => {
        res.send("hello")
    })

    app.get("/api/grabAll", async (req, res) => {
        console.log("1")
        let articles = await Article.find({})
        return res.json({ status: "ok", content : articles });
    });

    app.post("/api/grabOne", async (req, res) => {
        let article = await Article.findOne({_id : req.body.params})
        return res.json({ status: "ok", content : article });
    });

    app.post('/api/hello', async (req, res) => {
        let article = await Article.create({
            title: req.body.title,
            content : req.body.data
        })
        console.log(article)
        res.json({ status: 'ok' })
    })
}