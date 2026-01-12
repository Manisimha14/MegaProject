import 'dotenv/config'
// this has to be done compulsorly or can be also imported in node module as 
// experimental feature
// if environmental changes is changed then you should restart the complete server
import { DB_NAME } from "../constants.js"
import mongoose from 'mongoose'
async function ConnectDb(){
    try {
        const connectionofdatabase= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        const port= connectionofdatabase.connection.host
        console.log(port);
        console.log("success");
        
        
    } catch (error) {
        console.log(`MongoDbError: ${error}`)
        process.exit(1);
        
        
    }
   
}
export default ConnectDb