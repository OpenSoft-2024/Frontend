import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import HeroSection from './components/herosection.jsx'
import Plans from './components/AddToFavourite.jsx/plans.jsx'
import AddToFavourite from './components/AddToFavourite.jsx/addToFavourite.jsx'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import MySpace from './components/AddToFavourite.jsx/mySpace.jsx'
import SearchPage from "./components/searchPage.jsx"
// import MoviePlayback from './MoviePlayback.jsx/MoviePlayback.jsx'
import Success from './components/sucess.jsx'
import Failure from './components/failure.jsx'


// Admin Imports 
// import Home from "./admin/Home.jsx";
// import Banners from './components/admin_dash.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HeroSection/>} />
      <Route path='/signup' element={<SignupPage/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='plans' element={<Plans/>} />
      <Route path='AddToFavourite' element={<AddToFavourite />}/>
      <Route path='/profile' element={<MySpace />}/>
      <Route path="searchPage"  element={<SearchPage/>}/>
      {/* <Route path="/moviePlayback"  element={<MoviePlayback/>}/> */}
      {/* <Route path="/admin"  element={<Banners/>}/> */}
      <Route path="/success/:amt"  element={<Success/>}/>
      <Route path="/failure"  element={<Failure/>}/>

      {/* Admin Routes */}

      {/* <Route path="/admin"  element={<Home/>}/> */}
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
