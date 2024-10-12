import { Add, Delete, Remove } from '@mui/icons-material'
import { Box, Container, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import {useCartContext} from "../../Context/AddCartProduct"

const Index = ({amount,id,color,image,name,price}) => {
    let {deleteItem,cart} = useCartContext()
    let [updateAmount,setUpdateAmount] = useState(amount);
    let incrementDecrementHandel = (param) => {
        if (param === "p") {
            setUpdateAmount(updateAmount + 1)
        }else if (param === "m") {
            setUpdateAmount(updateAmount - 1)
        }
    }
  return (
      <Stack direction="row" justifyContent="space-between" padding="1rem 0">
        <Stack direction="row" gap=".3rem" sx={{width:"200px",textAlign:"center",flexWrap:"wrap"}}> 
            <Stack justifyContent="center">
                <Box src={image} width="50px" component="img"/>
            </Stack>
            <Stack>
                <Typography sx={{fontSize:".9rem",fontWeight:"600"}}>{name}</Typography>
                <Typography>{color}</Typography>
            </Stack>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center",display:{xs:"none",sm:"flex"}}}>
            <Typography>{price}</Typography>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center"}}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <IconButton onClick={() => incrementDecrementHandel("m")}>
                <Remove fontSize="small"/>
                </IconButton>
                <Typography sx={{textAlign:"center"}}>{updateAmount}</Typography>
                <IconButton onClick={() => incrementDecrementHandel("p")}>
                <Add fontSize="small"/>
                </IconButton>
            </Stack>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center",display:{xs:"none",sm:"flex"}}}>
            <Typography>{price*updateAmount}</Typography>
        </Stack>
        <Stack sx={{width:"200px",textAlign:"center"}}>
            <Box>
                <IconButton onClick={() => deleteItem(id)}>
                    <Delete color='error'/>
                </IconButton>
            </Box>
        </Stack>
    </Stack>
  )
}

export default Index