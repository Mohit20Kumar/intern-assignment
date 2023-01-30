import React from "react";

import { VscRepo } from "react-icons/vsc";
import { BsBell } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { TbGitFork } from "react-icons/tb";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <>
      <div className=' sm:flex items-center justify-between p-4 '>
        {/* facebook/react */}
        <div className='flex text-center items-center'>
          <VscRepo className='text-xl' />
          <a
            href='/'
            class='text-lg pl-2 font-medium text-blue-600 dark:text-blue-500 hover:underline'>
            facebook
          </a>
          /
          <a
            href='/'
            class='text-lg font-bold text text-blue-600 dark:text-blue-500 hover:underline'>
            react
          </a>
          <span className='rounded-lg mx-3 text-[0.6rem] text-gray-600 border-gray-600 border-2 p-1'>
            Public
          </span>
        </div>
        {/* noti star fork */}
        <div className='invisible sm:visible flex'>
          <button className='flex mx-1 items-center rounded-md font-semibold text-sm border-2 px-2'>
            <BsBell /> <span className='pl-1'>Notifications</span>
          </button>

          <button className='flex mx-1 items-center rounded-md font-semibold text-sm px-2 border-2'>
            <AiOutlineStar /> <span className='pl-1 pr-1'>Star</span>{" "}
            <span className='pl-1 border-l-2 font-bold'>175k</span>
          </button>

          <button className='flex mx-1 items-center rounded-md font-semibold text-sm px-2 border-2'>
            <TbGitFork /> <span className='pl-1 pr-1'>Fork</span>{" "}
            <span className='pl-1 border-l-2 font-bold'>35.3k</span>
          </button>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
