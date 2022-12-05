import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
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
    } else {
      navigate('/login')
    }
  }, [])

  console.log(users)

  return (
    <div>
      <header>
        <img src={logo} alt='' className='w-[15%] p-5' />
      </header>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='w-[480px] h-[72px] bg-darkBlue flex justify-center items-center text-xl text-white'>
          Attendance information
        </h1>

        <div>
          <table className='table'>
            <thead>
              <tr className='text-lg '>
                <th className=''>Date</th>
                <th className=''>Employee Name</th>
                <th className=''>Status</th>
              </tr>
            </thead>
            <tbody>
              {users &&
                Object.keys(users).map((ele, index) => (
                  <tr key={index} className='text-sm '>
                    <td className=''>2022-11-28</td>
                    <td className=''>{users[ele].name}</td>
                    <td
                      className={`${
                        users[ele]['attendance']['2022-11-28'].status ===
                        'present'
                          ? 'active'
                          : users[ele]['attendance']['2022-11-28'].status ===
                            'late'
                          ? 'lazy'
                          : 'inactive'
                      }`}
                    >
                      {users[ele]['attendance']['2022-11-27'].status}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
export default Home
