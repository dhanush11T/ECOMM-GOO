import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import ROLE from '../common/role';
import "../App.css"
import "./admin.css"
const AdminPanel = () => {
    const user = useSelector(state => state?.user?.user)
    const navigate = useNavigate()


    useEffect(()=>{
        if(user?.role !== ROLE.ADMIN){
            navigate("/")
        }
    },[user])

  return (
    <div className='min-h-[calc(100vh-90px)] md:flex hidden @apply rounded-[15]'>

        <aside id="boxm"className='bg-white min-h-100% w-full @apply rounded-[15]
 max-w-60 customShadow '>
                <div className='h-32  flex justify-center items-center flex-col'>
                    <div className='text-xl cursor-pointer relative flex justify-center'>
                        {
                        user?.profilePic ? (
                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                        ) : (
                            <FaUserCircle />
                        )
                        }
                    </div>
                    <p className='capitalize text-m font-semibold'>{user?.name}</p>
                    <p className='text-sm'>{user?.role}</p>
                </div>

                 {/***navigation */}       
                <div>   
                    <nav className='grid p-4'>
                        <Link to={"all-users"} className='px-2 py-1 hover:bg-orange-300'>All Users</Link>
                        <Link to={"all-products"} className='px-2 py-1 hover:bg-orange-300'>All product</Link>
                    </nav>
                </div>  
        </aside>

        <main className=' w-full h-full p-4'>
            <Outlet/>
        </main>
    </div>
  )
}

export default AdminPanel