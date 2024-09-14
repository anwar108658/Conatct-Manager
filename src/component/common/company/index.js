import React from 'react'
import style from "./style.module.css";
import company1 from '../../../image/company1.png'
import company2 from '../../../image/company2.png'
import company3 from '../../../image/company3.png'
import company4 from '../../../image/company4.png'
import company5 from '../../../image/company5.png'
import { Box, Container, Stack, Typography } from '@mui/material'

const index = () => {
    const CompanyLogo = [
        {image:company1},
        {image:company2},
        {image:company3},
        {image:company4},
        {image:company5},
    ]

  return (
    <>
        <section className={style.section}>
            <Container sx={{padding:"5rem 1rem"}}>
                <Stack direction="row" justifyContent="center" marginBottom="2.7rem">
                    <Typography component="p" color="#eee" fontSize="1.5rem" fontWeight="500">
                        Trusted by 1000+ Companies
                    </Typography>
                </Stack>
                <Stack justifyContent="space-between" alignItems="center" sx={{gap:{md:"3rem",sm:"2rem",xs:"1rem"},flexDirection:{md:"row",sm:"row",xs:"column"}}}>
                    {CompanyLogo.map((item) => (
                        <Stack flex="1" alignItems="center" justifyContent="center" className={style.Box}>
                            <img className={style.img} src={item.image} alt="" />  
                        </Stack>
                    ))}
                </Stack>
            </Container>
        </section>
    </>
  )
}

export default index
