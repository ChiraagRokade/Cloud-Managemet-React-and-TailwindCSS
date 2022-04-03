import React from "react";
import { FaDatabase, FaCloudUploadAlt, FaServer, FaPaperPlane } from "react-icons/fa";

import bgImg from '../assets/cyber-bg.png';

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 m-auto">
        <div className="font-robo flex flex-col justify-center 2xl:items-start w-full px-2 py-2">
          <p className="text-2xl">Unique Sequencing & Production</p>
          <h1 className="py-3 text-5xl md:text-7xl font-bold">Cloud Management</h1>
          <p className="text-2xl">This is our Tech brand.</p>
          <button className="bg-blue-700 text-white rounded-full py-3 px-6 sm:w-[60%] my-4">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={ bgImg } alt="/" />
        </div>
        <div className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[-5%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl">
          <p>Data Services</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-4 text-indigo-700 items-center" ><FaCloudUploadAlt className="mr-3" /> App Security</p>
            <p className="flex px-4 py-4 text-indigo-700 items-center"><FaDatabase className="mr-3" /> Dashboard Design</p>
            <p className="flex px-4 py-4 text-indigo-700 items-center"><FaServer className="mr-3" /> Cloud Data</p>
            <p className="flex px-4 py-4 text-indigo-700 items-center"><FaPaperPlane className="mr-3" /> API's</p>
          </div>
        </div>
      </div >
    </div >
  );
}

export default Hero;