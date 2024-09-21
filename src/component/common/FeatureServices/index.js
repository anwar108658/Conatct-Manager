import { Container, Stack, Typography } from '@mui/material'
import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
import data from '../../../Data'
import Card from "../../common/Card"

const index = () => {

  const DataHandel = data.filter((item) => {
    return item.features === true 
  })


  return (
    <>
        <section className={style.section}>
          <Container sx={{padding:"5rem 1rem"}}>
              <Stack gap="3rem">
                <Stack>
                    <Typography variant='h5' fontWeight="600">Our feature Services</Typography>
                </Stack>
                <Stack direction="row" justifyContent="space-evenly" gap="3rem" flexWrap="wrap">
                {DataHandel && DataHandel.length? DataHandel.map((item) => (
                  <Link key={item.id} className={style.a} to={`/productsDetail/${item.id}`}>
                    <Card data={item}/>
                  </Link>
                )):
                <Typography>Data Not Found</Typography>
                }
                </Stack>
              </Stack>
          </Container>
        </section>
    </>
  )
}

export default index
