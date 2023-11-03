import { useState } from 'react';
import logo from './assets/Logo.png';
import right from './assets/right.svg';
import google from './assets/Googles.png';
import Apple from './assets/Apples.png';

import './App.css';
import './index.css';

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='flex justify-between container mx-auto'>
    <div className='mt-10 ml-20 mr-10' >
     <img src={logo} alt="Logo" className="w-193 mb-10"  />
   
     <text className='font-family-Poppins mb-4 text-3xl font-semibold' alt="first">Get Started Now</text>
     <p></p>
     <text className='font-family-Poppins my-4 font-normal text-sm' alt="second">Enter your credentials to access your account</text>
     <div className='flex gap-5 my-4'>
      <button className='border border-gray-300 rounded-2xl w-60 h-[47px] flex justify-center items-center'>
        <img src={google} alt="Google" />
        <text className='text-sm font-medium pl-2'>Login with Google</text>
        </button>
        <button className='border border-gray-300 rounded-2xl w-60 h-[47px] flex justify-center items-center'>
        <img src={Apple} alt="Apple" />
        <text className='text-sm font-medium pl-2'>Login with Apple</text>
        </button>

     </div>
     <div className="flex items-center my-4">
      <div className="flex-1 h-px bg-gray-300"></div>
      <div className="mx-1 text-sm ">or</div>
      <div className="flex-1 h-px bg-gray-300"></div>
    </div>
    <div >
    <text className="my-4 text-sm font-semibold">Name</text>
    <p></p>
    <input
  className="border border-gray-300 rounded-2xl px-9 py-2 focus:outline-none focus:ring focus:border-blue-500 w-full my-4 h-12"
  type="text"
  placeholder="Mathew Solomen"
/>
    </div>
    <div >
    <text className="my-4 text-sm font-semibold">Email</text>
    <p></p>
    <input
  className="border border-gray-300 rounded-2xl px-9 py-2 focus:outline-none focus:ring focus:border-blue-500 w-full my-4 h-12"
  type="text"
  placeholder="Matt11@gmail.com"
/>
    </div>
    <div >
    <text className="my-4 text-sm font-semibold">Password</text>
    <p></p>
    <input
  className="border border-gray-300 rounded-2xl px-9 py-2 focus:outline-none focus:ring focus:border-blue-500 w-full my-4 h-12"
  type="password"
  placeholder="*********"
  />
    </div> 
    <div className='flex'>
    <input
    type="checkbox"
    className="h-5 w-5 my-3 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
  />
  <label htmlFor="checkbox" className="ml-2 block text-gray-800 my-2 font-semibold text-sm">
  I agree to the
  </label> 
  <label htmlFor="checkbox" className="ml-2 block text-gray-800 my-2 font-semibold text-sm underline">
  Terms & Privacy
  </label> 
  </div>  
  <button className='bg-blue-900 w-full rounded-2xl h-[47px] my-2'>login</button> 
<text className='my-4 font-semibold text-sm'>Don’t have an account?</text>
<button className='my-4 font-semibold text-sm text-blue-400 underline pl-2' onClick={()=>{alert("hey")}}> Sign up</button>
    </div>

    <div className='flex justify-center items-center'>
    <img src={right} alt="right" className="h-[90%]"  />
    </div>
    </div>
    
  );
}

export default App;
