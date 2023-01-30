import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross2 } from 'react-icons/rx';

const Navber = () => {

    const [nav , setNav] = useState(false)

    const handleClick = () =>{
        setNav(!nav)
    }
    return (
        <div className='w-full h-[96px] bg-black'>
            <div className='max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full'>
                <div>
                    <h1 className='text-[#00d8ff]'>Defi.</h1>
                </div>
                <div className='hidden md:flex'>
                    <ul  className='flex text-white items-center'>
                        <li><a href='#Platforms'>Platforms</a></li>
                        <li><a href='#Developers'>Developers</a></li>
                        <li><a href='#Community'>Community</a></li>
                        <li><a href='#About'>About</a></li>
                        <button className='ml-4'>Use Defi</button>
                    </ul>
                </div>
                <div onClick={handleClick} className= 'block md:hidden'>
                    {
                        nav ? <RxCross2 className='text-white text-2xl'></RxCross2>
                        :
                        <AiOutlineMenu className='text-white text-2xl'></AiOutlineMenu>
                    }
                </div>
                <div className={nav ? 'w-full bg-black absolute left-0 z-10 text-white top-[90px] flex justify-center text-center':'absolute left-[-100%]'}>
                    <ul>
                        <li><a href='#Platforms'>Platforms</a></li>
                        <li><a href='#Developers'>Developers</a></li>
                        <li><a href='#Community'>Community</a></li>
                        <li><a href='#About'>About</a></li>
                        <button className='m-8'>Use Defi</button>
                    </ul>
                </div>
            </div>
            
        </div>
    );
};

export default Navber;