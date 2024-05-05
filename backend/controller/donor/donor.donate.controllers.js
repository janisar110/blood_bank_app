import DonorDonate from "../../models/donor/donor.donate.models.js";
import DonorUser from "../../models/donor/donor.user.models.js";

//donateNow
export const donorDonateNow = async (req, res) => {
  try {
    const { fullname, phone_no, blood_group, email, no_of_units, any_disease } =
      req.body;

    //field missing eror
    if (
      !fullname ||
      !email ||
      !phone_no ||
      !blood_group ||
      !no_of_units ||
      !any_disease
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
      no_of_units,
      any_disease,
    };

    const donationRequest = await DonorDonate.create(obj);
    if (donationRequest) {
      return res.status(200).json({
        message: "Donation requested successfully!",
        data: {
          _id: donationRequest._id,
          fullname: donationRequest.fullname,
          phone_no: donationRequest.phone_no,
          email: donationRequest.email,
          blood_group: donationRequest.blood_group,
          no_of_units: donationRequest.no_of_units,
          any_disease: donationRequest.any_disease
        },
      });
    }
  } catch (error) {
    console.log("Error in donorDonateNow controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

//get Donors list
export const getDonors = async (req, res) => {
  try {
    
    const getDonorsList = await DonorUser.find().select("-password");

    if(getDonorsList){
      return res.status(200).json({
        message: "Donors list shown",
        data: getDonorsList
      })
    }
    
  } catch (error) {
    console.log("Error in getDonors controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};


//get Donations list
export const getDonations = async (req, res) => {
  try {
    
    const getDonationsList = await DonorDonate.find();

    if(getDonationsList){
      return res.status(200).json({
        message: "Donations list shown",
        data: getDonationsList
      })
    }
    
  } catch (error) {
    console.log("Error in getDonations controller", error.message);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};