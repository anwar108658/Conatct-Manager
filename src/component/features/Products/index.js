import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import Card from "../../common/Card"
import data from '../../../Data'
import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <Container sx={{padding:"5rem 1rem"}}>
      <Stack direction="row">
        <Stack flex="1">
          
        </Stack>
        <Stack flex="3">
          <Stack></Stack>
          <Stack direction="row" gap="1rem" justifyContent="space-evenly" flexWrap="wrap">
          {
           data && data.length? data.map((item) => (
              <Link to={`/productsDetail/${item.id}`}>
                <Card data={item}/>
              </Link>
            )):
            <Typography>
              Curently Data Not Available
            </Typography>
          }
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}

export default Index