const listModel = require('../models/lists');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  listModel.findById(req.params.listId, function(err, listInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "list found!!!", data:{lists: listInfo}});
   }
  });
 },
getAll: function(req, res, next) {
  let listsList = [];
listModel.find({}, function(err, lists){
   if (err){
    next(err);
   } else{
    for (let list of lists) {
     listsList.push({id: list._id, name: list.name, created: list.created, time: list.time});
    }
    res.json({status:"success", message: "lists list found!!!", data:{lists: listsList}});
       
   }
});
 },
updateById: function(req, res, next) {
  listModel.findByIdAndUpdate(req.params.listId,{name:req.body.name}, function(err, listInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "list updated successfully!!!", data:null});
   }
  });
 },
deleteById: function(req, res, next) {
  listModel.findByIdAndRemove(req.params.listId, function(err, listInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "list deleted successfully!!!", data:null});
   }
  });
 },
create: function(req, res, next) {
  listModel.create({ name: req.body.name, created: req.body.created, time:req.body.time }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "list added successfully!!!", data: null});
      
    });
 },
}