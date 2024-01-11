const express=require('express')
const app=express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')

dotenv.config()
app.use(cors())

const route=require('./router/auth')
const route2=require('./router/auth2')
const route3=require('./router/order')

mongoose.connect(process.env.Mongodb_Url).then((data)=>{
    console.log('database connected');
}).catch((err)=>{
    console.log("error",err);
})
app.use(express.json())
app.use('/api/Soul',route)
app.use('/api/Soul2',route2)
app.use('/api/SoulO',route3)
app.listen(5000,()=>{
    console.log("port 5000 connected");
})