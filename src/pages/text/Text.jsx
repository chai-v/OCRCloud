import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { createWorker } from 'tesseract.js';

const Text = () => {
    const [file, setFile] = useState(null);
    const workerRef = useRef(null);
    const [ocrResult, setOcrResult] = useState('');

    function getFile(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const initWorker = async () => {
        workerRef.current = await createWorker('eng');
    }
    useEffect(() => {
        initWorker();
    }, []);

    const handleExtract = async () => {
        const worker = workerRef.current;       
        const response = await worker.recognize(file);
        setOcrResult(response.data.text);
        console.log(response.data);
    };    
  return (
    <div className='text-slate-100 w-3/4 p-4 flex flex-col mx-auto'>
        <br/>
        <label className="block mb-2 text-xl text-gray-900 font-medium dark:text-white" for="file_input">Upload file</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 mx-auto rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file" onChange={getFile}/>
        <br/>
        <img src={file} className='w-1/2 mx-auto'></img>
        <br/>
        {file && <button type="button" onClick={handleExtract} class="text-white bg-gray-800 hover:bg-gray-900 w-1/4 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-auto dark:bg-grey-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Extract</button>}
        <br/>
        <label for="message" class="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Detected Text</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm mx-auto text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text" value={ocrResult}></textarea>
    </div>
  )
}

export default Text