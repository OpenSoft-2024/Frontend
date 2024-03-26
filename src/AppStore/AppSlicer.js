import { createSlice } from "@reduxjs/toolkit";
// import { fetchDataFromApi } from "../DataUtils/fetchData2";
const AppSlice = createSlice({
  name: "AppSlice",
  initialState: {
    rand: Math.floor(Math.random() * 10),
    url: {},
    genres: {},
  },
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getUrl, getGenres } = AppSlice.actions;
export default AppSlice.reducer;
