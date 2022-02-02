import express from "express";
const app = express();
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT;

import UserModel from "./models/Users.js";

import cors from "cors";
app.use(cors());

mongoose.connect(process.env.UGLYMERN_DB_URI,{
    // poolSize:50,
    // wtimeout:2500,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

let db = mongoose.connection;
db.on("error",console.error.bind(console,"Connection Error"));
db.once("open",()=>console.log("Connected to MongoDB"));

app.use(express.json());

app.get("/getUsers",(req,res) => {
    UserModel.find({}, (err,result)=>{
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    })
});

app.post("/createUser",async (req,res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
})



app.listen(port,() => console.log(`Server Running on Localhost:${port}`));