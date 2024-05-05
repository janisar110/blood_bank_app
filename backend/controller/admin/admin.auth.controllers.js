import bcrypt from "bcryptjs";
import jwtToken from "../../utils/generateToken.js";
import AdminUser from "../../models/admin/admin.user.models.js";



  
  //login controller
  export const adminLogin = async (req, res) => {
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
      const userExists = await AdminUser.findOne({ email });
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
      //webTokenSet
      const token =  jwtToken(userExists._id, res);
  
      res.status(200).json({
        message: "Login successfully",
        data: {
          _id: userExists._id,
          fullname: userExists.fullname,
          email: userExists.email,
        },
        token,
      });
    } catch (error) {
      console.log("Error in adminLogin controller", error.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };
  
  //logout controller
  export const adminLogout = async (req, res) => {
    try {
      res.cookie("JWT", "", {
        maxAge: 0,
      });
      res.status(200).json({
        message: "Logout successfully",
      });
    } catch (error) {
      console.log("Error in adminLogout controller", error.message);
      res.status(500).json({
        message: "Internal server error",
      });
    }
  };