const mongoose = require("mongoose");

const quesSchema = mongoose.Schema({
    email:{type:String, required:true},
    name:{type:String, required:true},
    
}) 

const quesModel = mongoose.model("question",quesSchema);

module.exports={
    quesModel
}