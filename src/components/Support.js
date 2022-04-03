import React from "react";
import { FaPhoneAlt, FaArrowRight, FaMicrochip } from 'react-icons/fa';
import { BiSupport } from 'react-icons/bi';

import supportImg from '../assets/support.jpg';

const Support = () => {
  return (
    <div className="w-full mt-24">
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img className="w-full h-full object-cover mix-blend-overlay" src={ supportImg } alt="/" />
      </div>

      <div className=" max-w-[1240px] mx-auto text-white relative">
        <div className="font-robo px-4 py-12">
          <h2 className="pt-8 text-slate-300 uppercase text-center">Support</h2>
          <h3 className="text-4xl font-bold py-6 text-center">Finding  the right team</h3>
          <p className="py-4 text-2xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ab dolore possimus. Quidem cumque est sit libero quisquam cum? Mollitia maiores similique blanditiis sit tempore animi est eveniet hic minima?</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 sm:pt-12 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="font-robo p-8">
              <p className="w-16 p-6 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
                <BiSupport className="text-center" />
              </p>
              <h3 className="font-bold text-xl my-6">Technical Support</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat laudantium, minus quibusdam nihil laboriosam voluptas suscipit sit cumque in eaque distinctio fuga nostrum assumenda illo. Assumenda at cumque eos.</p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 font-robo ">
              <p className="flex items-center text-indigo-600">Contact Us <FaArrowRight className="w-5 ml-2" /> </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="font-robo p-8">
              <p className="w-16 p-6 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
                <FaPhoneAlt className="text-center" />
              </p>
              <h3 className="font-bold text-xl my-6">Sales</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat laudantium, minus quibusdam nihil laboriosam voluptas suscipit sit cumque in eaque distinctio fuga nostrum assumenda illo. Assumenda at cumque eos.</p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 font-robo ">
              <p className="flex items-center text-indigo-600">Contact Us <FaArrowRight className="w-5 ml-2" /> </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-2xl">
            <div className="font-robo p-8">
              <p className="w-16 p-6 bg-indigo-600 text-white rounded-lg mt-[-4rem]">
                <FaMicrochip className="text-center" />
              </p>
              <h3 className="font-bold text-xl my-6">Media Inquiries</h3>
              <p className="text-gray-600 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat laudantium, minus quibusdam nihil laboriosam voluptas suscipit sit cumque in eaque distinctio fuga nostrum assumenda illo. Assumenda at cumque eos.</p>
            </div>
            <div className="bg-slate-100 pl-8 py-4 font-robo ">
              <p className="flex items-center text-indigo-600">Contact Us <FaArrowRight className="w-5 ml-2" /> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;