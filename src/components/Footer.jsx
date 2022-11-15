import React from 'react'
import { Link } from 'react-router-dom'
Link

const Footer = () => {
  return (
    <footer className='flex flex-col px-[34px] xl:px-[187px] space-y-5 mb-9 xl:mb-20 mt-[60px]'>
<Link to ='/friends-referred' href='' className='text-purple text-heading4 '>Friend's Who Enrolled</Link>
<a href='' className='text-purple text-heading4 cursor-pointer'>Terms & Conditions</a>

    </footer>
  )
}

export default Footer