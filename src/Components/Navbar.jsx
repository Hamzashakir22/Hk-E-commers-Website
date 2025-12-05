import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBagShopping, faUser, faList } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    const [visible, setVisible] = useState(false)

  return (
    <>
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to='/'>
      <h1 className="w-36 text-6xl">HK.</h1>
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
      
      <NavLink to='/' className="flex flex-col items-center gap-1">
      <p>HOME</p>
      <hr  className="w-2/3 border-none h-[1.5px] bg-orange-600 hidden"/>
      </NavLink>

      <NavLink to='/collection' className="flex flex-col items-center gap-1">
      <p>COLLECTION</p>
      <hr  className="w-2/3 border-none h-[1.5px] bg-orange-600 hidden"/>
      </NavLink>

      <NavLink to='/about' className="flex flex-col items-center gap-1">
      <p>ABOUT</p>
      <hr  className="w-2/3 border-none h-[1.5px]  bg-orange-600 hidden"/>
      </NavLink>
      
      <NavLink to='/contact' className="flex flex-col items-center gap-1">
      <p>CONTACT</p>
      <hr  className="w-2/3 border-none h-[1.5px]  bg-orange-600 hidden"/>
      </NavLink>

      </ul>

      <div className="flex items-center gap-4 text-[14px]">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="hover:text-orange-600"/>

      <NavLink to='/cart' className="relative">
      <FontAwesomeIcon icon={faBagShopping} className=" hover:text-orange-600"/>
      <p className="absolute m-5 right-[-5px] bottom-[-5px] w-5 text-center leading-5 bg-orange-600 text-white aspect-square rounded-full text-[-2px]">6</p>
      </NavLink>

      <NavLink to='/login'>
      <FontAwesomeIcon icon={faUser} className="hover:text-orange-600"/>
      </NavLink>

      <FontAwesomeIcon onClick={()=> setVisible(true)} icon={faList} className="w-5 cursor-pointer sm:hidden hover:text-orange-600"/>
      </div>

      {/*  slide Bar For Mobile View  */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all  ${ visible ? 'w-full' : 'w-0'}`}>
      <div className="flex flex-col text-gray-600">
      <div onClick={()=>setVisible(false)} className=" text-center items-center gap-4 p-3 cursor-pointer text-2xl inline">
      .BACK
      <div className="flex flex-col text-center font-bold">
      <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border bg-black text-white m-2 rounded-2xl" to='/home'>HOME</NavLink>
      <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border  bg-black text-white m-2 rounded-2xl" to='/collection'>COLLECTION</NavLink>
      <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border  bg-black text-white m-2 rounded-2xl" to='/about'>ABOUT</NavLink>
      <NavLink onClick={()=> setVisible(false)} className="py-2 pl-6 border  bg-black text-white m-2 rounded-2xl" to='/contact'>CONTACT</NavLink>
      </div>
      </div>
      </div>
      </div>
      </div>
      </>
  );
};

export default Navbar;
