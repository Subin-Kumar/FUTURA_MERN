const router = require('express').Router()
const MDdata = require('../models/MenDress')
const WDdata = require('../models/WomenDress')
const Cldata = require('../models/User')
const Addata = require('../models/Admin')
const { request } = require('express')
const nodemailer = require('nodemailer')
const mailer = require('../models/MailDet')
const dotenv = require('dotenv')
const Crypto = require('crypto-js')

dotenv.config()

router.post("/Minput", async (req, res) => {
    try {
        const nData = new MDdata(req.body)
        const sData = await nData.save()
        res.status(200).json(sData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/Mdel/:id', async (req, res) => {
    console.log("mdel", req.params.id);
    try {
        await MDdata.findByIdAndDelete(req.params.id)
        res.status(200).json('Deleted')
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post("/Winput", async (req, res) => {
    try {
        const nData = new WDdata(req.body)
        const sData = await nData.save()
        res.status(200).json(sData)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.delete('/Wdel/:id', async (req, res) => {
    console.log("Wdel", req.params.id);
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

router.delete('/Udel/:id', async (req, res) => {
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

router.delete('/ADdel/:id', async (req, res) => {
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
router.get('/gett/:id', async (req, res) => {
    console.log('reqparams id***', req.params.id);
    try {
        const data = await Cldata.findById(req.params.id)
        res.status(200).json(data)
        console.log('gettdata---', data);
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
    console.log("reqparamid", req.params.id);
    console.log("reqbody", req.body);
    try {

        const cartND = await Cldata.findByIdAndUpdate(req.params.id, {
            $push: { cart: req.body }
        }, { new: true }
        )
        res.status(200).json(cartND)

    } catch (err) {
        res.status(500).json(err)
    }
})


router.put('/CartR1/:id', async (req, res) => {
    console.log("reqparamid", req.params.id);
    console.log("requubody", req.body);
    try {

        const cartN = await Cldata.findByIdAndUpdate(req.params.id, {
            $pull: { cart: { _id: req.body._id } }
        }, { new: true }
        )
        res.status(200).json(cartN)

    } catch (err) {
        res.status(500).json(err)
    }
})

router.put('/CartRA/:id', async (req, res) => {
    try {
        const cartN = await Cldata.findByIdAndUpdate(req.params.id, {
            $set: { cart: [] }
        }, { new: true }
        )
        res.status(200).json(cartN)


    } catch (err) {

    }
})

router.put('/CartqU/:id', async (req, res) => {
    console.log("Usid serv", req.params.id);
    console.log("id serv", req.body.id);
    console.log("cd serv", req.body.cd);

    try {

        const updatedDocument = await Cldata.findOneAndUpdate(
            { "_id": req.params.id, "cart.m._id": req.body.id },
            { $set: { "cart.$": req.body.cd } },
            { new: true }
        );

        if (updatedDocument) {
            console.log("Updated document:", updatedDocument);
        } else {
            console.log("Document or element not found.");
        }



    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }


});

router.put('/Ordrem/:id', async (req, res) => {
    console.log("Usid serv", req.params.id);
    console.log("id serv", req.body._id);
    //  console.log("cd serv",req.body.cd);

    try {

        const deletedDocument = await Cldata.findOneAndUpdate(
            { "_id": req.params.id, "orders._id": req.body._id },
            { $pull: { orders: { _id: req.body._id } } },
            { new: true }
        );

        res.status(200).json(deletedDocument)




    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }


});


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NMmail,
        pass: process.env.NMpass
    }
})

function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString()
}

router.post('/otpSnd', async (req, res) => {
    console.log("OTP--ReqBody", req.body);
    const email = req.body.FMail

    console.log("Req body email", email);

    const otp = generateOTP()

    const otpExpiration = new Date(Date.now() + 3 * 60 * 1000)

    console.log('Otpdata---', otp, otpExpiration, email);

    const user = new mailer({
        email, otp, otpExpiration
    })
    try {
        const ud = await user.save()

        const mailOptions = {
            from: process.env.NMmail,
            to: email,
            subject: 'Your OTP Code',
            text: `Your Otp code is :${otp}`
        }
        const info = await transporter.sendMail(mailOptions)
        return res.status(200).json({ msg: 'Otp is successfully snd', otp })
    }
    catch (err) {
        return res.status(500).json("error")
    }
})



router.put('/PassUp', async (req, res) => {

    console.log("passbody", req.body);
    // console.log("cd serv",req.body.cd);

    try {
        req.body.Npass = Crypto.AES.encrypt(req.body.Npass, process.env.CryptKey).toString()

        const updatedDocument = await Cldata.findOneAndUpdate(
            { "email": req.body.FFmail },
            { $set: { password: req.body.Npass } },
            { new: true }
        );

        if (updatedDocument) {
            console.log("Updated document:", updatedDocument);
        } else {
            console.log("Document or element not found.");
        }



    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }


});

module.exports = router