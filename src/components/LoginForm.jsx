import {Link} from 'react-router-dom'
import OAuthButton from './OAuthButton'
const LoginForm = () => {
  
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className='w-full md:w-1/4 flex flex-col mt-16 text-white p-10 bg-black bg-opacity-80 rounded-md shadow-md'>
          <div className='flex self-center text-3xl font-bold py-4'>Sign In</div>
          <form className='flex flex-col self-center justify-center mb-4'>
            <input
              className="mb-5 px-10 py-2 w-full max-w-full text-base bg-black bg-opacity-80 rounded border border-white"
              type="email"
              placeholder="Email or Phone Number"
            />
            <input
              className="mb-5 px-10 py-2 w-full max-w-full text-base bg-black bg-opacity-80 rounded border border-white"
              type="password"
              placeholder="Password"
            />
            <button className="mb-5 px-4 py-2 w-full max-w-full text-base bg-red-600 hover:bg-red-700 text-white rounded border-none cursor-pointer align-middle" type="submit">Sign In</button>
          </form>
          <a className="flex self-center hover:underline mb-4" href="#">Forgot Password?</a>
          <div className='flex self-center mb-4'>
            <input className='mr-2 checked:bg-red-500 indeterminate:bg-gray-300' type="checkbox"/>
            <p>Remember Me</p>
          </div>
          <div className='flex self-center'>
            <p className='mr-4 hover:underline'>New to Mflix? <Link to={'/signup'}>Sign Up now!!</Link></p>
          </div>
          <div className='self-center mt-10 mb-10'> OR </div>
          <OAuthButton></OAuthButton>
        </div>
      </div>
    )
};

export default LoginForm;
