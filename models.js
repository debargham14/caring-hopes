const { Timestamp } = require('bson');
const mongoose = require('mongoose')
const uniqueValidator = require ('mongoose-unique-validator');

//schema for doctors 
const schema = new mongoose.Schema({
    name : String,
    number: String,
    email : {type : String, unique : true},
    desc : String,
    password : String
  });

//schema for normal public 
const schema1 = new mongoose.Schema({
    name : String,
    number: String,
    email : {type : String, unique : true},
    password : String
  });
schema.plugin (uniqueValidator);
schema1.plugin (uniqueValidator);

//schema for slot updates by doctors
const freeSlotSchema  = new mongoose.Schema ( {
    doc_email : String,
    patient_email : String,
    date : String,
    time : String,
    isbooked : Boolean,
    meetlink: String,
    slot_id : String,
}) 
//exporting the modules.
  module.exports = {
    doctor:  mongoose.model('doctors',schema) ,
    public: mongoose.model('public',schema1) ,
    freeSlot : mongoose.model('freeSlot', freeSlotSchema) 
  }
