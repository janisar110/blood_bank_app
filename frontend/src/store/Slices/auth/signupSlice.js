import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../../constant";
import { Toast } from "../../../utils/Toast";
import {useNavigate} from "react-router-dom"
const initialState = {
  user: null,
  isLoading: false,
  error: false,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //signup
    builder
      .addCase(userSignup.pending, (state, payload) => {
        state.isLoading = true;
        console.log("pending");
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        // navigate('/login')
        console.log("fulfilled");
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.user = null;
        state.error = action.payload
        console.log("rejected");
      });
  },
});

export const userSignup = createAsyncThunk("user/signup", async (userData, thunkAPI) => {
  try {
   const response = await axios.post(`${BASE_URL}/auth/signup`, userData);
   //Handle axios error
   console.log(response.data.data)
   if (response.status == 200) {
    Toast("success",response.data.message);
    localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", JSON.stringify(response.data.token));
     return response.data.data;
    }
  } catch (error) {
    console.log("error", error);
    Toast("error", error.response.data.message)
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});


const { actions, reducer } = signupSlice;
export default reducer;
