import React from "react";
import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { store } from "./AppStore/index.js";
import { Provider } from "react-redux";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import LocomotiveScroll from "locomotive-scroll";
 

// import AddToFavourite from './components/AddToFavourite.jsx/addToFavourite'
// import HeroSection from './components/herosection'
// import {Route ,Routes} from 'react-router-dom'
// import Plans from './components/AddToFavourite.jsx/plans'
// import AddToFavourite from './components/AddToFavourite.jsx/addToFavourite'
function App() {
   
  
   
  return (
    <>
      <Provider store={store}>
        {<NavBar></NavBar>}
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
