import React from 'react';
import gallery from './output_gallery.png';
import {FaFacebook,FaInstagramSquare,FaLinkedin} from 'react-icons/fa';

function Navigation() {
 return(
    <div className="max-w-full">
      <div className="flex flex-row bg-white items-center shadow justify-between overflow-hidden">
        <div className="flex flex-row ml-24">
          <img src={gallery} alt="Gallerx" className="w-16 h-16 ml-4 text-red-700"/>
          <h1 className="font-medium text-2xl p-4 ml-1 text-gray-800 transition duration-200 ease-out transform hover:translate-x-1 hover:scale-105 hover:text-gray-500 cursor-pointer  ">Gallerx.io</h1>
        </div>

        <div className="flex flex-row float-right">
          <div className="float-right mr-24 space-x-4">
            <a href="https://www.facebook.com"><FaFacebook size={32} className="inline-block hover:text-blue-600 transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/></a>
            <a href="https://www.instagram.com"><FaInstagramSquare size={32} className="inline-block hover:text-pink-700 transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/></a>
            <a href="https://www.linkedin.com"><FaLinkedin size={32} className="inline-block hover:text-blue-800 transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/></a>
          </div>
        </div>
      </div>
    </div>
 );
}

export default Navigation;