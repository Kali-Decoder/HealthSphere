const mongoose=require('mongoose');
const bcrypt = require("bcryptjs");

const userSchema=new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now()
    },
});
// //  hashing password this is mongoose middleware
// userSchema.pre("save",async function(next){
       
//     if(this.isModified('password'))
//     {  
//        this.password=await bcrypt.hash(this.password,12);
//        this.cpassword=await bcrypt.hash(this.cpassword,12);
       
//     }
//     next();
// })
// // adding messages 
// userSchema.methods.addMessage=async function(msg)
// {
//     try {

//         this.messages=this.messages.concat({message:msg});
//         await this.save();
//         return this.messages;

//     } catch (error) {
//         console.log("Error from the add message shema ", error);
//     }
// }

// // we are generating tokens 
// userSchema.methods.generateAuthToken=async function()
// {
//     try {
//         let token= await jwt.sign({_id:this._id},process.env.SECRET_KEY);
//         this.tokens=this.tokens.concat({token:token});
//         await this.save();
//         return token;
//     } catch (error) {
//         console.log(error);
//     }
// }

const User=mongoose.model('USER',userSchema);
module.exports=User;