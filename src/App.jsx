import React from "react"
import { Login } from "./pages/login/Login"
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setIsMobile] = useState(true);

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

  return (
    <div className="w-screen h-screen overflow-hidden bg-gradient-to-b md:bg-gradient-to-r from-slate-900 from-60% to-blue-500">
      {/* Nav bar */}
        <div className=" nav w-full h-14 flex flex-wrap items-center justify-between p-4 bg-slate-900 content-center frosted sticky top-0 bg-opacity-40">
          <h1 className="text-slate-300 font-sans font-bold">OCR Cloud</h1>
          <a href="https://github.com/chai-v">
          <i class="fa fa-github" style={{fontSize: "36px",  color: "#f2f2f2"}}></i>
          </a>
        </div>
      
        <div className={`content w-full h-screen ${isMobile ? 'flex overflow-y-scroll no-scrollbar flex-col items-center content-center px-8 py-32 gap-28' : 'px-12 pb-16 grid grid-cols-3'}`}>
          <div className="text-slate-300 md:col-span-2 font-sans font-bold flex items-center">
            <div className="gap-6 text-center md:text-left">
              <h1 className="text-5xl">Unlock the power of <span className="text-blue-500">OCR</span></h1>
              <br/>
              <p className="text-slate-400">
                Extract text and data from images, save to Google Workspace instantly leveraging Google APIs
              </p>
              </div>
          </div>
          <div className="md:col-span-1 flex items-center">
            <Login />
          </div>
        </div>
    </div>
  )
}

export default App
