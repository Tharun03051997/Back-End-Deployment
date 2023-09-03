const userRouter = require('express').Router();
const userModel = require("../Models/Users.model")
//GET ALL THE USERS
/**
 * METHOD = GET
 * REQUEST= {}
 * RESPONSE = ARRAY<USERS>
 */

 userRouter.get('/',(req,res,next)=>{
    console.log("Head controller")
    
    userModel.find().then((cursor)=>{
        if(cursor && cursor.length>0){
            return res.status(200).json({
                data: cursor,
                success: true,
                message:"Users fetched Successfully"
            })
            
        }
        else
        {
            return res.status(200).json({
                data: [],
                success: false,
                message:"No Data Found"
            })
        }
    })
    .catch((err)=>{
        return res.status(200).json({
            success: false,
            message:"Error fetching users Data",
            error: err
        })
    })

 })

 // CREATE A USER
 /**
  * METHOD=POST
  * REQUEST = object<user>
  * RESPONSE={}
  */
 userRouter.post('/create',(req,res,next)=>{
    const data = req.body;
    const User = new userModel(data);
    console.log("users",User);
    User.save().then((result)=>{
        if(result&&result._id)
        {
            return res.status(200).json({
                message:"user created successfully",
                data: result
            })
        }
        console.log("answer",result)
    })
    .catch((err)=>{
        return res.status(401).json({
            message:"Alas!Error creating user",
            error: err
        })
    })
 })
module.exports = userRouter;