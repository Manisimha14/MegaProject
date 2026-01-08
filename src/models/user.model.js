import mongoose from "mongoose";
import  bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const UserSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true,
            index:true
            // ! this is resource heavy task but useful for ndexing
        },
        email:{
            type:String,
            required:true,
        
            unique:true,
            
        },
        fullname:{
            type:String,
            required:true,
        
            unique:true,
            
        },
        password:{
            type:String,
            required:[true,"Password is required"],
        
            
            
        },
        watchhistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video"
            }
        ],
        refreshtokens:{
            type:String
        }

  },{timestamps:true}

)
// we need two packages for password hashing and web tokens
// they are json web token and bcryt
// also for reducing backend logic we will install the package mongo db aggregrate
// it provides inbuilt functanalities like match and  analyse the data
// ! Encryting the password before it is saving in the data base
// the mongoose provides the hooks which allows like running some code or
// run methods before saving it into data base or immediatly after saving
// or update one or delete one

UserSchema.pre("save",async function hashingpassword(next){
    // here we should not use async function because this is not defined
    // as the pre is a middle ware we should use next()

    // this.password=await bcrypt.hash(this.password,10)
    // here we should provide what should be hashed and how many rounds
    // this will run everytime the data is saved even if the avatar is updated
    // but this need to be run if the password is changed
    if(this.password.isModified("password")){
        this.password=await bcrypt.hash(this.password,10)
        next()
        
    }else{
        return next()
    }
   

})
// we will write a helper function to check the encryted password is same as the given password
// as the schema already provides some in built functions if we need to add a new method we can do
UserSchema.methods.isCorrect=async function(password){
    return await bcrypt.compare(password,this.password);
}
// here it takes two parameters orginal user given password and encryted password
// now we will use the access token and refresh token
// we will generate two methods for generating access token
UserSchema.methods.generateAccessToken= async function(){
    jwt.sign({
        _id:this._id,
        email:this.email,
        username:this.username,
        fullname:this.fullname




    },process.env.ACCESS_TOKEN_SECRET,{
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    })
}
UserSchema.methods.generateRefreshToken= async function(){
    jwt.sign({
        _id:this._id,
    },process.env.REFRESH_TOKEN_SECRET,{
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    })
}


export const User=mongoose.model("User",UserSchema)