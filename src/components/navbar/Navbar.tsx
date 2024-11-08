import React from 'react'
import NavbarItems from './NavbarItems'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 w-full  h-24 flex items-center justify-between px-6  z-50'>
      <img src="/Logo.png" alt="Logo" className='w-[80px] bg-white rounded-full' />
      <div className='w-[70%] p-4 bg-black bg-opacity-70  backdrop-blur-2xl shadow-lg rounded-2xl flex items-center justify-between m-auto'>
      <NavbarItems href={'/'} txt={'About'}/>
      <NavbarItems href={'/'} txt={'Projects'}/>
      <NavbarItems href={'/'} txt={'On Versel'}/>
      </div>
      </div>
  )
}

export default Navbar