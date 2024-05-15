import React from 'react'
import { useState, useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../utils/UserContext';

export const Dashboard = () => {
    const [sidebarItem, setsidebarItem] = useState('Home')
    const { user, userlogout } = useAuth();
    const [name, setName] = useState('');
    const [open,setOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const navigate = useNavigate();

    const handleSidebar = (e) => {
      if(isMobile){
        setOpen(!open);
      }
        setsidebarItem(e.target.textContent);
    }

    const handleOpen = (e) => {
      setOpen(!open);
    }

    const handleLogout = () => {
        // setOpen(!open);
        navigate('/');
        userlogout();
    }

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 700);
        };
      
        handleResize();
      
        window.addEventListener('resize', handleResize);
      
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

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
        <div className='w-full h-full px-0 overflow-hidden  bg-slate-900'>
          {/* Header */}
            <div className={`nav w-full ${isMobile ? 'h-[8vh]' : 'h-[11vh]'} flex flex-wrap items-center justify-between p-4 bg-slate-800 content-center frosted sticky top-0 `}>
                {isMobile ? <button onClick={handleOpen}>
                    <span class="icon-[ic--round-menu]" style={{width:"24px", height:"24px", color:"white"}}></span>
                  </button> :
                  <h1 className="text-slate-300 font-sans font-bold">Dashboard</h1>
                }
                <button className="text-slate-300 font-sans font-bold" onClick={handleLogout}>Logout</button>
                {/* Profile Modal */}
                <div className={` duration-300 ${open?'h-64':'h-0'} w-64 absolute right-0 top-[11vh] object-bottom bg-slate-800 frosted`}>
                    <h1 className={`${!open && 'scale-0'}`}>{name}</h1>
                </div>
            </div>
            {/* Side bar */}
            <div className={`${isMobile ? 'h-[92vh] flex flex-col relative' : 'h-[89vh] grid grid-cols-5'} bg-gradient-to-b from-blue-900 via-indigo-800 to-slate-900`}>
              <div className={`${isMobile ? (!open ? '-translate-x-full':'translate-x-0') : ''} ${isMobile ? 'bg-slate-800 w-full z-40 absolute inset-y-0 left-0' :' bg-white/5'} sidebar col-span-1 isolate shadow-lg ring-1 ring-black/5 flex flex-col gap-2 items-center transition-transform ease-in-out duration-300`}>
                  <Link 
                      to="/dashboard/home" 
                      className={`text-slate-200 font-sans font-bold mt-4 hover:bg-blue-600 rounded-md px-20 py-2 ${sidebarItem === 'Home' ? 'bg-blue-600' : ''}`}
                      onClick={handleSidebar}
                  >
                    <div className='w-full h-full flex items-center'>
                      <div class="icon-[ic--round-home] items-start" style={{width: '24px', height: '24px', color:'white'}}></div>
                      <div>Home</div>
                    </div>
                  </Link>
                  <Link 
                      to="/dashboard/text" 
                      className={`text-slate-200 font-sans font-bold mt-4 hover:bg-blue-600 rounded-md px-20 py-2 ${sidebarItem === 'Text' ? 'bg-blue-600' : ''}`} 
                      onClick={handleSidebar}
                  >
                    <div className='w-full h-full flex items-center'>
                      <span class="icon-[ic--round-notes]" style={{width: '24px', height: '24px', color:'white'}}></span>
                      Text
                      </div>
                  </Link>
                  <Link 
                      to="/dashboard/table" 
                      className={`text-slate-300 font-sans font-bold mt-4 hover:bg-blue-600 rounded-md px-20 py-2 ${sidebarItem === 'Table' ? 'bg-blue-600' : ''}`} 
                      onClick={handleSidebar}
                  >
                    <div className='w-full h-full flex items-center'>
                    <span class="icon-[ic--outline-dataset]" style={{width: '24px', height: '24px', color:'white'}}></span>
                      Table
                      </div>
                  </Link>
              </div>
              <div className="outlet col-span-4 overflow-y-scroll"><Outlet context={[isMobile, setIsMobile]}/></div>
          </div>
        </div>
    )
}
