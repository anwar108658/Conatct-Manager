import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
        <Container sx={{padding:"5rem 0",textAlign:"center",display:"flex",flexDirection:"column",gap:".5rem"}}>
            <Typography variant='h2'>404</Typography>
            <Typography variant='h4'>UH OH! Your'e Lost.</Typography>
            <Typography component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsum. odio iod iooioiio</Typography>
            <Box>                
                <Link to="/">
                <Button variant='contained' color='secondary'>Going to Home</Button>
                </Link>
            </Box>
        </Container>
    </>
  )
}

export default Error
