const User = require('../model/userModel')
const Feedback = require('../model/messageModel')

const bcrypt = require('bcrypt')
module.exports.register = async (req,res,next)=>{
 try{
    const {username,pwd,role,phnnum,email} = req.body
    // console.log(req.body)
    const Usernamecheck = await User.findOne({username})
    if(Usernamecheck){
      // console.log("User exists")
      return res.json({msg:"Username already exists",status:false}).status(404);
    }
    const hashPwd = await bcrypt.hash(pwd,10);
    const user = await User.create({
     username,password:hashPwd,role,phonenumber:phnnum,email
    });
    // console.log(user)
    delete user.password;
    return res.json({msg:"Registration Successful",status:true,user}).status(200)
 }
 catch(ex){
    next(ex)
 }
}

module.exports.login = async (req,res,next)=>{
    try{
       const {username,pwd} = req.body
      //  console.log(req.body)
       const user = await User.findOne({username})
       if(!user){
        // console.log("User doesn't exists")
        return res.json({msg:"Username doesn't exists",status:false}).status(500);
      }
      const isPWd = await bcrypt.compare(pwd,user.password)
       if(!isPWd){
        //  console.log("Wrong pwd or USer")
         return res.json({msg:"Incorrect Username or Password",status:false}).status(500);
       }
      //  console.log(user)
       delete user.password;
       return res.json({msg:"login Successful",status:true,user}).status(200)
    }
    catch(ex){
       next(ex)
    }
   }

   module.exports.sendmsg = async(req,res,next) =>{
      try{
    
      const {username,email,feedback} = req.body
      const user = await User.findOne({username})
      if(!user){
       // console.log("User doesn't exists")
       return res.json({msg:"Username doesn't exists",status:false}).status(500);
     }
     const data = Feedback.create({
      username,email,feedback
     })
     return res.json({msg:"Submitted Successfully",status:true,data}).status(200)
      }catch(ex){
         next(ex)
      }
   }

   module.exports.getuser = async(req,res,next) =>{
      try{
         const user = await User.find({role:"User"})
         if(user){
            return res.json({msg:"User details fetched",status:true,user}).status(200)
         }
         else{
            return res.json({msg:"No user in Database",status:false}).status(404)
         }
       
      }
      catch(ex){
         next(ex)
      }
   }

   module.exports.changepwd = async(req,res,next) =>{
      try{
          const {id,password} = req.body;
          const hashPwd = await bcrypt.hash(password,10);
          const user = await User.findByIdAndUpdate({_id:id},{password:hashPwd},{new:true})
          if(user){
            res.json({msg:"Password Updated Successfully",status:true,user}).status(200)
          }
          else{
            res.json({msg:"Internal error Occured"}).status(500)
          }
      }
      catch(err){
        next(ex)
      }
   }