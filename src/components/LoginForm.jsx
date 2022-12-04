/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const LoginForm = () => {
  const [email, setEmail] = useState('abc@example.com')
  const [password, setPassword] = useState('SuperSecretPassword')
  let navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin


  useEffect(() => {
    if (userInfo) {
      navigate('/home')
    }
  }, [ userInfo, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(email, password))
  }

  return (
    <form
      onSubmit={submitHandler}
      className='shadow-lg flex flex-col justify-evenly items-center px-16'
    >
      <h1 className='leading-[24px] text-lg font-semibold'>Log in Form</h1>
      <input
        type='email'
        placeholder='Write Email Address'
        className='w-[368.5px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium'
      />
      <div className='flex flex-col'>
        <input
          type='password'
          placeholder='Write Password'
          className='w-[368.5px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium '
        />
        <span className='leading-[19.36px] text-lightDark text-sm font-medium'>
          Your password must be 8 character
        </span>
      </div>
      <button className='py-[15px] px-[28.5px] bg-darkBlue text-white rounded-2xl leading-[19.36px] text-sm font-medium'>
        Log in
      </button>
      <p className='text-lightDark'>
        Don’t have an account?{' '}
        <Link to={'/signup'} className='text-darkBlue'>
          SIGNUP HERE!
        </Link>
      </p>
    </form>
  )
}

export default LoginForm
