import React from 'react'

const Home = () =>{
    return(
        <div className='p-6 font-sans font-bold text-slate-200'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-2xl'>Docs</h1>
                <div className='p-2 flex flex-row gap-4 mb-4'>
                    {/* Card */}
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Docs image</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Docs image</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Docs image</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-2xl'>Sheets</h1>
                <div className='p-2 flex flex-row gap-4 mb-4'>
                    {/* Card */}
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Sheets image</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Sheets image</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Sheets image</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className='text-2xl'>Keep Notes</h1>
                <div className='p-2 flex flex-row gap-4 mb-4'>
                    {/* Card */}
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Notes image</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Notes image</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-32 h-32 bg-slate-900 p-2 rounded-md gap-2'>
                        <h2 className='text-black'>Title</h2>
                        <div className='w-full h-2/3 p-2 bg-blue-600 rounded-md'>
                            <p>Notes image</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home