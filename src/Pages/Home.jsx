import React from 'react'
import Banner from '../Home/Banner'
import Page1 from '../Home/Page1'
import AboutCompany from '../Home/AboutCompany'
import Goods from '../Home/Goods'
import WhyUs from '../Home/WhyUS'
import LocomotiveImage from '../Components/LocomotiveImage'

const Home = () => {
  return (
    <div>
        <Page1/>
        <Banner/>
        <AboutCompany/>
        {/* <LocomotiveImage/> */}
        <Goods/>
        <WhyUs/>

    </div>
  )
}

export default Home