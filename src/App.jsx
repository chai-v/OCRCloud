import React from "react"
import { Login } from "./pages/login/Login"

function App() {
  return (
    <div className="container w-full h-screen overflow-hidden bg-gradient-to-r from-slate-900 from-60% to-blue-500">
        <div className=" nav w-full h-14 flex flex-wrap items-center justify-between p-4 bg-slate-900 content-center frosted sticky top-0 bg-opacity-40">
          <h1 className="text-slate-300 font-sans font-bold">OCR Cloud</h1>
          <a href="https://github.com/chai-v">
          <i class="fa fa-github" style={{fontSize: "36px",  color: "#f2f2f2"}}></i>
          </a>
        </div>
        <div className="content w-full h-screen p-12 grid grid-cols-3">
          <div className="text-slate-300 col-span-2 font-sans font-bold py-32 pr-12">
              <h1 className="text-5xl">Unlock the power of <span className="text-blue-500">OCR</span></h1>
              <br/>
              <p className="text-slate-400">
                Extract text and data from images, save to Google Workspace instantly leveraging Google APIs
              </p>
          </div>
          <div className="col-span-1 py-20">
            <Login />
          </div>
        </div>
    </div>
  )
}

export default App
