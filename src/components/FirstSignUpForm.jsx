import React, { useState } from 'react'
import arrow from '../assets/Arrow.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {} from '../actions/userActions'

const FirstSignUpForm = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  let navigate = useNavigate()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    if ((firstName.length != 0) & (lastName.length != 0)) {
      navigate(`/signup/2`)

      localStorage.setItem('firstName', firstName)
      localStorage.setItem('lastName', lastName)
    }
  }

  return (
    <form
      onSubmit={submitHandler}
      className='shadow-lg flex flex-col justify-evenly items-center px-16 h-420'
    >
      <h1 className='leading-[24px] text-lg font-semibold'>SignUp Form</h1>
      <input
        type='text'
        placeholder='Write First Name'
        className='w-[368.5px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium'
        onChange={(e) => setFirstName(e.target.value)}
        required
      />

      <input
        type='text'
        placeholder='Write Last Name'
        className='w-[368.5px] border-b border-lightDark outline-none leading-[19.36px] text-sm font-medium '
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <button
        className='py-[15px] px-[28.5px] bg-darkBlue text-white rounded-2xl leading-[19.36px] text-sm font-medium flex'
        type='submit'
      >
        Next Step <img src={arrow} className='ml-2' alt='arrow' />
      </button>
      <p className='text-lightDark'>
        Already have an account?
        <Link to={'/login'} className='text-darkBlue'>
          LOGIN HERE!
        </Link>
      </p>
    </form>
  )
}

export default FirstSignUpForm
