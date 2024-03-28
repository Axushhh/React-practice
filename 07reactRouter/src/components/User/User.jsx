import React from 'react'
import { useParams } from 'react-router-dom'

function User() { // the userid is passed in main.jsx inside the route
    const {userid} = useParams()
  return (
    <div className='bg-orange-700 text-white text-3xl p-4 text-center'>User : {userid} </div>
  )
}

export default User