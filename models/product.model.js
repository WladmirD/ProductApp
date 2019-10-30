const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ProductSchema = new Schema({
    namelist: {type: String, required: true, max: 100},
    creator:{type:  Number, required: true},
    time:{type: Number, required: true},
    creatorOrder: {type: Number, required: true, max: 100},
    name: {type: String, required: true, max: 100},
    size: {type: String, required: true, max: 100},
    flavour: {type: String, required: true, max: 100},
    willbuy: {type: String, required: true, max: 100},

});


// Export the model
module.exports = mongoose.model('Product', ProductSchema);