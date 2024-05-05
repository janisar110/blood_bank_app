import { configureStore } from "@reduxjs/toolkit";
import signupReducer from "./Slices/auth/signupSlice"
import loginReducer from "./Slices/auth/loginSlice"
import adminLoginReducer from "./Slices/adminAuth/adminLoginSlice"
import donorLoginReducer from "./Slices/donorAuth/donorLoginSlice"
import patientLoginReducer from "./Slices/patientAuth/patientLoginSlice"
import donorRegistrationReducer from './Slices/donorAuth/donorRegistrationSlice'
import patientRegistrationReducer from './Slices/patientAuth/patientLoginSlice'


const store = configureStore({
  reducer: {
    signupReducer,
    donorRegistrationReducer,
    patientRegistrationReducer,
    adminLoginReducer,
    donorLoginReducer,
    patientLoginReducer,
    loginReducer,
    
  },
});

export default store;