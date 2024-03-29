import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { store } from "./AppStore/index.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import MoviePlayBackData from "./LandingPageBackgroundImageContext/context3.js";
import { useState, useEffect } from "react";

function App() {
  useEffect(() => {
    setUser();
  }, []);

  const setUser = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const res = await axios.get(`${config.BASE_URL}/users/profile`, {
        headers: { Authorization: token },
      });
      dispatch(login(res.data.user));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
