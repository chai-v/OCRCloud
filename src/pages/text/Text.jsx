import React from 'react'
import { useState, useRef, useEffect, useCallback } from 'react'
import { createWorker } from 'tesseract.js';
import { useAuth } from '../../utils/UserContext';
import { useOutletContext } from 'react-router-dom';
import Webcam from "react-webcam";

const Text = () => {
    const [isMobile, setIsMobile] = useOutletContext();
    const [file, setFile] = useState(null);
    const [toggle, setToggle] = useState(false);
    const workerRef = useRef(null);
    const [ocrResult, setOcrResult] = useState('');
    const { user, userlogin, userlogout } = useAuth();

    const webcamRef = useRef(null);

    function getFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const initWorker = async () => {
        workerRef.current = await createWorker('eng');
    }
    useEffect(() => {
        initWorker();
    }, []);

    const fetchDoc = async () =>{
        const userData = await user;
        console.log(userData.token)
        fetch('https://docs.googleapis.com/v1/documents/1H2Eh7cF-NPiats6-qUMnMhkos8pImeDx7N1QHX8XXtE', {
            headers:{
                'Authorization': `Bearer ${userData.token}`
            }
        })
        .then(data =>{
            console.log(data);
        }).catch(error => {
            console.error();
        })
    }

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        setToggle(null);
        setFile(imageSrc);
      }, [webcamRef]);

    const handleExtract = async () => {
        const worker = workerRef.current;       
        const response = await worker.recognize(file);
        setOcrResult(response.data.text);
        fetchDoc();
    };

    const handleClear = () => {
        setFile(null);
        setOcrResult('');
    }

  return (
    <div className={`text-slate-100 ${isMobile ? 'w-full' : 'w-3/4'} p-6 flex flex-col mx-auto`}>
        <br/>
        <label className="block mb-2 text-xl text-gray-900 font-medium dark:text-white" for="file_input">Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 mx-auto rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={getFile}/>
        <br/>
        <label className="block mb-2 text-xl text-gray-900 font-medium dark:text-white">Capture a photo</label>
        <div className='flex flex-row'>
            <p>Capture an image using the in-built camera for text detection</p>
            <button type="button" onClick={()=>{setToggle(!toggle)}} class="text-white bg-gray-800 hover:bg-gray-900 w-1/4 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto dark:bg-grey-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Toggle</button>
        </div>
        <br/>
        {(toggle) &&
        <div className='flex flex-col items-center gap-6 mt-6'>
            <Webcam ref={webcamRef}></Webcam>
            <button class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto dark:bg-grey-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" onClick={capture}>Capture photo</button>
            <br/>
        </div>}
        {file &&
        <>
        <img src={file} className='w-1/2 mx-auto inline'></img>
        <br/>
        </>}
        
        {file && 
        <div className='flex flex-col items-center'>
            <div className='flex gap-6'>
            <button type="button" onClick={handleExtract} class="text-white bg-gray-800 hover:bg-gray-900  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-grey-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Extract</button>
            <button type="button" onClick={handleClear} class="text-white bg-gray-800 hover:bg-gray-900  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5  dark:bg-grey-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Clear</button>
            </div>
        </div>
        }
        <br/>
        <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Detected Text</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm mx-auto text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text" value={ocrResult}></textarea>
    </div>
  )
}

export default Text