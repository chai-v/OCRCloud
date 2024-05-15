import React from 'react'
import { Link } from 'react-router-dom';

const Privacy = () =>{
    return(
        <div className="w-screen h-screen overflow-hidden bg-slate-800">
            <div className=" nav w-full h-14 flex flex-wrap items-center justify-between p-4 bg-slate-900 content-center frosted sticky top-0 bg-opacity-40 z-40">
                <Link to="/" className="text-slate-300 font-sans font-bold">
                    OCRCloud
                </Link>
                <a href="https://github.com/chai-v">
                <i class="fa fa-github" style={{fontSize: "36px",  color: "#f2f2f2"}}></i>
                </a>
            </div>
            <div className='h-screen w-screen flex justify-center pt-10'>
                <div style={{width:'80%', height:'80%'}} className="p-1 bg-gradient-to-r from-blue-500 to-slate-900 rounded-md font-sans font-semibold text-white">
                  <div className="h-full bg-slate-900 opacity-75 rounded-md px-6 py-4 overflow-y-scroll flex flex-col">
                  <h1 className='text-2xl font-bold mb-4'>OCRCloud Privacy Policy</h1>
                    <p className="text-base mb-8">This privacy policy describes how OCRCloud collects, uses, and discloses your information when you use the web application.</p>

                    <h2 className='text-xl'>Information We Collect</h2>
                    <p className="text-base mb-4">We collect two types of information through the App:</p>
                    <ul className="list-disc pl-4 mb-8 ml-3">
                        <li className="text-base">
                        <strong>Non-Personally Identifiable Information (NPII):</strong> This includes information about your device, such as your browser type, operating system, and IP address. We also collect information about your usage of the App, such as the pages you visit and the actions you take.
                        </li>
                        <li className="text-base">
                        <strong>Google Account Information:</strong> When you connect your Google account to the App, we obtain access to certain information associated with your account, such as your name and email address. This access is limited to the scopes we request, which are:
                        <ul className="list-disc pl-4 mb-4 ml-6">
                            <li className="text-base">.../auth/documents: Allows creating new Google Docs with extracted data.</li>
                            <li className="text-base">.../auth/documents.readonly: Allows editing existing Google Docs and adding extracted data. Also allows identifying and deleting documents created or edited by the App.</li>
                            <li className="text-base">.../auth/spreadsheets: Allows creating new Google Sheets with extracted tabular data.</li>
                            <li className="text-base">.../auth/spreadsheets.readonly: Allows editing existing Google Sheets and adding extracted data. Also allows identifying and deleting sheets created or edited by the App.</li>
                        </ul>
                        </li>
                    </ul>

                    <h2 className='text-xl'>How We Use Your Information</h2>
                    <p className="text-base mb-4">We use the information we collect for the following purposes:</p>
                    <ul className="list-disc pl-4 mb-8 ml-3">
                        <li className="text-base">
                        <strong>To operate and improve the App:</strong> We use NPII to understand how users interact with the App and to improve its functionality.
                        </li>
                        <li className="text-base">
                        <strong>To connect to Google Workspace:</strong> We use your Google Account information to connect to Google Workspace APIs and perform the following actions:
                        <ul className="list-disc pl-4 mb-4 ml-6">
                            <li className="text-base">Create new Google Docs with extracted data.</li>
                            <li className="text-base">Edit existing Google Docs and add extracted data.</li>
                            <li className="text-base">Delete documents created or edited by the App (upon your request).</li>
                            <li className="text-base">Create new Google Sheets with extracted tabular data.</li>
                            <li className="text-base">Edit existing Google Sheets and add extracted data.</li>
                            <li className="text-base">Delete sheets created or edited by the App (upon your request).</li>
                        </ul>
                        <strong>We do not access or store any content within your existing Google Docs or Sheets that were not created or edited by the App.</strong>
                        </li>
                    </ul>

                    <h2>Disclosure of Your Information</h2>
                    <p className="text-base mb-8">We do not share your information with any third parties except Google, as necessary to connect to Google Workspace APIs and perform the actions described above.</p>

                    <h2>Data Security</h2>
                    <p className="text-base mb-8">We take reasonable steps to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is ever completely secure. We cannot guarantee the security of your information.</p>

                    <h2>Your Choices</h2>
                    <p className="text-base mb-8">You can revoke access to your Google Account information at any time by visiting your Google Account settings. You can also delete documents created or edited by the App through the App's dashboard.</p>

                    <h2>Contact Us</h2>
                    <p className="text-base mb-8">If you have any questions about this Privacy Policy, please contact us at chaitanya.vengali@gmail.com</p>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;