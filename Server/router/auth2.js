const multer = require('multer')
const router = require('express').Router()
const Crypto = require('crypto-js')
const ClData = require('../models/User')
const AdData = require('../models/Admin')
const MDat=require('../models/MenDress')
const WDat=require('../models/WomenDress')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const fs = require('fs');
const path = require('path');
const { verifyToken, verifyTokenAndAuthorization } = require('../jwt_verify_token')
dotenv.config()


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../client/public/Images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post("/sign", upload.single('image'), async (req, res) => {
    console.log("req-body--", req.body);
    console.log("req-file--", req.file);
    try {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
        const newData = new ClData({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age,
            address: req.body.address,
            image: req.file.originalname,
            password: req.body.password
        })
        const saveData = await newData.save()
        res.status(200).json(saveData)

    } catch (err) {
        res.status(500).json(err)
    }

})



const Adstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../admin/public/Images')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const Adupload = multer({ storage: Adstorage })


router.post("/Adsign", Adupload.single('image'), async (req, res) => {
    console.log("req-body--", req.body);
    console.log("req-file--", req.file);
    try {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
        const newData = new AdData({
            username: req.body.username,
            email: req.body.email,
            age: req.body.age,
            address: req.body.address,
            image: req.file.originalname,
            password: req.body.password
        })
        const saveData = await newData.save()
        res.status(200).json(saveData)
    } catch (err) {
        res.status(500).json(err)
    }
})

const DrMstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../admin/public/DrM')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})
const DrMupload = multer({ storage: DrMstorage })

router.post("/MdrUpload", DrMupload.single('img'), async (req, res) => {
    console.log("req-body--", req.body);
    console.log("req-file--", req.file);
    const imgPath='/DrM/'.concat(req.file.originalname);
    console.log("imgpath",imgPath);
    
    try {
        
        fs.copyFile(req.file.path, '../client/public/DrM/'+req.file.originalname, (err) => {
            if (err) {
                console.error(`Error copying file: ${err}`);
                return res.status(500).json({ error: 'Error copying file' });
            } else {
                console.log(`File copied to  successfully`);
            }
        });

        const newData = new MDat({
            productType: req.body.productType,
            price: req.body.price,
            sizes: req.body.sizes,
            colors: req.body.colors,
            img: imgPath
            
        })
        const saveData = await newData.save()
        console.log("save",saveData);
        console.log("save",saveData._id);
        res.status(200).json(saveData)
    } catch (err) {
        res.status(500).json(err)
    }
})

const DrWstorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../admin/public/DrW')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const DrWupload = multer({ storage: DrWstorage })

router.post("/WdrUpload", DrWupload.single('img'), async (req, res) => {
    console.log("req-body--", req.body);
    console.log("req-file--", req.file.path);
 
    const imgPath='/DrW/'.concat(req.file.originalname);
    console.log("imgpath",imgPath);

    try {
        fs.copyFile(req.file.path, '../client/public/DrW/'+req.file.originalname, (err) => {
            if (err) {
                console.error(`Error copying file: ${err}`);
                return res.status(500).json({ error: 'Error copying file' });
            } else {
                console.log(`File copied to  successfully`);
            }
        });
    
        
        const newData = new WDat({
            productType: req.body.productType,
            price: req.body.price,
            sizes: req.body.sizes,
            colors: req.body.colors,
            img: imgPath
            
        })
        const saveData = await newData.save()
        console.log("save",saveData);

        res.status(200).json(saveData)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.post('/update/:id', upload.single('image'), async (req, res) => {
    console.log("req body----", req.body);
    console.log("req file----", req.file);
    console.log("password old", req.body.password);
    console.log("id", req.params.id);

    if (req.body.password) {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
    }
    req.body.image = req.file.originalname
    console.log("ckey--", req.body.password);

    try {
        const UpdateData = { ...req.body }
        
        console.log('updated===', UpdateData);
        const updateuser = await ClData.findByIdAndUpdate(req.params.id, {
            $set: UpdateData
        }, { new: true }
        )
        console.log("upuser", updateuser);
        res.status(200).json(updateuser)
    } catch (err) {
        res.status(500).json(err)
    }
})
// 
router.post('/updateAd/:id',Adupload.single('image'),  async (req, res) => {
    console.log("req body----", req.body);
    // console.log("req file----", req.file);
    console.log("password old", req.body.password);
    console.log("id", req.params.id);

    if (req.body.password) {
        req.body.password = Crypto.AES.encrypt(req.body.password, process.env.CryptKey).toString()
    }
    // req.body.image = req.file.originalname
    console.log("ckey--", req.body.password);

    try {
        
        
        const updateAdmin = await AdData.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true }
        )
        console.log("upAdmin", updateAdmin);
        res.status(200).json(updateAdmin)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/Clverify', async (req, res) => {
    console.log("ver test", req.body);
    try {
        const Dbd = await ClData.findOne({ email: req.body.emaillog })
        console.log("Dbd---", Dbd);
        !Dbd && res.status(401).json('Please check your email')

        const Hp = Crypto.AES.decrypt(Dbd.password, process.env.CryptKey)
        const Op = Hp.toString(Crypto.enc.Utf8)
        console.log("Dbd password", Op);
        console.log("password vercheck==", Op, req.body.passwordlog);
        Op != req.body.passwordlog && res.status(401).json('Password and email are not match')

        const accesstoken = jwt.sign({
            id: Dbd._id
        }, process.env.JwtKey, { expiresIn: '1d' })

        console.log("accesstoken--", accesstoken);
        const { password, ...others } = Dbd._doc
        res.status(200).json({ ...others, accesstoken, Op })


    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/Adverify', async (req, res) => {
    console.log("ver test", req.body);
    try {
        const Dbd = await AdData.findOne({ email: req.body.emaillog })
        console.log("Dbd---", Dbd);
        !Dbd && res.status(401).json('Please check your email')
        const Hp = Crypto.AES.decrypt(Dbd.password, process.env.CryptKey)
        const Op = Hp.toString(Crypto.enc.Utf8)
        console.log("Dbd password", Op);
        console.log("password vercheck==", Op, req.body.passwordlog);
        Op != req.body.passwordlog && res.status(401).json('Password and email are not match')
        const accesstoken = jwt.sign({
            id: Dbd._id
        }, process.env.JwtKey, { expiresIn: '1d' })
        console.log("accesstoken--", accesstoken);
        const { password, ...others } = Dbd._doc
        res.status(200).json({ ...others,accesstoken, Op })
    } catch (err) {
        res.status(500).json(err)
    }
})



module.exports = router