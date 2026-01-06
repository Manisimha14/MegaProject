import 'dotenv/config';

import ConnectDb from './db/connectionoddb.js';

// // connect db function
// async function ConnectDatabase(){
//     try {
//         const connextioninstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         console.log(connextioninstance);
//         console.log("db success")
        
        
//     } catch (error) {
//         console.log(error);
//         process.exit(1)
        
//     }



// }

// ConnectDatabase();
ConnectDb()