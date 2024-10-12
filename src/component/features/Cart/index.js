import React from 'react'
import {useCartContext} from "../../Context/AddCartProduct"
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import CartItem from "../../common/CartItem"
import { Link } from 'react-router-dom'

const Index = () => {
  let headerArr = ["Item","Price","Quantity","SubTotal","Remove"]
  let {cart,clearItem} = useCartContext()
  console.log(cart)
  return (
    <Container sx={{maxWidth:{xs:"1000px"},padding:"3rem 1rem"}}>
      <Stack> 
        <Stack direction="row" >
          {headerArr.map((item,index) => (
            <Stack key={index} sx={{width:"200px",textAlign:"center"}}>
              <Typography sx={{display:{xs:item == "Price" || item == "SubTotal"?"none":"block",sm:"block"}}}>{item}</Typography>
            </Stack>
          ))}
        </Stack>
        <Box component="hr" sx={{borderColor:"#058bc5"}} margin=".6rem 0"/>
        <Stack>
          {
            cart.map((item,index) => (
              <>
                <CartItem key={index} {...item}/>
                <Box key={Math.random()} component="hr" sx={{borderColor:"#058bc5"}} />
              </>
            ))
          }
        </Stack>
        <Stack marginTop="1rem" direction="row" justifyContent="space-between">
          <Link to="/products">
            <Button variant='outlined' sx={{color:"#058bc5"}}>Continue Shopping</Button>
          </Link>
          <Box>
            <Button variant='outlined' color='error' onClick={clearItem}>Clear Item</Button>
          </Box>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Index