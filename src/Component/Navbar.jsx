import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Book } from "lucide-react";
const Navbar = () => {
  return (
    <>
    
    
    <nav className="sticky top-0 py-5 bg-[#F9F9FA] z-50 border-b-[2px]">
            <ul className="list-none flex justify-between items-center px-12 ">
                <li className="font-bold text-2xl space-x-5 flex ">
                <Book className="text-indigo-600" size={32} />
                <h1 className="text-2xl font-bold text-gray-800">Vision 2050</h1>
                </li>
                <div className="flex gap-7">
                    <li className="text-md font-bold  hover:underline ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-md font-bold  hover:underline ">
                        <Link to="/allCourses">All-Courses</Link>
                    </li>
                    <li className="text-md font-bold  hover:underline ">
                        <Link to="/user/dashboard">Dashboard</Link>
                    </li>
                    <li className="text-md font-bold  hover:underline ">
                        <Link to="/user/Profile">Profile</Link>
                    </li>
                    
                    
                </div>
            </ul>
        </nav>
        <Outlet/>
        </>
  )
}

export default Navbar