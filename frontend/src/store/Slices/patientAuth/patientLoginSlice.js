import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { Toast } from "../../../utils/Toast";
import { BASE_URL } from "../../../constant";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const patientLoginSlice = createSlice({
  name: "patientLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder
      .addCase(patientLogin.pending, (state, payload) => {
        state.isLoading = true;
        console.log("pending");
      })
      .addCase(patientLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        console.log("fulfilled");
      })
      .addCase(patientLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
        console.log("rejected");
      });
  },
});


export const patientLogin = createAsyncThunk("patient/fetch", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/patientauth/login`, userData);
    //Handle axios error
    if (response.status == 200) {
      Toast("success", response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      // console.log(response.data.data);
      console.log("response of login ===> ", response)
      return response.data.data;
    } 
      
  } catch (error) {
    // console.log("error", error);
    Toast("error", error.response.data.message)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});


const { actions, reducer } = patientLoginSlice;
export default reducer;