import React from "react";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div className='p-2 flex items-center justify-around'>
      <div className='flex flex-col sm:flex-row items-center justify-evenly'>
        <h2 className='ml-[3rem] text-blue-500'>Terms</h2>
        <h2 className='ml-[3rem] text-blue-500'>Privacy</h2>
        <h2 className='ml-[3rem] text-blue-500'>Security</h2>
        <h2 className='ml-[3rem] text-blue-500'>Status</h2>
        <h2 className='ml-[3rem] sm:mr-[3rem] text-blue-500'>Docs</h2>
      </div>
      <BsGithub />
      <div className='flex flex-col sm:flex-row items-center justify-evenly'>
        <h2 className='ml-[3rem] text-blue-500'>Contact Github</h2>
        <h2 className='ml-[3rem] text-blue-500'>Pricing</h2>
        <h2 className='ml-[3rem] text-blue-500'>API</h2>
        <h2 className='ml-[3rem] text-blue-500'>Training</h2>
        <h2 className='ml-[3rem] text-blue-500'>Blog</h2>
        <h2 className='ml-[3rem] sm:mr-[3rem] text-blue-500'>About</h2>
      </div>
    </div>
  );
};

export default Footer;
