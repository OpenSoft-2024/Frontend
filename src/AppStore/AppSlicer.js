import { createSlice } from "@reduxjs/toolkit";
// import { fetchDataFromApi } from "../DataUtils/fetchData2";
const AppSlice = createSlice({
  name: "AppSlice",
  initialState: {
    rand: Math.floor(Math.random() * 4),
    isNavBarVisible: true,
    isFooterVisible: true,
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
    setIsFooterVisible: (state, action) => {
      state.isFooterVisible = action.payload;
    },
  },
});

export const { getUrl, getGenres,setIsNavBarVisible,setIsFooterVisible} = AppSlice.actions;
export default AppSlice.reducer;
