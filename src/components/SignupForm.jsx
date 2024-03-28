import { useState } from "react";
import axios from "axios";
import {redirect}  from 'react-router-dom'; 
import OAuthButton from './OAuthButton'
const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const history =useHistory();

  const handleSubmit = async () => {
    // console.log('kya!');
    // // e.preventDefault();
    // console.log("submit called")
    if (!name || !email || !password || !password2) {
      alert("Please fill up all mandatory fields.");
      return;
    }
    if(password != password2) {
      alert("passwords don't match")
      return;
    }
    // const orderUrl="http://localhost:5000/api/checkout/payment";
    // const res = await axios.post(orderUrl, { tokenId:1,amount: totalAmount*100 });
    // Submit the form
    try{
      console.log(name,email,password,password2);
      const registerUrl="http://localhost:8080/api/users/register";
      const res = await axios.post(registerUrl,{
        name: name,
        email: email,
        password: password,
        cpassword: password2
      })
      console.log("res: ",res.data);
      localStorage.setItem("token",res.data.token);
    }catch(err){
      //redirect to error page
      console.error(err.response.data);
    // Handle error (e.g., show error message)
    alert(err.response.data.password);
    }
  };
 
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className='w-full md:w-1/4 flex flex-col mt-16 mb-16 text-white p-10 bg-black bg-opacity-80 rounded-md shadow-md'>
          <div className='flex self-center text-3xl font-bold py-4 mb-4'>Sign Up</div>
          <form className='flex flex-col self-center justify-center mb-4'>
            <input
              className="mb-5 px-10 py-2 w-full max-w-full text-base bg-black bg-opacity-80 rounded border border-white"
              type="Name"
              placeholder="Name"
              required
              onChange={(e) =>{
                setName(e.target.value)
              } }
            />
            <input
              className="mb-5 px-10 py-2 w-full max-w-full text-base bg-black bg-opacity-80 rounded border border-white"
              type="email"
              placeholder="Email Id"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              className="mb-5 px-10 py-2 w-full max-w-full text-base bg-black bg-opacity-80 rounded border border-white"
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              className="mb-5 px-10 py-2 w-full max-w-full text-base bg-black bg-opacity-80 rounded border border-white"
              type="password"
              placeholder="Confirm Password"
              required
              onChange={(e) => {
                setPassword2(e.target.value);
              }}
            />
            <button className="mb-5 px-4 py-2 w-full max-w-full text-base bg-red-600 hover:bg-red-700 text-white rounded border-none cursor-pointer align-middle" type="button"
            onClick={() => {
              handleSubmit()
            }}>Sign Up</button>

            <div className='self-center m mb-10'> OR </div>
              <OAuthButton></OAuthButton>
          </form>
        </div>
      </div>
    )
};

export default SignupForm;