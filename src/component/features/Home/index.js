import React from 'react'
import HeroSection from "../../common/HeroSection"
import FeatureServices from "../../common/FeatureServices"
import Services from "../../common/Services"
import Company from "../../common/company"
import heroImage from '../../../image/hero.jpg'

const index = () => {
  const message = {
    heading:"Welcome To Our"
  }
  return (
    <>
    <HeroSection message={message} image={heroImage}/>
    <FeatureServices />
    <Services/>
    <Company/>
    </>
  )
}

export default index