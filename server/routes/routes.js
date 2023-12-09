const Article = require('../models/article.model')
const User = require('../models/article.model')

module.exports = function(app) {
    app.get("/api/hi", (req,res) => {
        res.send("hello")
    })

    app.post("/api/protect", (req,res) => {
        var pwd = req.body.pwd
        if(process.env.ADMIN_PASSWORD === pwd){
            return res.json({ status : "ok"})
        } else {
            return res.json({status : "error"})
        }
    })

    app.get("/api/grabAll", async (req, res) => {
        let articles = await Article.find({})
        return res.json({ status: "ok", content : articles });
    });

    app.get("/api/grabOne/:id", async (req, res) => {
        var id = req.params.id;
        let article = await Article.findOne({_id : id})
        return res.json({ status: "ok", content : article });
    });

    app.post("/api/delete", async (req, res) => {
        var id = req.body.id;
        let article = await Article.findOneAndDelete({_id : id})
        return res.json({ status: "ok" });
    });

    app.post('/api/hello', async (req, res) => {
        let article = await Article.create({
            title: req.body.title,
            content : req.body.data
        })
        res.json({ status: 'ok' })
    })
}