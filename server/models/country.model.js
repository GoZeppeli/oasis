const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const Country = new Schema({
    name: {type: String},
    code: {type: String},
    data: {type: Array},
    votes: {type: Object},
});

const CountryModel = model('Country', Country);

module.exports = CountryModel;