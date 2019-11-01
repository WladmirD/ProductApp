const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const listSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 created: {
  type: Date,
  trim: true,
  required: false
 },
 time: {
    type: Number,
    trim: true,
    required: true
 }
});
module.exports = mongoose.model('list', listSchema)