const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Article = new Schema({
    title: {type: String},
    content: {type: String},
    img: {type: String},
    description: {type: String},
    references: {type: String},
});

const ArticleModel = model('Article', Article);

module.exports = ArticleModel;