import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slice/userSlice";
import { cartSlice } from "./Slice/cartSlice";
import { systemSlice } from "./Slice/systemSlice";

export const store = configureStore({
  reducer: {
    [systemSlice.name]: systemSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
