const mongoose =require('mongoose')

const WomenSchema=new mongoose.Schema({
    
    'img':{type:String,required:true},
    'productType':{type:String,required:true},
    'price':{type:Number,required:true},
    'sizes':{type:Array,required:true},
    'colors':{type:Array,required:true},
},{timestamps:true})

module.exports=mongoose.model('Womendata',WomenSchema)