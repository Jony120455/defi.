import React from 'react';
import img from '../../assets/dropbox.png'

const Developers = () => {
    return (
        <div className='w-full bg-black text-white'>
            <div className='max-w[1240px] mx-auto py-4 px-4 md:flex md:justify-center gap-20'>
                <div className='py-4 mx-4 text-center md:text-start'>
                    <h1 className='text-4xl font-bold'>Superpowers for defi developers</h1>
                    <p className='py-2'>It is a long established fact that a reader will be distracted by <br/> the readable content of a page when looking at its layout.</p>
                </div>
                <div className='flex justify-center my-16 mx-4'>
                    <img className='w-[350px] bg-blue-500 shadow-lg shadow-blue-500/50' src={img} alt=''/>
                </div>
            </div>
        </div>
    );
};

export default Developers;