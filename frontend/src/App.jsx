import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import CMLogin from "./components/LoginForms/CMLogin";
import AdminLogin from "./pages/Admin";
import DonorLogin from "./pages/Donor";
import PatientLogin from "./pages/Patient";
import PatientRegistration from "./pages/Patient/PatientRegistration";
import DonorRegistration from "./pages/Donor/DonorRegistration";
import AdminDashboard from "./pages/Admin/Dashboard";
import DonorDashboard from "./pages/Donor/Dashboard";
import PatientDashboard from "./pages/Patient/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/donor/login" element={<DonorLogin />} />
        <Route path="/patient/login" element={<PatientLogin />} />

        <Route path="/donor/registration" element={<DonorRegistration />} />
        <Route path="/patient/registration" element={<PatientRegistration />} />

        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/donor/dashboard" element={<DonorDashboard />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
      </Routes>

      <div>
        <Toaster position="top-right" reverseOrder={true} />
      </div>
    </>
  );
}

export default App;
