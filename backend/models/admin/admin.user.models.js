import mongoose from "mongoose";

const adminUserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    is_verified:{
        type:Boolean,
        required:true,
        default:false
      },
},{
    timestamps: true
})


const AdminUser = mongoose.model("AdminUser",adminUserSchema);

export default AdminUser