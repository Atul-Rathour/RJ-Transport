import React from 'react'
import ExploreBox from './ExploreBox'

const Goods = () => {
  return (
    <div className='mt-[12rem]' >
      <div className='flex w-[100vw] items-center flex-col '  >
        <p className='text-textGray uppercase text-[2rem] mobile:text-[1.6rem] ' >What we deal with !</p>
        <p className='text-textGray capitalize text-[1.5rem] '> Our major products </p>
      </div>

     <ExploreBox/>
    </div>

  )
}

export default Goods