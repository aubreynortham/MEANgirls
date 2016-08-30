var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId

//define schemas
var GirlSchema = new Schema({
  name: String,
  offense: String,
  image: String
})

mongoose.model("Girl", GirlSchema)
