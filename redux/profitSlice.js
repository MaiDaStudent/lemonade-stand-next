import { createSlice } from "@reduxjs/toolkit";

const profitSlice = createSlice({
  name: "profit",
  initialState: 0,
  reducers: {
    sellLemonade: (state) => state + 5,
    buyLemons: (state) => state - 2,
  },
});

export const { sellLemonade, buyLemons } = profitSlice.actions;
export default profitSlice.reducer;