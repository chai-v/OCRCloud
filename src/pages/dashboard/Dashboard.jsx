import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/UserContext';

export const Dashboard = () => {
    const [sidebarItem, setsidebarItem] = useState('Text')
    const { user, userlogout } = useAuth();
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleSidebar = (e) => {
        setsidebarItem(e.target.textContent);
    }

    const handleLogout = () => {
        navigate('/');
        userlogout();
    }

    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const userData = await user; // Wait for the user promise to resolve
          setName(userData.name); // Access the name property once the promise resolves
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };
  
      fetchUserData();
    }, [user]);

    
    return (
        <div className='container w-full h-screen overflow-y-scroll bg-slate-900'>
            <div className=" nav w-full h-[11vh] flex flex-wrap items-center justify-between p-4 bg-blue-800 content-center frosted sticky top-0 bg-opacity-40">
                <h1 className="text-slate-300 font-sans font-bold">Dashboard</h1>
                <button className="text-slate-300 font-sans font-bold" onClick={handleLogout}>Welcome, {name? name : "Logout"}</button>
            </div>
            <div className='grid grid-cols-5 h-[89vh] bg-gradient-to-b from-blue-900 via-indigo-800 to-slate-900'>
                <div className="sidebar col-span-1 isolate bg-white/5 shadow-lg ring-1 ring-black/5 flex flex-col gap-2 items-center">
                    <Link 
                        to="/dashboard/text" 
                        className={`text-slate-300 font-sans font-bold mt-4 hover:bg-blue-600 rounded-md px-20 py-2 ${sidebarItem === 'Text' ? 'bg-blue-600 rounded-md px-20 py-2' : ''}`}
                        onClick={handleSidebar}
                    >
                        Text
                    </Link>
                    <Link 
                        to="/dashboard/table" 
                        className={`text-slate-300 font-sans font-bold mt-4 hover:bg-blue-600 rounded-md px-20 py-2 ${sidebarItem === 'Table' ? 'bg-blue-600 rounded-md px-20 py-2' : ''}`} 
                        onClick={handleSidebar}
                    >
                        Table
                    </Link>
                </div>
                <div className="outlet col-span-4 bg-gradient-to-b from-blue-900 via-indigo-800 to-slate-900 overflow-y-scroll"><Outlet/></div>
            </div>
        </div>
    )
}
