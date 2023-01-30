import React, { useEffect, useState } from "react";
import MainNav from "../mainNav/MainNav";
import { VscIssues } from "react-icons/vsc";
import { MdOutlineDone } from "react-icons/md";
import moment from "moment";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = () => {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  // let arr = data.slice(0, 10);
  const [arr, setArr] = useState([]);
  const fetchData = () => {
    return fetch("https://api.github.com/repos/facebook/react/issues")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(setArr(data.slice(0, 11)));
  };

  const fetchMoreData = () => {
    if (data.length <= 0) {
      setHasMore(false);
    } else {
      setTimeout(() => {
        setData(data.slice(11));
        setArr(arr.concat(data.slice(0, 11)));
        // arr = arr.concat(data.slice(0, 10));
      }, 500);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className='visible ml-5 mt-5 sm:hidden flex'>
        {/* icon -- number open  tick -- number closed */}
        <h2 className='flex items-center font-bold'>
          <VscIssues fontSize={25} style={{ padding: "2px" }} />
          600 Open
        </h2>
        <h2 className='flex items-center text-gray-400 '>
          <MdOutlineDone fontSize={25} style={{ padding: "2px" }} />
          10,290 Closed
        </h2>
      </div>
      <div className='rounded-t-md  p-3 container mx-auto my-1 sm:my-5'>
        <MainNav />

        <div className=''>
          {/* icon -- title -- status -- open when? and by who? */}
          {/* PR-number profile-pic Comment-number */}
          <InfiniteScroll
            height={500}
            dataLength={arr.length}
            next={fetchMoreData}
            hasMore={hasMore}>
            {arr?.map((each) => (
              <div
                key={each.id}
                className='flex py-3 border-b-2 border-l-2 border-r-2 border-b-gray-100'>
                {console.log(each.labels)}
                <div className='ml-2'>
                  <VscIssues fontSize={25} style={{ color: "green" }} />
                </div>
                <div>
                  <div>
                    <h2 className='ml-2'>{each.title}</h2>
                    {/* labels */}
                    {each.labels.map((e) => (
                      <span class='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300'>
                        {e.name}
                      </span>
                    ))}
                  </div>
                  <p className='text-sm ml-2 text-gray-400'>
                    #{each.number} opened {moment(each.updated_at).fromNow()} by
                    {each.user?.login}
                    {/* Some mathematics should be applied here */}
                  </p>
                </div>
              </div>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Main;
