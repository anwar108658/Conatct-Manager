import { Delete } from '@mui/icons-material'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'

const index = ({amount,id,color,image,name,price}) => {
    // console.log(param)
  return (
    <Stack direction="row" justifyContent="space-between" padding="1rem 0">
        <Stack direction="row" gap=".3rem" sx={{width:"200px",textAlign:"center"}}> 
            <Stack justifyContent="center">
                <Box src={image} width="50px" component="img"/>
            </Stack>
            <Stack>
                <Typography sx={{fontSize:".9rem",fontWeight:"600"}}>{name}</Typography>
                <Typography>{color}</Typography>
            </Stack>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center"}}>
            <Typography>{price}</Typography>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center"}}>
            <Typography>{amount}</Typography>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center"}}>
            <Typography>{price*amount}</Typography>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center"}}>
            <Box>
                <IconButton>
                    <Delete color='error'/>
                </IconButton>
            </Box>
        </Stack>
    </Stack>
  )
}

export default index