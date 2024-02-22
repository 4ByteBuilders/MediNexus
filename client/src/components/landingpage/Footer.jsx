import React from 'react'

const Footer = () => {
  return (
    <div className='grid grid-cols-11 m-6'>
        <div className='col-span-3'>
         <div className='text-3xl font-bold'>
            Medi<span style={{color:'#4d7a6d'}}>Nexus</span>
         </div>
         <div className='text-1xl font-normal'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut aliqua.
            </p>
         </div>
         <div className='my-5'>
        <div className='flex flex-row'>

         <div className="w-7 mr-4">
            <img src='/icons/linkedin.png'/>
            </div>
         <div className="w-7 mr-4">
            <img src='/icons/Instagram.png'/>
            </div>
         <div className="w-7 mr-4">
            <img src='/icons/twitter.png'/>
            </div>
         </div>
        </div>
      </div>
      <div className='col-span-1'>
      </div>
      <div className='col-span-2 m-3'>
        <div className='text-[20px] font-bold'>
            Menu
        </div>
        <div className='text-1xl font-normal leading-8 place-items-center'>
            <ul>
                <li>Account</li>
                <li>Safe Haven</li>
                <li>About Us</li>
                <li>Blog</li>
            </ul>
        </div>
      </div>
      <div className='col-span-2 m-3'>
      <div className='text-[20px] font-bold'>
            Company
        </div>
        <div className='text-1xl font-normal leading-8'>
            <ul>
                <li>Management</li>
                <li>Our story</li>
                <li>Career</li>
                <li>Paretnership</li>
                <li>Privacy Policy</li>
                <li>Cookie policy</li>
            </ul>
        </div>
      </div>
      <div className='col-span-2 m-3'>
      <div className='text-[20px] font-bold'>
            Help
        </div>
        <div className='text-1xl font-normal leading-8'>
            <ul>
                <li>FAQs</li>
                <li>Support Center</li>
                <li>Contact Us</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer