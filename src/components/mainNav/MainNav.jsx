import React from "react";
import { VscIssues } from "react-icons/vsc";
import { MdOutlineDone } from "react-icons/md";
const MainNav = () => {
  return (
    <>
      <div className='flex rounded-t-md pt-3 pb-3 border-b-2 border-l-2 border-r-2 border-t-2 border-b-gray-100 bg-gray-100 justify-between'>
        <div className='ml-2 hidden sm:flex'>
          {/* icon -- number open  tick -- number closed */}
          <h2 className='flex items-center font-bold'>
            <VscIssues fontSize={25} style={{ padding: "2px" }} />
            600 Open
          </h2>
          <h2 className='flex items-center ml-3 text-gray-400 '>
            <MdOutlineDone fontSize={25} style={{ padding: "2px" }} />
            10,290 Closed
          </h2>
        </div>

        <div className='flex'>
          {/* some links */}
          <h2 className='text-gray-400 mx-4'>Author</h2>
          <h2 className='text-gray-400 mx-4'>Label</h2>
          <h2 className='text-gray-400 mx-4'>Projects</h2>
          <h2 className='text-gray-400 mx-4'>Milestones</h2>
          <h2 className='hidden sm:visible text-gray-400 mx-4'>Assignee</h2>
          <h2 className='hidden sm:visible text-gray-400 mx-4'>Sort</h2>
        </div>
      </div>
    </>
  );
};

export default MainNav;
