const mongoose = require("mongoose");

const CatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  sound: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    enum : ['c1','c2'],
    required: true
  },
});

const Cat = mongoose.model("Cat", CatSchema);

module.exports = Cat;
