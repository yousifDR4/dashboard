import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  restaurants: [],
  selected: 0,
};
const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: {
    setResturants: (state, action) => {
      state.restaurants = action.payload;
    },
    clearResturants: (state) => {
      state.restaurants = [];
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    clearSelected: (state) => {
      state.selected = 0;
    },
  },
});
export const { setResturants, clearResturants, clearSelected, setSelected } =
  restaurantsSlice.actions;
export default restaurantsSlice.reducer;
