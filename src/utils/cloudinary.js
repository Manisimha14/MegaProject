import { v2 as cloudinary } from 'cloudinary';
import fs from "fs"

// it is a node js file system by which we can modify the files
// we need not to install as a package
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
});
const cloudnaryUpload= async (localfilepath)=>{
    try {

        if (!localfilepath) {
            return null
            // if there is no local file path on the local server return null
        }
        const fileUploading=await cloudinary.uploader.upload(localfilepath,{
            resource_type:auto
        })
        console.log("succesful upload");
        console.log(fileUploading.url);
        
        
        
    } catch (error) {
        // if the file uploading does not take place
        fs.unlinkSync(localfilepath)
        // so we remove the localy saved file
        // because it may be corrupt file and it would stack up in the local
        
    }
   
    



}