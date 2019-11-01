const mongoose = require('mongoose');
//Define a schema
const listSchema = new mongoose.Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 creator:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
 },
 created: {
  type: Date,
  default: Date.now,
 },
 experiation: {
    type: Date,
    fedault: (Date.now() + 2400000)
 },
order:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'order',
}],
});
module.exports = mongoose.model('list', listSchema)