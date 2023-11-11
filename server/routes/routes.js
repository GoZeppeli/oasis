const Article = require('../models/article.model')

module.exports = function(app) {
    app.get("/hi", (req,res) => {
        res.send("hello")
    })

    app.get("/", async (req, res) => {
        let articles = await Article.find({})
        return res.json({ status: "ok", content : articles });
    });

    app.post("/grab", async (req, res) => {
        let article = await Article.findOne({_id : req.body.params})
        return res.json({ status: "ok", content : article });
    });

    app.post('/hello', async (req, res) => {
        let article = await Article.create({
            title: req.body.title,
            content : req.body.data
        })
        res.json({ status: 'ok' })
    })
}