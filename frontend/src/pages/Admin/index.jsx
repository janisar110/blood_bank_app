import React from "react";
import CMLogin from "../../components/LoginForms/CMLogin";
import CMHeader from "../../components/Headers/CMHeader";
import CMFooter from "../../components/Footers/CMFooter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adminLogin } from "../../store/Slices/adminAuth/adminLoginSlice";

const AdminLogin = () => {
  const selector = useSelector((state) => state.adminLoginReducer);
  return (
    <>
      <CMHeader />
      <CMLogin title={"admin"} dispatchFunction={adminLogin} selector={selector} />
      <CMFooter />
    </>
  );
};

export default AdminLogin;
