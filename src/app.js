import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


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
app.use(cookieParser())

// we will import two packages naming cors and cookie parser
// cookies are nothing but small text files which contains the information about the previous sessions
// we can also configure them
// ! we will import the rotes after the middle ware
import userRouter from "./routes/user.routes.js";
app.use("/users",userRouter)
// when we type /users we give them the handle to userRouter
// https:localhost:8000/users/register
// here after the users is typed it will atomically go the userRouter
// this is used to not clumsum
export {app}