import React from 'react'
import HeroSection from "../../common/HeroSection"
import heroImage from '../../../image/About3.png'
import {useProductContext} from '../../Context/ContextProduct'
import data from '../../../Data'

const Index = () => {

  // const {name} = useProductContext()

  const message = {
    heading:"About Know"
  }
  return (
    <>
      <HeroSection message={message} image={heroImage}/>
    </>
  )
}

export default Index