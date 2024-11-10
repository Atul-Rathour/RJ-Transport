import React from 'react'
import Banner from '../Home/Banner'
import Page1 from '../Home/Page1'
import AboutCompany from '../Home/AboutCompany'
import Goods from '../Home/Goods'
import WhyUs from '../Home/WhyUS'

const Home = () => {
  return (
    <div>
        <Page1/>
        <Banner/>
        <AboutCompany/>
        <Goods/>
        <WhyUs/>
        {/* <Lab/> */}
    </div>
  )
}

export default Home