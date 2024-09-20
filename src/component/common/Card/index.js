import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'

const index = ({data}) => {
  return (
    <Card variant='outlined' sx={{width:"200px",position:"relative"}}>
        <Stack direction="row" justifyContent="center">
            <Box src={data.image} component="img" sx={{width:"150px",aspectRatio:"1"}} />
        <Box
        sx={{
            position:"absolute",
            backgroundColor:"rgb(17, 139, 200)",
            color:"#fff",
            border:"2px solid #ccc",
            padding:".3rem .6rem",
            top:"1rem",
            left:"3px",
        }}
        >{data.category}</Box>
        </Stack>
        <CardContent>
            <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
                <Typography component="p" sx={{color:"#000"}}>{data.name}</Typography>
                <Typography component="p" sx={{color:"green"}}>{data.price}</Typography>
            </Stack>
        </CardContent>
    </Card>
  )
}

export default index
