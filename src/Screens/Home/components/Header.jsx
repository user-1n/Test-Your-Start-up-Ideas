import React from 'react'
import logo from './../../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigation =useNavigate();
  return (
    <div className='flex flex-row justify-between items-center
    shadow-lg p-4 border rounded-lg'>
        <button className='btn btn-primary btn-sm md:btn-md'  onClick={()=>navigation('/new')}
          >+ New Idea</button>
        <h2 className='font-bold text-sm md:text-2xl'>Top 20 Ideas</h2>    
         <div className='flex gap-2 items-center'>
           <img src={logo}
          className='w-20 h-20 rounded-full'
          />
          <h2 className='font-bold text-sm hidden md:block'> By Piyush</h2>
         </div>
    </div>
  )
}

export default Header