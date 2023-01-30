import React from 'react';
import { SiHiveBlockchain } from 'react-icons/si';
import { SiStrapi } from 'react-icons/si';
import { SiFsecure } from 'react-icons/si';
import { SiProcesswire } from 'react-icons/si';
import './About.css'

const About = () => {
    
    return (
        <div className=' w-full bg-black text-center text-white py-16 mt-16'>
            <div className='max-w-[1240px] mx-auto  '>
                <div className='mx-4'>
                    <h1 className='py-2'>A growing Protocol Ecosystem </h1>
                    <p className='py-2 text-lg'>It is a long established fact that a reader will be distracted by</p>
                </div>
                <div className='grid py-10 mx-5 gap-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1'>

                   
                       <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                            <div className=' inline-flex p-2 rounded-full'>
                                <SiHiveBlockchain size={40} className='bg-[#00d8ff] w-16 h-16 p-4 rounded-full' ></SiHiveBlockchain>
                            </div>
                            <h3 className='text-lg font-bold py-2'>Reliable temper-prof network</h3>
                            <p className='py-2 text-lg'>It is a long established fact that a reader will be distracted by</p>
                       </div>
                       <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                            <div className=' inline-flex p-2 rounded-full'>
                                <SiStrapi size={40} className='bg-[#00d8ff] w-16 h-16 p-4 rounded-full' ></SiStrapi>
                            </div>
                            <h3 className='text-lg font-bold py-2'>Seamless connection to any API</h3>
                            <p className='py-2'>It is a long established fact that a reader will be distracted by</p>
                       </div>
                       <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                            <div className=' inline-flex p-2 rounded-full'>
                                <SiFsecure size={40} className='bg-[#00d8ff] w-16 h-16 p-4 rounded-full' ></SiFsecure>
                            </div>
                            <h3 className='text-lg font-bold py-2'>Proven ready mood solutions</h3>
                            <p className='py-2'>It is a long established fact that a reader will be distracted by</p>
                       </div>
                       <div className='flex flex-col border text-left rounded-2xl py-12 px-8'>
                            <div className=' inline-flex p-2 rounded-full'>
                                <SiProcesswire size={40} className='bg-[#00d8ff] w-16 h-16 p-4 rounded-full' ></SiProcesswire>
                            </div>
                            <h3 className='text-lg font-bold py-2'>Source of chain compition</h3>
                            <p className='py-2'>It is a long established fact that a reader will be distracted by</p>
                       </div>
                 

                </div>
            </div>
        </div>
    );
};

export default About;