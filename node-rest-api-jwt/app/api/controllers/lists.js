const list = require('../models/lists');
module.exports = {
 getById: function(req, res, next) {
  console.log(req.body);
  list.findById(req.params.listId, function(err, listInfo){
   if (err) {
    next(err);
   } else {
    res.json({status:"success", message: "list found", data:{lists: listInfo}});
   }
  });
 },
 //Show lists
getAll: function(req, res, next) {
  let listsList = [];
list.find({}, function(err, lists){
   if (err){
    next(err);
   } else{
    for (let list of lists) {
        listsList.push({
            id: list._id,
            name: list.name,
            creator: list.creator,
            created: list.created,
            expiration: list.expiration,
            order: list.order,
     });
    }
    res.json({status:"success", message: "lists list found", data:{lists: listsList}});
       
   }
});
 },
 //Update lists
updateById: function(req, res, next) {
  list.findByIdAndUpdate(req.params.listId, function(err, listInfo){
if(err)
    next(err);
   else {
    res.json({status:"success", message: "list updated successfully", data:null});
   }
  });
 },
 //Delete List by ID
deleteById: function(req, res, next) {
  list.findByIdAndRemove(req.params.listId, function(err, listInfo){
   if(err)
    next(err);
   else {
    res.json({status:"success", message: "list deleted successfully", data:null});
   }
  });
 },
 //Create list
create: function(req, res, next) {
  list.create({creator: req.body.creator, name: req.body.name}, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "list added successfully", data: null});
      
    });
 },
}