var GirlModel = require("../models/girl")

var girlsController = {
  index: function(req, res){
    GirlModel.find({}, function(err, docs){
      res.render("girls/index", {girls: docs})
    })
  },
  new: function(req, res){
    res.render("girls/new")
  },
  create: function(req, res){
    var newgirl = new GirlModel({name: req.body.name, offense: req.body.offense, image: req.body.image})
    newgirl.save(function(err){
      if(!err){
        res.redirect("burnbook")
      }
    })
  },
  show: function(req, res){
    GirlModel.findById(req.params.id, function(err, doc){
      res.render("girls/show", {girl: doc})
    })
  // },
  // edit: function(req, res){
  //   GirlModel.findById(req.params.id, function(err, doc){
  //     res.render("girls/edit", {girl: doc})
  //   })
  }
}

module.exports = girlsController;
