<!-- Connection of Db  -->
<!-- first we will need to import env and configure them -->
import 'dotenv/config'
<!-- as we are storing db name in constants we also need to import  -->
import {DB_NAME} from "../constants.js"
async function ConnectDb(){
  try(){
    const mongodbconnection= await mongoose.connect('${process.env.MONGO_DB_URL}/${DB_NAME}')
    <!-- as it is a database connection -->
    <!-- for host port -->
     const port=await connectionofdatabase.connection.host
        console.log(port);
        console.log("success");

  }catch(error){
    console.log('MongoDbError:${error}')
        process.exit(1);

  }
}
export default ConnectDb
<!-- as we are exporting this function from db folder -->
<!-- import it into our main index.js -->