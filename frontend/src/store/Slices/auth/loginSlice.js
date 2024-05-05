import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Toast } from "../../../utils/Toast";
import { BASE_URL } from "../../../constant";
import { Navigate, useNavigate } from "react-router-dom";

const initialState = {
  user: null,
  isLoading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //login
    builder
      .addCase(userLogin.pending, (state, payload) => {
        state.isLoading = true;
        console.log("pending");
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        console.log("fulfilled");
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload;
        console.log("rejected");
      });
  },
});


export const userLogin = createAsyncThunk("user/fetch", async (userData, thunkAPI) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, userData);
    //Handle axios error
    if (response.status == 200) {
      Toast("success", response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      // console.log(response.data.data);
      console.log("response of login ===> ",response)
      return response.data.data;
    } 
      
  } catch (error) {
    // console.log("error", error);
    Toast("error", error.response.data.message)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});


const { actions, reducer } = loginSlice;
export default reducer;