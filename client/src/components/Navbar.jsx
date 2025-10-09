import React from 'react'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
   <div className='flex justify-between bg-[var(--primary)] text-white p-5 text-2xl'>
     <div>Job Portal</div>
     <div className='flex items-center space-x-4 '>
      <Link to={"/jobs"}>Jobs</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
     </div>
   </div>
  )
}

export default Navbar;
