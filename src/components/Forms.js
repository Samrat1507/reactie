import React from 'react'

const Forms = () => {
  return (
    <div className='flex flex-col md:flex-row absolute text-center w-full bg-slate-300 justify-evenly '>
      <div className=''>
        Sign Up
        <form className='flex flex-col space-y-2 mt-4 md:mt-0 w-fit mx-auto'>
          <div className='flex space-x-2'>
          <input className='contactInput' placeholder='First Name'/>
          <input className='contactInput' placeholder='Last Name'/>
          </div>
          <input className='contactInput' type="text" placeholder='Email'/>
          <input className='contactInput' type="text" placeholder='Password'/>
          <input className='contactInput' type="text" placeholder='Roll No./Faculty ID'/>
          <input className='contactInput' type="text" placeholder='School affiliated to e.g CSE/IT..'/>
        </form>
      </div>
      <div className=''>
        Login
        <form className='flex flex-col space-y-2 mt-4 md:mt-0 w-fit mx-auto'>
          <input className='contactInput' type="text" placeholder='Email'/>
          <input className='contactInput' type="text" placeholder='Password'/>
        </form>
      </div>
    </div>
  )
}

export default Forms