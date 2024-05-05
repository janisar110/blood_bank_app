 import mongoose from "mongoose";

const otpSchema = new mongoose.Schema({
    id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true   
    },
    otpCode:{
        type: String,
        required:true
    }
},{
    timestamps: true
})


const Otp = mongoose.model("Otp", otpSchema);

export default Otp