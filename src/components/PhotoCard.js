import React from 'react';
import { AiOutlineLike, AiOutlineComment, AiOutlineEye } from "react-icons/ai";

const PhotoCard = ({image}) => {
    return(

            <div className="max-w-sm rounded overflow-hidden shadow mb-4"> 
              <div className="overflow-hidden rounded">
                <img src={image.webformatURL} alt="random" className="w-full cursor-pointer"/>
              </div>

              <div className="px-2 py-4">
                  <ul>
                    <li className="inline-block mx-6">
                      <AiOutlineLike size={32} className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/>
                      <strong className="text-center px-1">{image.likes}</strong>
                    </li>
                    <li className="inline-block mx-6">
                      <AiOutlineComment size={32} className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/>
                      <strong className="self-center px-1">{image.comments}</strong>
                    </li>
                    <li className="inline-block mx-6">
                      <AiOutlineEye size={32} className="transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-105 cursor-pointer"/>
                      <strong className="self-center px-1">{image.views}</strong>
                    </li>
                  </ul>
                </div>
            </div>
        
    );
}

export default PhotoCard
