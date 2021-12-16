const userModel = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signUp = async (req,res,next) =>{
    try{
        const {name,email,role,password} = req.body
        if(!(email && password && name)){
            return res.status(400).send({message:"Send All Inputs Properly!"})
        }
        const findUser = await userModel.findOne({email});
        if(findUser){
            return res.status(409).send({message:"User Already Exist In Our System, Please SignIn!"})
        }

        const encryptPassword = await bcrypt.hash(password,10);

        const createUser = await userModel.create({
            name,email:email.toLowerCase(),password:encryptPassword,role
        })

        const token = jwt.sign({userId:createUser._id,email:createUser.email,role:createUser.role},
            process.env.SECRET,
            {
                expiresIn:"1h"
            }
            )
            createUser.token = token;

            return res.status(200).send(createUser)
    }catch(err){
        console.log(err)
    }
}


exports.signIn = async (req,res,next) =>{
    try{
        const {email,password} = req.body;
        if(!(email && password)){
            return res.status(400).send({message:"Send All Inputs Properly!"})
        }
        const findUser = await userModel.findOne({email});
        if(findUser && (await bcrypt.compare(password,findUser.password))){
            const token = jwt.sign({userId:findUser._id,email:findUser.email,role:findUser.role},
                process.env.SECRET,
                {
                    expiresIn:"1h"
                }
                )
                findUser.token = token;
    
                return res.status(200).send(findUser)
        }
        return res.status(400).send({message:"Invalid Credentials!"})
    }catch(err){
        console.log(err)
    }
}
