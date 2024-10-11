import React from 'react'
import {useCartContext} from "../../Context/AddCartProduct"
import { Box, Container, Stack, Typography } from '@mui/material'
import CartItem from "../../common/CartItem"

const Index = () => {
  let headerArr = ["Item","Price","Quantity","SubTotal","Remove"]
  let {cart} = useCartContext()
  console.log(cart)
  return (
    <Container sx={{maxWidth:{xs:"1000px"},padding:"3rem 1rem"}}>
      <Stack> 
        <Stack direction="row" >
          {headerArr.map((item,index) => (
            <Stack key={index} sx={{width:"200px",textAlign:"center"}}>
              <Typography >{item}</Typography>
            </Stack>
          ))}
        </Stack>
        <Box component="hr" sx={{borderColor:"#058bc5"}} margin=".6rem 0"/>
        <Stack>
          {
            cart.map((item,index) => (
              <>
                <CartItem key={index} {...item}/>
                <Box component="hr" sx={{borderColor:"#058bc5"}} />
              </>
            ))
          }
        </Stack>
      </Stack>
    </Container>
  )
}

export default Index