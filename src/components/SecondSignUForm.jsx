import React, { useState, useEffect } from 'react'
import arrow from '../assets/Arrow.svg'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/userActions'

const SecondSignUForm = () => {
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if ((number.length != 0) & (email.length != 0)) {
      navigate('/signup/3')
      localStorage.setItem('number', number)
      localStorage.setItem('email', email)
    }
  }
  return (
    <form
      onSubmit={submitHandler}
      className='shadow-lg flex flex-col justify-evenly items-center px-16'
    >
      <h1 className='leading-[24px] text-lg font-semibold'>SignUp Form</h1>

      <div>
        <input
          type='text'
          placeholder='+880'
          className='w-[90px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium mr-1'
          onChange={(e) => setNumber(e.target.value)}
        />
        <input
          type='text'
          placeholder='1xxxxxxx'
          className='w-[270px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium '
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>

      <input
        type='text'
        placeholder='Write Email Address'
        className='w-[368.5px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium'
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className='flex  items-center w-[368.5px]'>
        <Link to={'/signup'} className='text-lightDark '>
          Back
        </Link>
        <button
          type='submit'
          className='py-[15px] px-[28.5px] bg-darkBlue text-white rounded-2xl leading-[19.36px] text-sm font-medium flex ml-14'
        >
          Next Step <img src={arrow} className='ml-2' alt='' />
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

export default SecondSignUForm
