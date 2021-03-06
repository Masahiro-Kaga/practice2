import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    }
});

const UserModel = mongoose.model("UserModel",UserSchema);
export default UserModel;