const mongoose=require('mongoose')

const SoulUserScheme=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    age:{type:Number,required:true},
    address:{type:String,required:true},
    image:{type:String},
    password:{type:String,required:true},
    cart:{type:Array,required:true},
    orders:{type:Array}

},{timestamps:true})

module.exports=mongoose.model('SoulUser',SoulUserScheme)