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
        let articles = await Article.find({}).sort({_id: -1})
        return res.json({ status: "ok", content : articles });
    });

    app.get("/api/grab10", async (req, res) => {
        let articles = await Article.find({}).sort({_id: -1}).limit(10)
        return res.json({ status: "ok", content : articles });
    });

    app.get("/api/grab3", async (req, res) => {
        let articles = await Article.find({}).sort({_id: -1}).limit(3)
        return res.json({ status: "ok", content : articles });
    });

    app.post("/api/research", async (req, res) => {
        const input = req.body.input
        function diacriticSensitiveRegex(string) {
            return string
               .replace(/a/g, '[a,á,à,ä,â]')
               .replace(/A/g, '[A,a,á,à,ä,â]')
               .replace(/e/g, '[e,é,ë,è]')
               .replace(/E/g, '[E,e,é,ë,è]')
               .replace(/i/g, '[i,í,ï,ì]')
               .replace(/I/g, '[I,i,í,ï,ì]')
               .replace(/o/g, '[o,ó,ö,ò]')
               .replace(/O/g, '[O,o,ó,ö,ò]')
               .replace(/u/g, '[u,ü,ú,ù]')
               .replace(/U/g, '[U,u,ü,ú,ù]');
        }
        let articles = await Article.find({title: {$regex: diacriticSensitiveRegex(input), $options: "imxs"}}).sort({_id: -1})
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
        const empty = ""
        let article = await Article.create({
            title: req.body.title,
            content : req.body.data,
            img: empty,
            description: empty,
        })
        res.json({ status: 'ok' })
    })
}