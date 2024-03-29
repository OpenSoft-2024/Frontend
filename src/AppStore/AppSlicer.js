import { createSlice } from "@reduxjs/toolkit";
// import { fetchDataFromApi } from "../DataUtils/fetchData2";
const AppSlice = createSlice({
  name: "AppSlice",
  initialState: {
    rand: Math.floor(Math.random() * 4),
    isNavBarVisible: true,
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
    setIsNavBarVisible: (state, action) => {
      state.isNavBarVisible = action.payload;
    },
  },
});

export const { getUrl, getGenres, setIsNavBarVisible } = AppSlice.actions;
export default AppSlice.reducer;
