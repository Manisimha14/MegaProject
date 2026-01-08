import express from "express";
import cors from "cors";
import CookieParser from "cookieparser";


const app= express()
app.use(cors({
    origin:process.env.CORS_PORT,
    credentials:true
}))
// it will set the orgin means the frontend
app.use(express.json({
    limit:"16kb"
}))
// app.use() is always used for middle ware configurations
// it limits the json file to 16kb
app.use(express.urlencoded({extended:true}))
// it is a typee of url encding
app.use(express.static("public"))
// for the public files
app.use(CookieParser())
export {app}
// we will import two packages naming cors and cookie parser
// cookies are nothing but small text files which contains the information about the previous sessions
// we can also configure them
// 

