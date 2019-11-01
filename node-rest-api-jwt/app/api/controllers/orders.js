const orderModel = require('../models/orders');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  orderModel.findById(req.params.orderId, function(err, orderInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "order found", data:{orders: orderInfo}});
   }
  });
 },
 //Show orders
getAll: function(req, res, next) {
  let ordersList = [];
orderModel.find({}, function(err, orders){
   if (err){
    next(err);
   } else{
    for (let order of orders) {
     ordersList.push({
        id: order._id,
        name: order.name,
        sabor: order.sabor,
        creador: order.creador,
        lista: order.lista,
        size: order.size,
        });
    }
    res.json({status:"success", message: "orders list found", data:{orders: ordersList}});
       
   }
});
 },
 //Update orders
updateById: function(req, res, next) {
  orderModel.findByIdAndUpdate(req.params.orderId,{name:req.body.name}, function(err, orderInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "order updated successfully!!!", data:null});
   }
  });
 },
 //Delete orders
deleteById: function(req, res, next) {
  orderModel.findByIdAndRemove(req.params.orderId, function(err, orderInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "order deleted successfully", data:null});
   }
  });
 },
 //Create orders
create: function(req, res, next){orderModel.create(
    { 
    name: req.body.name, 
    sabor: req.body.sabor,
    creador: req.body.creador,
    lista: req.body.lista,
    size: req.body.size,
    }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "order added successfully", data: null});
      
    });
 },
}