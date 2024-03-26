import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Listed = () => {
    const [tab, setTab] = useState(0);
    return (
        <div>
            <div className='flex items-center overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap'>
            <Link
              to={``}
              onClick={()=>setTab(0)}
              
              className={`cursor-pointer items-center  px-5 py-3 space-x-2 ${
                tab === 0 ? 'border border-b-0' : 'border-b'
              }  `}
            >
              <span>Read Books</span>
            </Link>
            <Link
              to={`wishlist`}
              onClick={()=>setTab(1)}
              className={`cursor-pointer items-center  px-5 py-3 space-x-2 ${
                tab === 1 ? 'border border-b-0' : 'border-b'
              }  `}
            >
              <span>Wishlist Books</span>
            </Link>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Listed;