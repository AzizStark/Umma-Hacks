const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const LoginSchema = new Schema({
  userName:{
    type: String,
    required: true,
    required: [true, 'Enter UserName']
    },
  email:{
    type: String,
    required: [true, 'Enter UserName']
   },
  password:{
    type:String,
    required:[true,'Enter password']
  },
  pepper: {
    type: String,
    required: [true, 'Pepper required']
  }
})

//create model for todo
const umma = mongoose.model('umma', LoginSchema);

module.exports = umma;