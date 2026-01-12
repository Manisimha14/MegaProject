import {asyncHandeler} from "../utils/asynchandeler.js"
const userregister=asyncHandeler(async(req,res)=>{
    res.status(200).json({
        message:"ok"
    })
})
export {userregister}