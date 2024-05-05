import mongoose from "mongoose";

const PatientBloodNeedSchema = new mongoose.Schema({
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
    needed_blood_group:{
        type:String,
        required:true
    },
    no_of_units:{
        type:String,
        required:true
      },
    reason:{
        type:String,
        required:true
      }
},{
    timestamps: true
})


const PatientBloodNeed = mongoose.model("PatientBloodNeed",PatientBloodNeedSchema);

export default PatientBloodNeed