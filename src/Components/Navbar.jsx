import React from 'react'
import TransLogo from '../assets/images/logo/transparentLogo.png'

const Navbar = () => {
  return (
    <div className='fixed mt-5 w-[100vw] flex justify-center items-center z-[10] ' >
        <div className='w-[90%] flex items-center justify-start gap-1 '> 
            <div className='bg-[#2E2F32E0] w-[90px] h-[90px] me-5 flex justify-center items-center text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2' >
              <a className='kmoIMz' href=" ">
                <img src={TransLogo} className='w-[95%] h-[95   %]  ' alt="" />    
            </a>    
            </div>
            <div className='bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2' >
              <a className='kmoIMz' href=" ">Home</a>    
            </div>
            <div className='bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2' >
              <a className='kmoIMz' href=" ">About</a>    
            </div>
            <div className='bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2' >
              <a className='kmoIMz' href=" ">Contact</a>    
            </div>
            <div className='bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2' >
              <a className='kmoIMz' href=" ">Products</a>    
            </div>
            <div className='bg-[#2E2F32E0] text-textGray rounded-[2px]  pt-1 pb-1 ps-3 pe-2' >
              <a className='kmoIMz' href=" ">Get a Quote</a>    
            </div>
                
        </div>
    </div>
  )
}

export default Navbar