import bcrypt from "bcryptjs";
import jwtToken from "../../utils/generateToken.js";
import DonorUser from "../../models/donor/donor.user.models.js";





//signup controller
export const donorRegistration = async (req, res) => {
    try {
      const { fullname, phone_no, blood_group,  email, password, confirmPassword } = req.body;
  
      //field missing eror
      if (!fullname || !email || !phone_no || !blood_group ||!password || !confirmPassword) {
        res.status(400).json({
          message: "Required field are missing",
        });
        return;
      }
  
      //password confirmation error
      if (password !== confirmPassword) {
        res.status(400).json({
          message: "Password does not match!",
        });
        return;
      }
  
      //user already exist error
      const userExists = await DonorUser.findOne({ email });

      // console.log(userExists)
      if (userExists) {
        res.status(401).json({
          message: "Email already taken",
        });
        return;
      }
  
      const hashPassword = await bcrypt.hash(password, 10);
  
      const obj = {
        fullname,
        phone_no,
        email,
        blood_group,
        password: hashPassword,
      };
  
      const userData = await DonorUser.create(obj);
      //webTokenSetCookie
      const token =  jwtToken(userData._id, res);
  
      res.status(200).json({
        message: "Registered successfully!",
        data: {
          _id: userData._id,
          fullname: userData.fullname,
          phone_no:userData.phone_no,
          email: userData.email,
          blood_group:userData.blood_group
        },
        token,
      });
    } catch (error) {
      console.log("Error in donorSignup controller", error.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };
  
  //login controller
  export const donorLogin = async (req, res) => {
    try {
      const { email, password } = req.body;
  
      //field missing eror
      if (!email || !password) {
        res.status(400).json({
          message: "Required field are missing",
        });
        return;
      }
  
      //user not found error
      const userExists = await DonorUser.findOne({ email });
      if (!userExists) {
        return res.status(401).json({
          message: "User not found",
        });
      }
  
      //password check error
      const comparePassword = await bcrypt.compare(password, userExists.password);
      // console.log(comparePassword)
      if (!comparePassword) {
        res.status(400).json({
          message: "Invalid password",
        });
        return;
      }
      //webTokenSetCookie
      const token =  jwtToken(userExists._id, res);
  
      res.status(200).json({
        message: "Login successfully",
        data: {
          _id: userExists._id,
          fullname: userExists.fullname,
          phone_no:userExists.phone_no,
          email: userExists.email,
          blood_group:userExists.blood_group
        },
        token,
      });
    } catch (error) {
      console.log("Error in donorLogin controller", error.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };
  
  //logout controller
  export const donorLogout = async (req, res) => {
    try {
      res.cookie("JWT", "", {
        maxAge: 0,
      });
      res.status(200).json({
        message: "Logout successfully",
      });
    } catch (error) {
      console.log("Error in donorLogout controller", error.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };