import React,{useEffect} from 'react';
import GoogleLogo from '../assets/Images/google.svg';
import axios from 'axios'

const GoogleOAuthButton = () => {
  const handleclick = async ()=>{
    window.open("http://localhost:8080/auth/google","_self");
  }

  return (
    <div className="flex items-center justify-center">
      <button
        className="flex bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring focus:ring-red-400"
        onClick={() => {
          handleclick();
        }}
      >
        <img className="w-6 h-6 mr-2 fill-current" src={GoogleLogo}/>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleOAuthButton;
