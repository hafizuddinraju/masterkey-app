import React, { useEffect, useState } from 'react';
import h1 from '../../asset/h1.png'
import h2 from '../../asset/h2.png'
import star from '../../asset/star.png'
import I1 from '../../asset/I1.png'
import I2 from '../../asset/I2.png'
import I3 from '../../asset/I3.png'
import s3 from '../../asset/s3.png'
import s2 from '../../asset/s2.png'
import s1 from '../../asset/s1.png'
import star1 from '../../asset/star1.png'
import Saved1 from '../../asset/Saved1.png'
import { IoIosAddCircle } from 'react-icons/io';
import { MdOutlineAddCircle } from 'react-icons/md';
import { GrSubtractCircle } from 'react-icons/gr';
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination , Autoplay, Navigation} from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import SmallSpinner from '../Spinner/SmallSpinner';

//content info page
const Content = () => {
    const [products, setProducts] = useState([])
//  data fatch using useEffect
    useEffect(()=>{
        fetch('https://api.hiring.masterkey.tech/api/v1/product/get')
        .then(res => res.json())
        .then(data =>{
            setProducts(data?.products)
        })
    },[])
    console.log(products)
    if(!products){
        return <SmallSpinner></SmallSpinner>
    }
    return (
        <>
        <div className='flex justify-between gap-6 mx-3 mt-10'>
    <div className='h-[330px] ml-5 p-6 w-[713px] rounded-lg  border-gray-400 shadow-2xl'>
        <div className='flex'>
            <div className='w-1/2'>

            <img className='w-80 h-64' src={h1} alt="" />
            </div>
            <div className='w-1/2'>
            <div>
                <h1 className='text-xl font-semibold'>Beats Studio3 Wireless Headphone</h1>
                <div className='flex'>
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <p className='ml-3'>200+ Reviews</p>
                </div>
                <p className='mt-2'>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs</p>
                <h1 className='text-[#07FFD2] font-semibold text-xl'>Price $ 450.55</h1>

                <div className='flex gap-2 mt-3'>
                    <div className='flex gap-2'>
                    <p>Color : </p>
                    <p className='bg-[#66FF1E] rounded-full w-6 h-6'></p>
                    <p className='bg-[#1EFFD6] rounded-full w-6 h-6'></p>
                    <p className='bg-[#1E78FF] rounded-full w-6 h-6'></p>
                    <p className='bg-[#8E3785] rounded-full w-6 h-6'></p>

                    </div>
                    
                    <div className='w-28 mx-auto rounded-2xl h-6 shadow-md'>
                        <div className='flex items-center justify-center gap-7'>
                        <p ><GrSubtractCircle className='text-gray-100'></GrSubtractCircle></p>
                        <p>1</p>
                        <p><MdOutlineAddCircle className='text-gray-600'></MdOutlineAddCircle></p>

                        </div>
                        

                    </div>
                    
                </div>

            </div>
            

            <div className='flex gap-2  mt-6'>
                        <img className='border-[2px] p-1 w-8 rounded-lg border-[#38FF4C]' src={Saved1} alt="" />
                        <div className=' border-[2px] p-1 w-28 text-center rounded-lg border-[#38FF4C]'>Add to card</div>
                        <div className='  font-semibold p-1 w-28 text-center rounded-lg bg-[#38FF4C]'>Buy Now</div>
                    </div>
            

            </div>
            

        </div>

        

    </div>
    <div>

    <img src={h2} alt="" />
    </div>

    </div>

    <div className='mt-[48px] flex mr-2'>
        <div className='w-2/3 ml-9 my-6'>
        <Swiper
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        360:{
                            slidesPerView:1,
                            spaceBetween:30
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:30
                        },
                        991:{
                            slidesPerView:3,
                            spaceBetween:30
                        },
                    }}
                    autoplay={{
                        delay:1500
                    }}
                    navigation
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    className="mySwiper max-w-screen-xl  mx-auto"
                >
                    {/* dynamic data load using map */}
                    {
                        products?.map(product =>{
                            return(
                                <SwiperSlide key={product?._id} className=' rounded-lg  text-black p-6 w-96'>
                        <div>
            <div className='w-[191px] h-[200px] p-4 rounded-2xl border-gray-500 shadow-2xl'>
                <img className='w-28 h-28 mx-auto' src={product?.picture} alt="" />
                <h1 className='font-bold'>{product?.name}</h1>
                <h4 className='font-semibold text-base'>Price : {product?.price}</h4>
                <div className='flex justify-between gap-5 items-center'>
                    <div className='flex'>

                    <img src={star1} alt="" />
                    <p className='text-[#38FF4C] pl-1'>{product?.ratting}</p>
                    </div>
                    <IoIosAddCircle className='text-2xl text-[#38FF4C]'></IoIosAddCircle>
                </div>
                
            </div>
            
            
            

            </div>
                        
                        
                    </SwiperSlide>

                            )
                        })
                    }

                </Swiper>
           

            <div className='flex items-center gap-2 mt-16'>
                <h1 className='text-[#66FF1E] font-bold text-xl'>Explore The Popular Categories</h1>
                <p>See all</p>
            </div>

            <div className='grid grid-cols-1 mt-[52px] gap-5 md:grid-cols-2 lg:grid-cols-2'>
                <div className='w-[330px] h-[100px] flex justify-between gap-10 items-center p-1 shadow-2xl rounded-lg'>
                <div className='w-1/3 flex  gap-1'>
                    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center p-2'>
                        <img src={I3} alt="" />
                    </div>
                    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center p-2'>
                    <img src={I1} alt="" />

                    </div>
                    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center p-2'>
                   <img src={I2} alt="" />
                    </div>

                </div>
                <div className='w-2/3 border-l-4 border-gray-700 '>
                    <h1 className='font-bold pl-1'>Popular top 10 brands</h1>
                    <p className='pl-1'>$400+ Orders & reviews</p>

                </div>

                </div>
                <div className='w-[330px] h-[100px] flex justify-between gap-10 items-center p-1 shadow-2xl rounded-lg'>
                <div className='w-1/3 flex  gap-1'>
                    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center p-2'>
                        <img src={s1} alt="" />
                    </div>
                    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center p-2'>
                    <img src={s2} alt="" />

                    </div>
                    <div className='w-10 h-10 bg-gray-300 rounded-full flex items-center p-2'>
                   <img src={s3} alt="" />
                    </div>

                </div>
                <div className='w-2/3 border-l-4 border-gray-700 '>
                    <h1 className='font-bold pl-1'>Newest Sellers</h1>
                    <p className='pl-1'>$460+ Orders & reviews</p>

                </div>

                </div>
                
            </div>
            
        </div>
        {/* update product */}
        <div className='w-1/3'>
            <div className='flex justify-between items-center'>
                <h1 className='text-xl font-semibold'>Daily Deals</h1>
                <p>View All</p>
            </div>
            {
                products?.map(p =>{
                    return(
                        <div key={p?._id} className='flex mt-4 justify-between items-center'>
                <div className='w-12 h-12 flex justify-center p-2 bg-gray-300 rounded-full'>
                    <img src={p?.picture} alt="" />
                </div>
                <div>
                    <h1 className='font-semibold'>{p?.name}</h1>
                    <p className='text-sm'>{p?.review} Review And {p?.order} Order</p>
                </div>
                <div>
                    <p className='text-gray-400'>Price {p?.price}</p>
                </div>
            </div>

                    )
                })
            }
            
            
        </div>
    </div>
            
        </>
    );
};

export default Content;