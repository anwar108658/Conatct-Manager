import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Card from "../../common/Card"
import data from '../../../Data'
import { Link } from 'react-router-dom'
import {useFilterContext} from "../../Context/filterProduct"
import { GridView, List } from '@mui/icons-material'

const Index = () => {
  const [toggle,setToggle] = useState(true);
  const toggleHandel = (e) => {
    if (e === "grid") {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }
  const {products} = useFilterContext()
  console.log(products)
  return (
    <Container sx={{padding:"3rem 1rem"}}>
      <Stack direction="row">
        <Stack flex="1">
          
        </Stack>
        <Stack flex="3" gap='1rem'>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row">
              <IconButton onClick={() => toggleHandel("grid")}>
                <GridView/>
              </IconButton>
              <IconButton onClick={() => toggleHandel("list")}>
                <List/>
              </IconButton>
            </Stack>
            <Stack>dropdown</Stack>
          </Stack>
          {toggle && <Stack direction="row" gap="1rem" justifyContent="space-evenly" flexWrap="wrap">
          {
          products && products.length? products.map((item,index) => (
              <Link key={index} to={`/productsDetail/${item.id}`}>
                <Card data={item}/>
              </Link>
            )):
            <Typography>
              Curently Data Not Available
            </Typography>
          }
          </Stack>}
          {!toggle && <Stack gap="1rem">
          {
          products && products.length? products.map((item,index) => (
              
              <Stack direction="row" gap="2rem">
                <Stack sx={{maxWidth:"250px"}}>
                  <Box sx={{width:"100%"}} src={item.image} component="img"/>
                </Stack>
                <Stack justifyContent="space-between">
                  <Typography variant='h6'>{item.name}</Typography>
                  <Typography variant='body1'>Description: {item.description && item.description.split(" ").slice(0, 10).join(" ")}</Typography>
                  <Typography variant='body2'>Company :<span style={{color:"green"}}>{item.company}</span></Typography>
               <Link key={index} to={`/productsDetail/${item.id}`}>
                <Button sx={{padding:".2rem .7rem"}} variant='contained' color='success'>Read more</Button>
              </Link> 
                </Stack>
              </Stack>
            )):
            <Typography>
              Curently Data Not Available
            </Typography>
          }
          </Stack>}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Index