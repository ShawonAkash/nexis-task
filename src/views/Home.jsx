import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useNavigate } from 'react-router-dom'
import { listUsers } from '../actions/userActions'
import logo from '../assets/Vector.svg'

const Home = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const userList = useSelector((state) => state.userList)
  const { loading, error, users } = userList

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (userInfo) {
      dispatch(listUsers())
      // console.log(users);
    } else {
      navigate('/login')
    }
    console.log(users);
  }, [dispatch, userInfo,navigate,users])

  return (
    <div>
      <header>
        <img src={logo} alt='' className='w-[15%] p-5'/>
      </header>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='w-[480px] h-[72px] bg-darkBlue flex justify-center items-center text-xl text-white'>
          Attendance information
        </h1>
        <div>
          <table>
            <thead >
              <tr>
                <th>Date</th>
                <th>Employee Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {/* {users.map((user) => (
              <tr key={user.id}>
                <td>{user[2].id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                  {user.isAdmin ? (
                    <i className='fas fa-check' style={{ color: 'green' }}></i>
                  ) : (
                    <i className='fas fa-times' style={{ color: 'red' }}></i>
                  )}
                </td>
              </tr>
            ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home
