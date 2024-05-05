import mongoose from "mongoose";

const DonorDonateSchema = new mongoose.Schema({
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
    no_of_units:{
        type:String,
        required:true
    },
    any_disease:{
        type:String,
        required:true,
      }
},{
    timestamps: true
})


const DonorDonate = mongoose.model("DonorDonate",DonorDonateSchema);

export default DonorDonate