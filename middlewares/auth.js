const jwt = require('jsonwebtoken')

exports.verifyToken = async (req,res,next) =>{
    const token = req.body.token || req.query.token || req.headers['x-access-token']

    if(!token){
        return res.status(403).send({message:"Please pass token in APIs"})
    }
    try{
        const decodeToken = jwt.verify(token,process.env.SECRET);
        req.user = decodeToken
    }catch(err){
        return res.status(401).send({message:"Invalid Token"});
    }
    return next();
}

exports.isAdmin = async (req,res,next) =>{

    if(req.user.role!=='Admin'){
        return res.status(401).send({message:"You are not an Admin"});
    }
    return next();
}

exports.isUser = async (req,res,next) =>{

    if(req.user.role!=='User'){
        return res.status(401).send({message:"You have no access rights"});
    }
    return next();
}