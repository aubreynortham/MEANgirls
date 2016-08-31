var mongoose = require('mongoose')
var conn = mongoose.connect('mongodb://localhost/MEANgirls')

var GirlModel = require("../models/girl")
GirlModel.remove({}, function(err){
})

var nelley = new GirlModel({name: "Nelley", offense: "Publicly humiliated Marc by defeating him in a twerk competition", image: "http://i.imgur.com/nS24iP2.png"})
var dani = new GirlModel({name: "Dani", offense: "Beats up unassuming strangers at karaoke bars", image: "http://i.imgur.com/lhLYJfP.png"})
var tyler = new GirlModel({name: "Tyler", offense: "Told his wife and son he was going out for cigarettes; never came home. Became a millionaire coder but doesn't pay child support.", image: "http://i.imgur.com/xkesG7g.png"})
var aubrey = new GirlModel({name: "Aubrey", offense: "Hasn't cleaned contact lenses in 5 years", image: "http://pixel.nymag.com/imgs/daily/vulture/2016/05/02/02-arya-stark-game-of-thrones.w1200.h630.jpeg"})
var james = new GirlModel({name: "James", offense: "Refuses to man-bun", image: "http://cdn.pinknews.co.uk/images/2016/01/B5JeGbxIAAABkc1_640x345_acf_cropped.png"})
var andy = new GirlModel({name: "MEAN-girl Andy", offense: "Thought his students could learn MEAN stack in three days. Broke his secret santa present", image: "https://slack-redir.net/link?url=http%3A%2F%2Fvignette2.wikia.nocookie.net%2Fsteven-universe%2Fimages%2F4%2F42%2FCartman(1).jpg%2Frevision%2Flatest%3Fcb%3D20140605184628"})
var nayana = new GirlModel({name: "Nayana", offense: "Discriminates against scientologists. T-shirt game puts everyone to shame", image: "http://a1.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE1ODA0OTcxOTg1MDQ1MDA1.jpg"})
var marc = new GirlModel({name: "Marc", offense: "Sexually harasses his elders", image: "http://i.imgur.com/m9gp9Tr.png"})

var girls = [nelley, dani, tyler, aubrey, james, andy, nayana, marc]

for(var i = 0; i < girls.length; i++){
  girls[i].save(function(err){
    if(!err){
      console.log("feeling the burns");
    }
  })
}
