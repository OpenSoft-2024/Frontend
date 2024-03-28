import NavBar from "./components/navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer";
import { store } from "./AppStore/index.js";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';

 
function App() {
   
  
   
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
        <Outlet></Outlet>
        <Footer></Footer>
      </Provider>
    </>
  );
}

export default App;
