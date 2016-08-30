var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/MEANgirls')

var GirlModel = require("../models/girl")
GirlModel.remove({}, function(err){
})

var nelley = new GirlModel({name: "Nelley", offense: "Publicly humiliated Marc by defeating him in a twerk competition.", image: "http://i.imgur.com/lhLYJfP.png"})
var dani = new GirlModel({name: "Dani", offense: "Beats up unassuming strangers at karaoke bars.", image: "http://i.imgur.com/nS24iP2.png"})
var tyler = new GirlModel({name: "Tyler", offense: "Uses his precious son to pick up ladies on the weekend.", image: "http://i.imgur.com/xkesG7g.png"})

var girls = [nelley, dani, tyler]

for(var i = 0; i < girls.length; i++){
  girls[i].save(function(err){
    if(!err){
      console.log("feeling the burns");
    }
  })
}
