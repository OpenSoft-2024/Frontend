import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './media.css'
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import HeroSection from './components/herosection.jsx'
import Plans from './components/AddToFavourite.jsx/plans.jsx'
import AddToFavourite from './components/AddToFavourite.jsx/addToFavourite.jsx'
import SearchPage from "./components/searchPage.jsx"
import { useEffect } from 'react'
import MoviePlayback from './MoviePlayback/MoviePlayback.jsx'
 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<HeroSection/>} />
      <Route path='plans' element={<Plans/>} />
      <Route path='AddToFavourite' element={<AddToFavourite />}/>
      <Route path="searchPage"  element={<SearchPage/>}/>
      <Route path=":mediaType/:id" element={<MoviePlayback/>}/> 
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
