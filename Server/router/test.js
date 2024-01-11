const router = require('express').Router()
const MDdata = require('../models/MenDress')
const WDdata = require('../models/WomenDress')
const Cldata = require('../models/User')
const Addata = require('../models/Admin')
const { request } = require('express')



router.delete('/Mdel/:id',async (req, res) => {
    
    try {
        await MDdata.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})


router.delete('/Wdel/:id',async (req, res) => {
    
    try {
        await WDdata.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/Clinput", async (req, res) => {
    try {
        const nData = new Cldata(req.body)
        const sData = await nData.save()
        res.status(200).json(sData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/Udel/:id',async (req, res) => {
    console.log(req.params.id);
    try {
        await Cldata.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/Adinput", async (req, res) => {
    try {
        const nData = new Addata(req.body)
        const sData = await nData.save()
        res.status(200).json(sData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/ADdel/:id',async (req, res) => {
    console.log(req.params.id);
    try {
        await Addata.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getMen', async (req, res) => {
    try {
        const AllData = await MDdata.find()
        console.log("MenServer",AllData);
        res.status(200).json(AllData)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getUser', async (req, res) => {
    try {
        const AllUData = await Cldata.find()
        res.status(200).json(AllUData)

    } catch (err) {
        res.status(500).json(err)
    }
})
router.get('/getAdmin', async (req, res) => {
    try {
        const AllAdData = await Addata.find()
        res.status(200).json(AllAdData)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getWomen', async (req, res) => {
    try {
        const AllData = await WDdata.find()
        res.status(200).json(AllData)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/getCart', async (req, res) => {
    try {
        const CartD = await Cldata.findById(req.body)
        res.status(200).json(CartD)

    } catch (err) {
        res.status(500).json(err)
    }
})
router.put('/AddCartData/:id', async (req, res) => {
    console.log("reqparamid",req.params.id);
    console.log("reqbody",req.body);
    try {

        const cartND  = await Cldata.findByIdAndUpdate(req.params.id, {
            $push: {cart:req.body}
        }, { new: true }
        )
        res.status(200).json(cartND)

    } catch (err) {
        res.status(500).json(err)
    }
})
router.put('/CartR1/:id', async (req, res) => {
    console.log("reqparamid",req.params.id);
    console.log("requubody",req.body);
    try {

        const cartN  = await Cldata.findByIdAndUpdate(req.params.id, {
            $pull: {cart:{_id:req.body._id}}
        }, { new: true }
        )
        res.status(200).json(cartN)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/CartRA/:id',async(req,res)=>{
    try{
        const cartN  = await Cldata.findByIdAndUpdate(req.params.id, {
            $set: {cart:[]}
        }, { new: true }
        )
        res.status(200).json(cartN)


    }catch(err){

    }
})

module.exports = router