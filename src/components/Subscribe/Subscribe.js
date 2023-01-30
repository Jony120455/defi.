import React from 'react';

const Subscribe = () => {
    return (
        <div className='w-full text-center bg-black py-16 px-4'>
            <h1 className='text-white'>Join our defi community</h1>
            <div className='py-4'>
                <input className='p-3 rounded-2xl px-4 ' type='email' required placeholder='Your email' />
                <button className='md:mt-0 lg:mt-0 mt-5 ml-4'>Submit</button>
                <div className='text-white py-4 flex items-center justify-center'>
                    <input type='checkbox'/>
                    <p className='ml-2'>Yes, I agree to comminication with defi</p>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;