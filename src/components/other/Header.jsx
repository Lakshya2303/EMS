import React from 'react'

const Header = ({username}) => {
  return (
    <div className='flex items-center justify-between'>
      <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
      <button className='bg-red-600 text-lg font-medium rounded-full text-white py-2 px-5'>Log Out</button>
    </div>
  )
}

export default Header
