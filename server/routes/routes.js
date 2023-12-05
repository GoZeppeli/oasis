const Article = require('../models/article.model')

module.exports = function(app) {
    app.get("/api/hi", (req,res) => {
        res.send("hello")
    })

    app.get("/api/grabAll", async (req, res) => {
        let articles = await Article.find({})
        return res.json({ status: "ok", content : articles });
    });

    app.get("/api/grabOne/:id", async (req, res) => {
        var id = req.params.id;
        console.log(id)
        let article = await Article.findOne({_id : id})
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