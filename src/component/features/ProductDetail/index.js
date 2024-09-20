import React from 'react'
import {useParams} from "react-router-dom"
import data from '../../../Data';
import { Avatar, Box, Container, Stack, Typography } from '@mui/material';
import { DeliveryDining, Flag, Recycling, Shield } from '@mui/icons-material';
import ReviewStars from "../../common/ReviewStars";
import AddToCart from "../../common/AddToCart"

const Index = () => {
  const {id} = useParams();
  const dataHandel = data.filter((item) => {
    return item.id === id;
  })
  // console.log(dataHandel)
  return (
    <Container sx={{padding:"5rem 1rem"}}>
       <Stack direction="row" gap="3rem">
        <Stack flex="1" justifyContent="center">
          <Box src={dataHandel[0].image} component="img"></Box>
        </Stack>
        {dataHandel[0]? <Stack gap=".5rem" flex="2">
          <Typography variant='h3'>{dataHandel[0].name}</Typography>
          <ReviewStars stars={dataHandel[0].stars} reviews={dataHandel[0].reviews} ></ReviewStars>
          <Typography component="p">MRP:
            <del>{dataHandel[0].price + 5000}</del>
          </Typography>
          <Typography component="p">Deal of The days: {dataHandel[0].price}</Typography>
          <Typography component="p">Description: {dataHandel[0].Description}</Typography>
          <Stack direction="row" gap="1rem" sx={{borderBottom:"1px solid #ddd"}}>
            <Stack alignItems="center">
              <Avatar sx={{backgroundColor:"#eee"}}>
                <DeliveryDining sx={{color:"#000"}}/>
              </Avatar>
              <Typography component="p" color="royalblue">free Delivery</Typography>
            </Stack>
            <Stack alignItems="center">
              <Avatar sx={{backgroundColor:"#eee"}}>
                <Shield sx={{color:"#000"}}/>
              </Avatar>
              <Typography component="p" color="royalblue">2 years Warranty</Typography>
            </Stack>
            <Stack alignItems="center">
              <Avatar sx={{backgroundColor:"#eee"}}>
                <Flag sx={{color:"#000"}}/>
              </Avatar>
              <Typography component="p" color="royalblue">free Delivery</Typography>
            </Stack>
            <Stack alignItems="center">
              <Avatar sx={{backgroundColor:"#eee"}}>
                <Recycling sx={{color:"#000"}}/>
              </Avatar>
              <Typography component="p" color="royalblue">30 days reChange</Typography>
            </Stack>
          </Stack>
              <Typography component="p" color={dataHandel[0].stock > 0 ? "green":"red"}>Available:{dataHandel[0].stock > 0 ? "In Stock":"Not Available"}</Typography>
              <Typography component="p">ID : {dataHandel[0].id}</Typography>
              <Typography component="p">Brand : {dataHandel[0].company}</Typography>
              <hr />
              {dataHandel[0].stock > 0 && <AddToCart productsDetail={dataHandel[0]}/>}
        </Stack>:""}
       </Stack>
    </Container>
  )
}
export default Index