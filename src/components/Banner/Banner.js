import React from 'react';
import video from '../../assets/video.mp4'

const Banner = () => {
    return (
        <div className='w-full h-[90vh] top-[90px] '>
            <video src={video} autoPlay loop muted className='-z-10 object-cover w-full h-full absolute' />

            <div className='text-white flex justify-center items-center w-full h-[90%] flex-col'>
                <h1>Decentralized</h1>
                <h1 className='text-4xl my-2'><span className=' text-[var(--var-blue)]'>Trending</span> Protocol</h1>
                <p className='text-lg  text-center mx-4'>It is a long established fact that a reader will be distracted by <br/> the readable content of a page when looking at its layout.</p>
                <div className='mt-6'>
                    <button className=''>Use Defi</button>
                    <button className='ml-4 bg-none border'>FAQ</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;