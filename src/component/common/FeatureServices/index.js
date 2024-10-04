import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import style from "./style.module.css"
import { Link } from 'react-router-dom'
import data from '../../../Data'
import Card from "../../common/Card"
import Search from "../../../image/search.gif"
import {useProductContext} from "../../Context/ContextProduct"

const Index = () => {

  const {isloading,featureProducts} = useProductContext()
  console.log(featureProducts)
  const DataHandel = featureProducts


  return (
    <>
        <section className={style.section}>
          <Container sx={{padding:"5rem 1rem"}}>
              <Stack gap="3rem">
              {isloading && <Stack>
                <Box component="img" sx={{width:"150px"}} src={Search}></Box>
              </Stack>}
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

export default Index
