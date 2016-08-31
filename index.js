var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var methodOverride = require('method-override')
var girlsController = require("./controllers/girlsController")
mongoose.connect('mongodb://localhost/MEANgirls')
var app = express()
app.set("view engine", "hbs")

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(methodOverride('_method'))
//connects assets like stylesheets:
app.use(express.static(__dirname + '/public'));

app.listen(4000, function(){
  console.log("your port is working you fugly slut");
})

app.get("/", function(req, res){
  res.render("girls")
})

app.get("/api/girls", girlsController.index) //updated index route
// app.get("/girls/new", girlsController.new)
app.post("/api/girls", girlsController.create)
app.get("/api/girls/:id", girlsController.show) //updated show route
// app.get("/girls/:id/edit", girlsController.edit)
app.put("/api/girls/:id", girlsController.update) //updated the update route
app.delete("/api/girls/:id", girlsController.delete) //updated delete route

app.use(require("better-express-errors")(app))
