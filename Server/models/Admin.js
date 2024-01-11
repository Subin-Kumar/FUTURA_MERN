const mongoose=require('mongoose')

const SoulAdminScheme=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:Number,required:true},
    address:{type:String,required:true},
    image:{type:String},
    password:{type:String,required:true}
    
},{timestamps:true})

module.exports=mongoose.model('SoulAdmin',SoulAdminScheme)