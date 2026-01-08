import mongoose  from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
const videoschema= new mongoose.Schema(
    
    {
        videofile:{
            type:String,
            // cloudnary url
            required:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
            
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
           type:Number,
            default:0
            // to not get the random views
        }, 
        ispublished:{
            type:Boolean,
            default:true
        },




    }



,{timestamps:true})
videoschema.plugin(mongooseAggregatePaginate)
export const Video=mongoose.model("Video",videoschema)