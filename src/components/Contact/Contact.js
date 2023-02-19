import React from 'react';
import image1 from '../../asset/image 1.png'
import image2 from '../../asset/image 2.png'
import image3 from '../../asset/image 3.png'
import {RiFacebookFill} from 'react-icons/ri';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaPinterestP} from 'react-icons/fa';
const Contact = () => {
    return (
        <div>
            <h1 className='text-4xl font-semibold text-center mt-10'>Team Awesome</h1>
            <div className='flex items-center bg-yellow-400 px-10 justify-between mx-20 mt-20 gap-5 md:gap-7 lg:gap-7'>
                <img className='h-[250px]  ' 
                src={image1} alt="" />
                <img className='h-[250px]' src={image2} alt="" />
                <img className='h-[250px]' src={image3} alt="" />

            </div>
            <div className='flex items-center pb-10 bg-gray-200 px-10 justify-between mx-20  gap-5 md:gap-7 lg:gap-7'>
                <div className='w-1/4'>

                <div className='text-center mt-6'>
                    <h1 className='uppercase font-semibold'>Robert Mcgrath</h1>
                    <p>Founder</p>
                    <hr className='hr_line' />
                    <div className='flex gap-2 mt-3 items-center justify-center'>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                            <RiFacebookFill className='text-gray-400'></RiFacebookFill>
                        </div>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                            <AiOutlineTwitter className='text-gray-400'></AiOutlineTwitter>
                        </div>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                        <FaPinterestP className='text-gray-400'></FaPinterestP>
                        </div>
                    </div>
                </div>
                </div>
                <div className='w-1/6'>

                <div className='text-center mt-6'>
                    <h1 className='uppercase font-semibold'>Robert Mcgrath</h1>
                    <p>Founder</p>
                    <hr className='hr_line' />
                    <div className='flex gap-2 mt-3 items-center justify-center'>
                    <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                            <RiFacebookFill className='text-gray-400'></RiFacebookFill>
                        </div>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                            <AiOutlineTwitter className='text-gray-400'></AiOutlineTwitter>
                        </div>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                        <FaPinterestP className='text-gray-400'></FaPinterestP>
                        </div>
                    </div>
                </div>
                </div>
                <div className='w-1/6'>

                <div className='text-center mt-6'>
                    <h1 className='uppercase font-semibold'>Robert Mcgrath</h1>
                    <p>Founder</p>
                    <hr className='hr_line' />
                    <div className='flex gap-2 mt-3 items-center justify-center'>
                    <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                            <RiFacebookFill className='text-gray-400'></RiFacebookFill>
                        </div>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                            <AiOutlineTwitter className='text-gray-400'></AiOutlineTwitter>
                        </div>
                        <div className='h-8 w-8 rounded-full p-2 bg-gray-100'>
                        <FaPinterestP className='text-gray-400'></FaPinterestP>
                        </div>
                    </div>
                </div>
                </div>
                

            </div>
        </div>
    );
};

export default Contact;