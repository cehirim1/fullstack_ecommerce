import { createSlice } from "@reduxjs/toolkit";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  balance: number;
  isActive: boolean;
  userRole: "seller" | "user";
}

const initialState: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  balance: 0,
  isActive: false,
  userRole: "user",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
