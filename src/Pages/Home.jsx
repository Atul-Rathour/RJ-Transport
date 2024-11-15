import React from 'react'
import Banner from '../Home/Banner'
import Page1 from '../Home/Page1'
import AboutCompany from '../Home/AboutCompany'
import Goods from '../Home/Goods'
import WhyUs from '../Home/WhyUS'
import LocomotiveImage from '../Components/LocomotiveImage'
import Blogs from '../Home/Blogs'

const Home = () => {
  return (
    <div>
        <Page1/>
        <Banner/>
        <AboutCompany/>
        <Blogs/>
        <Goods/>
        <WhyUs/>

    </div>
  )
}

export default Home