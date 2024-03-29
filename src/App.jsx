import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { store } from "./AppStore/index.js";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import MoviePlayBackData from "./LandingPageBackgroundImageContext/context3.js"
import { useState } from "react";
 
function App() {
   
  let [movieData,setMoviedata]= useState()
   
  return (
    <>
      <Provider store={store}>
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              pauseOnFocusLoss
              pauseOnHover
              theme="dark"
          />
        {<NavBar></NavBar>}
      <MoviePlayBackData.Provider value={{movieData,setMoviedata}}> 
        <Outlet></Outlet>
        </MoviePlayBackData.Provider>
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
