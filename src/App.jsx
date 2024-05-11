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
    <div className="w-screen h-screen overflow-y-scroll no-scrollbar bg-gradient-to-b md:bg-gradient-to-r from-slate-900 from-60% to-blue-500">
      {/* Nav bar */}
        <div className=" nav w-full h-14 flex flex-wrap items-center justify-between p-4 bg-slate-900 content-center frosted sticky top-0 bg-opacity-40 z-40">
          <h1 className="text-slate-300 font-sans font-bold">OCRCloud</h1>
          <a href="https://github.com/chai-v">
          <i class="fa fa-github" style={{fontSize: "36px",  color: "#f2f2f2"}}></i>
          </a>
        </div>

        <div>
        <div className={`content w-full  ${isMobile ? 'flex overflow-y-scroll no-scrollbar flex-col items-center content-center px-8 py-32 gap-28' : 'px-12 pb-16 grid grid-cols-3 h-screen'}`}>
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
        {/* Description of the tools */}
        <div className={`content w-full h-2/3 ${isMobile ? 'flex overflow-y-scroll no-scrollbar flex-col items-center content-center px-8 pb-20 gap-28' : 'px-12 pb-16 grid grid-cols-3'}`}>
          <div className="text-slate-200 md:col-span-2 font-sans font-bold flex items-center">
            <div className={`w-full h-full ${!isMobile ? 'grid grid-cols-3' : 'flex flex-col'} gap-4 items-center`}>
              {isMobile && 
                <div className={`w-full md:col-span-1 flex flex-wrap flex-col items-center ${!isMobile && 'py-10 pr-4 pl-10'} font-sans font-bold text-slate-200`}>
                <div className="w-full p-1 bg-gradient-to-r from-blue-500 to-blue-900 rounded-md">
                  <div className="h-64 flex items-center bg-slate-900 opacity-75 rounded-md px-6 py-4 text-center">
                    <p>OCRCloud is a suite of tools to powered by <span className="text-white">Tesseract OCR</span> detection working together with complimentary <span className="text-white">Google Workshop</span> applications for increased productivity</p>
                  </div>
                </div>
              </div>
              }
              <div className={`flex flex-col items-center gap-6 md:col-span-1 h-64 ${isMobile ? 'bg-blue-900 border-2 border-blue-500':'bg-gradient-to-b from-blue-900 via-blue-900  opacity-75'}  rounded-md px-6 pt-6 text-center`}>
                <img style={{width:'40%'}} src="/google-docs.png"></img>
                <p>Turn extracted OCR text data from images into new Google Docs</p>
              </div>
              <div className={`flex flex-col items-center gap-6 md:col-span-1 h-64 ${isMobile ? 'bg-blue-900 border-2 border-blue-500':'bg-gradient-to-b from-blue-900 via-blue-900  opacity-75'} rounded-md px-6 pt-6 text-center`}>
                <img style={{width:'40%'}} src="/google-sheets.png"></img>
                <p>Extract tabular data from images and create Google Sheets</p>
              </div>
              <div className={`flex flex-col items-center gap-6 md:col-span-1 h-64 ${isMobile ? 'bg-blue-900 border-2 border-blue-500':'bg-gradient-to-b from-blue-900 via-blue-900  opacity-75'} rounded-md px-6 pt-6 text-center`}>
                <img style={{width:'40%'}} src="/keeps.png"></img>
                <p>Scan to-do lists and recipts to create notes on Google Keep Notes</p>
              </div>
            </div>
          </div>
          {!isMobile && 
                <div className={`w-full md:col-span-1 flex flex-wrap flex-col items-center ${!isMobile && 'py-10 pr-4 pl-10'} font-sans font-bold text-slate-200`}>
                <div className="w-full p-1 bg-gradient-to-r from-blue-500 to-slate-900 rounded-md">
                  <div className="h-64 flex items-center bg-slate-900 opacity-75 rounded-md px-6 py-4 text-center">
                    <p>OCRCloud is a suite of tools to powered by <span className="text-white">Tesseract OCR</span> detection working together with complimentary <span className="text-white">Google Workshop</span> applications for increased productivity</p>
                  </div>
                </div>
              </div>
            }
        </div>
        </div>
    </div>
  )
}

export default App
