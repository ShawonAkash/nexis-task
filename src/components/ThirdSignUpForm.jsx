import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

const ThirdSignUpForm = () => {
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    if (password.length != 0) {
      const firstName = localStorage.getItem('firstName')
      const lastName = localStorage.getItem('lastName')
      const phone_number = localStorage.getItem('number')
      const email = localStorage.getItem('email')
      dispatch(register(firstName, lastName, phone_number, email, password))
    } else {
    }
  }
  return (
    <form
      onSubmit={submitHandler}
      className='shadow-lg flex flex-col justify-evenly items-center px-16'
    >
      <h1 className='leading-[24px] text-lg font-semibold'>SignUp Form</h1>
      <div className='flex flex-col'>
        <input
          type='password'
          placeholder='Write Password'
          className='w-[368.5px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium '
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className='leading-[19.36px] text-lightDark text-sm font-medium'>
          Your password must be 8 character
        </span>
      </div>

      <div className='flex  items-center w-[368.5px]'>
        <Link to={'/signup/2'} className='text-lightDark '>
          Back
        </Link>
        <button
          type='submit'
          className='py-[15px] px-[28.5px] bg-darkBlue text-white rounded-2xl leading-[19.36px] text-sm font-medium flex ml-14'
        >
          Sign Up
        </button>
      </div>
      <p className='text-lightDark'>
        Already have an account?{' '}
        <Link to={'/login'} className='text-darkBlue'>
          LOGIN HERE!
        </Link>
      </p>
    </form>
  )
}

export default ThirdSignUpForm
