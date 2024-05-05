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

const donorLoginSlice = createSlice({
  name: "donorLogin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder
      .addCase(donorLogin.pending, (state, payload) => {
        state.isLoading = true;
        console.log("pending");
      })
      .addCase(donorLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        console.log("fulfilled");
      })
      .addCase(donorLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
        console.log("rejected");
      });
  },
});


export const donorLogin = createAsyncThunk("donor/fetch", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/donorauth/login`, userData);
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


const { actions, reducer } = donorLoginSlice;
export default reducer;