import React from 'react';
import Header_Headphone from '../../asset/Header_Headphone.png'
import Home1 from '../../asset/Home1.png'
import Explore from '../../asset/Explore.png'
import Saved from '../../asset/Saved.png'
import Selling from '../../asset/Selling.png'
import Profile from '../../asset/Profile.png'
import History from '../../asset/History.png'
import Contact from '../../asset/Contact.png'
import Setting from '../../asset/Setting.png'
import Cart from '../../asset/Cart.png'
import Frame_1 from '../../asset/Frame_1.png'
import Search from '../../asset/Search.png'
import Filter from '../../asset/Filter.png'
import Alarm from '../../asset/Alarm.png'
import Compose_mail from '../../asset/Compose_mail.png'
import Customer_Icon from '../../asset/Customer_Icon.png'

import { Link, Outlet } from 'react-router-dom';
const Home = () => {
    return (
        <div>
            
            <div className="drawer drawer-mobile">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content bg-gray-50">
    {/* <!-- Page content here --> */}
    {/* <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label> */}
    <div className='flex justify-between p-5'>
        <div>

    <h1 className='text-3xl font-semibold'>HeadPhone</h1>
    <p className='font-semibold'>For the top band</p>
        </div>
        <div>
        <div className='flex relative'>
            <img className='absolute left-2 top-2' src={Search} alt="" />
            <input className='w-96 mr-3 px-8 focus:outline-none border  border-gray-400 rounded-lg placeholder:px-2' type="text" placeholder='Search Products' />
            <img className='absolute w-8 ml-5 left-80 top-2' src={Filter} alt="" />
            <div className='flex gap-4'>
            <img className='bg-[#17FF3C]  rounded-lg w-10 h-10 p-2' src={Compose_mail} alt="" />
            <img className='bg-[#53FF02] w-10 h-10 p-2 rounded-lg' src={Alarm} alt="" />
            <img className='bg-[#17FF3C] w-10 h-10 p-2 rounded-lg' src={Customer_Icon} alt="" />

        </div>
        </div>

        </div>
        
        
    </div>
    
    
    <Outlet></Outlet>


  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>
    <div className="menu p-7 w-64 font-semibold bg-white border-gray-800 border-l-4  text-base-content">
      {/* <!-- Sidebar content here --> */}
      <Link to='/'>
      
      <div className='text-2xl ml-3 flex items-center gap-3'>
        <img className='w-7' src={Header_Headphone} alt="" />
        <h1>MK Sounds</h1>
        </div>
      </Link>
        <div className='ml-5'>
            <Link to='/'>
        <div className='flex items-center gap-4 mt-16'>
<img className='w-6' src={Home1} alt="" />
<h1>Home</h1>

      </div>
      </Link>
      <Link to='/explore'>
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Explore} alt="" />
<h1>Explore</h1>

      </div>
      </Link>
      <Link to='/saved'>
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Saved} alt="" />
<h1>Saved</h1>

      </div>
      </Link>
      <Link to='/cart'>
      
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Cart} alt="" />
<h1>Cart</h1>

      </div>
      </Link>
      <Link to='/selling'>
      
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Selling} alt="" />
<h1>Selling</h1>

      </div>
      </Link>
      <Link to='/profile'>
      
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Profile} alt="" />
<h1>Profile</h1>

      </div>
      </Link>
      <Link to='/history'>
      
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={History} alt="" />
<h1>History</h1>

      </div>
      </Link>
      <Link to='/contact'>
      
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Contact} alt="" />
<h1>Contact us</h1>

      </div>
      </Link>
      <Link to='/setting'>
      
      <div className='flex items-center gap-4 mt-6'>
<img className='w-6' src={Setting} alt="" />
<h1>Setting</h1>

      </div>
      </Link>

        </div>
        <div className='mt-6 relative'>
            <img src={Frame_1} alt="" />
            <h1 className=' absolute left-3 text-center font-semibold text-white top-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
      
      
     
      
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Home;