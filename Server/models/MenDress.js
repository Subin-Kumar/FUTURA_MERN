const mongoose =require('mongoose')

const MenSchema=new mongoose.Schema({
    
    'img':{type:String,required:true},
    'productType':{type:String,required:true},
    'price':{type:Number,required:true},
    'sizes':{type:Array,required:true},
    'colors':{type:Array,required:true},
},{timestamps:true})

module.exports=mongoose.model('Mendata',MenSchema)