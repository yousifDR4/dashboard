import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import errorSlice from "./error";
const store = configureStore({
  reducer: {
    user: userSlice,
    error: errorSlice.reducer,
  },
});
export default store;
