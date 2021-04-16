import React from 'react';

const Dropdown = () => {
    //const dropdownRef= useRef(null);
    //const[isActive, setIsActive]= useState(dropdownRef, false);
    
    //const onClick = () => setIsActive(!isActive);

    /*if(isActive){
        return(
      <div className="self-center max-w-sm items-center bg-white rounded shadow visible">
        <nav ref={dropdownRef} className={`${isActive ? "visible" : "hidden"}`}>
            <ul>
                <li className="text-gray-500 transition duration 200 cursor-pointer"> Wallpaper </li>
                <li className="text-gray-500 transition cursor-pointer"> Nature </li>
                <li className="text-gray-500 transition cursor-pointer"> Flowers </li>
                <li className="text-gray-500 transition cursor-pointer"> Fashion </li>
                <li className="text-gray-500 transition cursor-pointer"> Computer </li>        
            </ul>
        </nav>
      </div>
      );
    }
    if(!isActive){
        return null;
    }*/
    
    return (
        <div>
            <h1 className="text-center p-4 text-gray-700 font-medium text-lg transition duration-200 ease-in transform hover:-translate-y-1 hover:scale-105 cursor-pointer"> Categories </h1>
        </div>
    )
}

export default Dropdown;
