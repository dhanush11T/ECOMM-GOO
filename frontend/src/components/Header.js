import React, { useContext,useState } from "react";
import bg2 from "../assest/bg2.png";
import { LuSearch } from "react-icons/lu";
import { IoIosCart } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import "./new.css";
import Context from '../context';

import ROLE from "../common/role"
import { setUserDetails } from "../store/userSlice";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);
  const navigate = useNavigate();
  const searchInput=useLocation();
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)
  const dispatch = useDispatch();
  const context = useContext(Context)
  const [menuDisplay, setMenuDisplay] = useState(false);
  const handleSearch = (e)=>{
    const { value } = e.target
    setSearch(value)

    if(value){
      navigate(`/search?q=${value}`)
    }else{
      navigate("/search")
    }
  }

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });
    const data = await fetchData.json();
    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }
    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <header className="h-20 shadow bg-white fixed w-full z-40">
      <div className="container mx-auto flex justify-between items-center px-1 h-full">
        {/* Logo on the Left */}
        <div className="flex items-center">
          <img src={bg2} alt="Logo" className="w-16 h-16"           onClick={() => navigate('/')}/>
        </div>
        
        {/* Centered Search Bar */}
        <div className="flex-grow flex items-center justify-center">
          <div className="flex rounded-full min-w-[50px] items-center focus-within:shadow-xl">
            <input type="text" placeholder="Search Here....." className="input" onChange={handleSearch} value={search}/>
            {/* <LuSearch /> */}
          </div>
        </div>

        {/* User Profile, Cart, and Login/Logout Buttons on the Right */}
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-8">
            <div className="relative flex items-center mx-4">
              {user?._id ? (
                <div
                  className="text-3xl cursor-pointer relative flex justify-center items-center"
                  onClick={() => setMenuDisplay((prev) => !prev)}
                >
                  {user?.profilePic ? (
                    <img
                      src={user?.profilePic}
                      className="w-10 h-10 rounded-full"
                      alt={user?.name}
                    />
                  ) : (
                    <FaUserCircle className="w-10 h-10"/>
                  )}
                  {/* Dropdown Menu */}
                  {menuDisplay && (
                    <div className=" absolute whitespace-nowrap right-0 top-14 bg-white p-2 shadow-lg rounded text-sm">
                      <nav>
                        
                      {
                            user?.role === ROLE.ADMIN && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block hover:bg-slate-100 p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Admin Panel</Link>
                            )
                          }
                       
                        {/* <Link
                          to="/profile"
                          className="block hover:bg-slate-100 p-2"
                          onClick={() => setMenuDisplay(false)}
                        >
                          Profile
                        </Link> */}
                        <button
                          onClick={handleLogout}
                          className="block w-full text-left hover:bg-slate-100 p-2"
                        >
                          Logout
                        </button>
                      </nav>
                    </div>
                  )}
                </div>
              ) : (
                <FaUserCircle />
              )}
            </div>
            <Link to={"/cart"} className="relative flex items-center mx-3">
              <span>
                <IoIosCart className="text-xl cursor-pointer" />
                <div className="bg-gray-900 text-xxs text-white w-4 h-4 rounded-full p-2 flex items-center justify-center absolute bottom-3 left-3">
                  <p className="text-sm">{context?.cartProductCount}</p>
                </div>
              </span>
            </Link>
            {!user?._id ? (
              <button id="bt"className="button mx-4">
                <Link to={"/login"}>Login</Link>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;