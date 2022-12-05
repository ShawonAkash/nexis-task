import React, { useEffect } from 'react'
import logo from '../assets/Vector.svg'
import heroBg from '../assets/herobg.png'
import { Link, Outlet, useLocation } from 'react-router-dom'

const View = () => {
  useEffect(() => {}, [])
  const location = useLocation()
  return (
    <div className='flex justify-evenly  mt-10 h-[520px]'>
      <div className=''>
        <img src={logo} alt='logo' className='h-[60px] w-[164.21px]' />
        <img src={heroBg} alt='logo' className='h-[437px] w-[612px] m-auto' />
        {location.pathname === '/' ? (
          <Link
            to={'/login'}
            className='w-[380px] h-[52px] bg-darkBlue flex justify-center items-center text-xl text-white m-auto'
          >
            Go To Login
          </Link>
        ) : null}
      </div>
      <div className='p-5 flex'>
        <Outlet />
      </div>
    </div>
  )
}

export default View
