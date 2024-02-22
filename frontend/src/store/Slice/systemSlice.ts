import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISystem {
  mode: "light" | "dark";
}

const initialState: ISystem = {
  mode: "dark",
};

export const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    themeSwitch: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
    },
    resetSystem: () => initialState,
  },
});
