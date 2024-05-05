import PatientBloodNeed from "../../models/patient/patient.bloodneed.models.js";
import PatientUser from "../../models/patient/patient.user.models.js";


//blood need 
export const patientBloodNeed = async (req, res) => {
  try {
    const {
      fullname,
      phone_no,
      blood_group,
      email,
      needed_blood_group,
      no_of_units,
      reason,
    } = req.body;

    //field missing eror
    if (
      !fullname ||
      !email ||
      !phone_no ||
      !blood_group ||
      !no_of_units ||
      !needed_blood_group ||
      !reason
    ) {
      res.status(400).json({
        message: "Required field are missing",
      });
      return;
    }

    const obj = {
      fullname,
      phone_no,
      email,
      blood_group,
      needed_blood_group,
      no_of_units,
      reason,
    };

    const BloodNeedRequest = await PatientBloodNeed.create(obj);
    if (BloodNeedRequest) {
      return res.status(200).json({
        message: "Blood need requested successfully!",
        data: {
          _id: BloodNeedRequest._id,
          fullname: BloodNeedRequest.fullname,
          phone_no: BloodNeedRequest.phone_no,
          email: BloodNeedRequest.email,
          blood_group: BloodNeedRequest.blood_group,
          needed_blood_group: BloodNeedRequest.needed_blood_group,
          no_of_units: BloodNeedRequest.no_of_units,
          reason: BloodNeedRequest.reason,
        },
      });
    }
  } catch (error) {
    console.log("Error in patientBloodNeed controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


//get Patient list
export const getPatients = async (req, res) => {
  try {
    
    const getPatientList = await PatientUser.find().select("-password");

    if(getPatientList){
      return res.status(200).json({
        message: "Patient list shown",
        data: getPatientList
      })
    }
    
  } catch (error) {
    console.log("Error in getPatient controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


//get bloodneed list
export const getBloodNeeds = async (req, res) => {
  try {
    
    const getBloodNeedList = await PatientUser.find();

    if(getBloodNeedList){
      return res.status(200).json({
        message: "Donations list shown",
        data: getBloodNeedList
      })
    }
    
  } catch (error) {
    console.log("Error in getBloodNeed controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};