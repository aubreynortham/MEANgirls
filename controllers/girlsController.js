var GirlModel = require("../models/girl")

var girlsController = {
  index: function(req, res){
    GirlModel.find({}, function(err, docs){
      res.json(docs);
    })
  },
  // new: function(req, res){
  //   res.render("girls/new")
  // },
  create: function(req, res){
    var newgirl = new GirlModel({name: req.body.name, offense: req.body.offense, image: req.body.image})
    // newgirl.save(function(err){
    //   if(!err){
    //     res.redirect("/burnbook")
    //   }
    // })
    newgirl.save().then(function(girlnew){
      res.json(girlnew)
    })
  },
  show: function(req, res){
    GirlModel.findById(req.params.id, function(err, doc){
      res.json(doc)
    })
  },
  // edit: function(req, res){
  //   GirlModel.findById(req.params.id, function(err, doc){
  //     res.render("girls/edit", {girl: doc})
  //   })
  // },
  update: function(req, res){
    GirlModel.findById(req.params.id, function(err, docs){
      docs.name = req.body.name
      docs.offense = req.body.offense
      docs.image = req.body.image
      docs.save(function(err){
        if(!err){
          // res.redirect("/girls/" + req.params.id)
          res.json(docs)
        }
      })
    })
  },
  delete: function(req, res){
    GirlModel.remove({_id: req.params.id}, function(err){
      if(!err){
        res.json({success: true});
      }
    })
  }
}

module.exports = girlsController;
