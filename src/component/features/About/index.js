import React from 'react'
import HeroSection from "../../common/HeroSection"
import heroImage from '../../../image/About3.png'

const index = () => {
  const message = {
    heading:"About Know"
  }
  return (
    <>
      <HeroSection message={message} image={heroImage}/>
    </>
  )
}

export default index