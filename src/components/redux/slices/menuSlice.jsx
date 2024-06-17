import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  pizzas: [],
};

export const getPizzas = createAsyncThunk("menu/getPizzas", async () => {
  const response = await fetch(
    "https://react-fast-pizza-api.onrender.com/api/menu"
  );
  if (!response.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await response.json();
  return data.data;
});

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
    });
  },
});

export default menuSlice.reducer;
