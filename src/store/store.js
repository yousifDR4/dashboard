import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import errorSlice from "./error";
import restaurantsSlice from "./restaurantsSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    error: errorSlice.reducer,
    restaurants: restaurantsSlice,
  },
});
export default store;
