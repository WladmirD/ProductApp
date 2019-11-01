const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const orderSchema = new Schema({
 name: {
  type: String,
  trim: true,  
  required: true,
 },
 sabor: {
    type: String,
    required: true,
 },
 creador:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
 },
lista:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'lists',
    required: true
},
precio:{
    type: String,
},
pago:{
    type: String,
    enum: ['CASH','CARD'],
    default: 'CASH',
},
paid:{
    type: Boolean,
    default: false,
},
size:{
    type: String,
}

    
});
orderSchema.index({
    creador: 1,
    lista: 1,
},{
    unique: true
})
module.exports = mongoose.model('order', orderSchema)