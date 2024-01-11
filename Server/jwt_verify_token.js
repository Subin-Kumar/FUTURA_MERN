const jwt=require("jsonwebtoken")

const verifyToken=(req,res,next)=>{
    let authHeader=req.headers.token
    console.log("AuthHeader==",authHeader);

    if(authHeader){
        const token=authHeader.split(" ")[1]
        console.log("Split token---",token);


        jwt.verify(token,process.env.JwtKey,(err,user)=>{

            if(err){
                return res.status(403).json("Token not valid")

            }

            req.user=user
            console.log("user---@--",user);
            next()
        })
    }
    else{
       return res.status(401).json({error:"Token not found"})
    }
}

const verifyTokenAndAuthorization=(req,res,next)=>{
    verifyToken(req,res,(data)=>{
        console.log(data);
        console.log("req.user.id:",req.user.id);
        console.log("req.params.id:",req.params.id);

        if(req.user.id===req.params.id){
            next()
        }
        else{
            return req.status(403).json("You are not allowed")
        }

    })
}

module.exports={verifyToken,verifyTokenAndAuthorization}