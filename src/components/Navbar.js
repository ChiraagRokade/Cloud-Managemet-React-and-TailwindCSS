import React, { useState } from "react";
import { FaBars, FaRegWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [ nav, setNav ] = useState( false );
  const handleClick = () => setNav( !nav );

  return (
    <div className="w-screen h-20 bg-zinc-200 fixed drop-shadow-lg z-10">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold font-robo mr-4 sm:text-4xl">Brand</h1>
          <ul className="hidden md:flex">
            <li className="pr-4 font-robo">Home</li>
            <li className="pr-4 font-robo">About</li>
            <li className="pr-4 font-robo">Support</li>
            <li className="pr-4 font-robo">Platforms</li>
            <li className="pr-4 font-robo">Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="font-robo bg-transparent border-2 border-blue-700 mr-4 px-5 py-3 rounded-full">Sign In</button>
          <button className="font-robo bg-blue-700 text-white mr-4 px-5 py-3 rounded-full">Sign Up</button>
        </div>
        <div className="md:hidden mr-4" onClick={ handleClick }>
          { !nav ? <FaBars size={ 31 } /> : <FaRegWindowClose size={ 31 } /> }
        </div>
      </div>
      <ul className={ !nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8' }>
        <li className="font-robo py-3 border-b-2 border-zinc-300 w-full">Home</li>
        <li className="font-robo py-3 border-b-2 border-zinc-300 w-full">About</li>
        <li className="font-robo py-3 border-b-2 border-zinc-300 w-full">Support</li>
        <li className="font-robo py-3 border-b-2 border-zinc-300 w-full">Platforms</li>
        <li className="font-robo py-3 border-b-2 border-zinc-300 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="font-robo bg-transparent border-2 border-blue-700 mr-4 px-5 py-3 rounded-full mb-4">Sign In</button>
          <button className="font-robo bg-blue-700 text-white mr-4 px-5 py-3 rounded-full">Sign Up</button>
        </div>
      </ul>
    </div >
  );
}

export default Navbar;