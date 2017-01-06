var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = Schema({
    imagePath1: {type: String, required: true},
    imagePath2: {type: String, required: true},
    imagePath3: {type: String, required: true},
    imagePath4: {type: String, required: false},
    title: {type: String, required: true},
    description1: {type: String, required: true},
    description2: {type: String, required: true},
    price: {type: String, required: true}

});

module.exports = mongoose.model('Service',schema);