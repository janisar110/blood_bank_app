import mongoose from "mongoose";

const DonorUserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required:true
    },
    phone_no:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    blood_group:{
        type:String,
        required:true
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


const DonorUser = mongoose.model("DonorUser",DonorUserSchema);

export default DonorUser