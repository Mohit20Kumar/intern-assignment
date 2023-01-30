import React from "react";

import { VscIssues } from "react-icons/vsc";
import { BsCode } from "react-icons/bs";
import { BiBookOpen, BiGitPullRequest } from "react-icons/bi";
import { AiOutlinePlayCircle, AiOutlineProject } from "react-icons/ai";
// import { FiBookOpen } from "react-icons/fi";
import { HiOutlineShieldExclamation } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { Dropdown } from "flowbite-react";

const Navbar = () => {
  return (
    <div>
      <div class='border-b border-gray-200 dark:border-gray-300'>
        <ul class='flex flex-wrap -mb-px text-[0.6rem] font-medium text-center text-black dark:text-black'>
          <li class='mr-2'>
            <a
              href='/'
              class='inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <BsCode fontSize={25} style={{ padding: "2px" }} />
              Code
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='inline-flex p-4 items-center text-black border-b-2 font-bold border-red-600 rounded-t-lg active dark:text-red dark:border-red group'
              aria-current='page'>
              <VscIssues fontSize={25} style={{ padding: "2px" }} />
              Issues
              <span className='text-xs mx-1 rounded-md px-1 bg-gray-300'>
                625
              </span>
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='hidden sm:inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <BiGitPullRequest fontSize={25} style={{ padding: "2px" }} />
              Pull Requests
              <span className='text-xs mx-1 rounded-md px-1 bg-gray-300'>
                208
              </span>
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='hidden sm:inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <AiOutlinePlayCircle fontSize={25} style={{ padding: "2px" }} />
              Actions
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='hidden sm:inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <AiOutlineProject fontSize={25} style={{ padding: "2px" }} />
              Projects
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='hidden sm:inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <BiBookOpen fontSize={25} style={{ padding: "2px" }} />
              Wiki
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='hidden sm:inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <HiOutlineShieldExclamation
                fontSize={25}
                style={{ padding: "2px" }}
              />
              Security
            </a>
          </li>
          <li class='mr-2'>
            <a
              href='/'
              class='hidden sm:inline-flex items-center p-4 border-b-2 border-transparent rounded-t-lg group'>
              <BsGraphUp fontSize={25} style={{ padding: "2px" }} />
              Insights
            </a>
          </li>
          <div className='visible sm:hidden'>
            <Dropdown
              style={{
                backgroundColor: "grey",
                alignItems: "center",
                margin: 1,
              }}
              label='More'
              dismissOnClick={false}>
              <Dropdown.Item>Pull Requests</Dropdown.Item>
              <Dropdown.Item>Actions</Dropdown.Item>
              <Dropdown.Item>Projects</Dropdown.Item>
              <Dropdown.Item>Wiki</Dropdown.Item>
              <Dropdown.Item>Security</Dropdown.Item>
              <Dropdown.Item>Insights</Dropdown.Item>
            </Dropdown>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
