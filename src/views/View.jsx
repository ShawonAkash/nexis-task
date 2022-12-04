import React, { useEffect } from 'react'
import logo from '../assets/Vector.svg'
import heroBg from '../assets/herobg.png'
import {
  Outlet,
} from 'react-router-dom'

const SignUpView = () => {
  useEffect(() => {}, [])

  return (
    <div className='flex justify-evenly  mt-10 h-[520px]'>
      <div className=''>
        <img src={logo} alt='logo' className='h-[60px] w-[164.21px]' />
        <img src={heroBg} alt='logo' className='h-[437px] w-[612px] ml-14' />
      </div>
      <div className='p-5 flex'>
        <Outlet />
      </div>
    </div>
  )
}

export default SignUpView
