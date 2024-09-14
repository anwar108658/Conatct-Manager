import React from 'react'
import style from './style.module.css'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { ArrowRightAltOutlined } from '@mui/icons-material'
import heroImage from '../../../image/hero.jpg'
import { Link } from 'react-router-dom'

const index = ({message,image=heroImage}) => {
  return (
    <>
      <section className={style.section}>
        <Container
        sx={{
          padding:{xl:"7rem 0",lg:"5rem 1rem",md:"4rem 1rem",sm:"3rem 1rem",xs:"2rem 1rem"}
        }}
        >
          <Stack direction="row" gap="1rem" sx={{
            // border:"1px solid #ccc",
            boxShadow:"2px 2px 10px 3px #ccc",
            flexDirection:{lg:"row",md:"row",sm:"column",xs:"column-reverse"}
          }}>
            <Stack flex="1"  padding="3rem 5px 3rem 1rem">
              <Typography component="p" color="Aqua" fontSize="1.4rem">{message.heading}</Typography>
              <Typography variant='h2' color="aquamarine">Ideal Shop</Typography>
              <Typography component="p" color="#eee" fontSize="1.1rem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, tempora porro corrupti voluptate pariatur amet velit voluptatum quidem, iusto similique deleniti sunt ducimus eius repellendus tenetur. Sequi dolorem odio nesciunt in cupiditate, quo repudiandae id autem consectetur quaerat veritatis quae voluptatum. Eos, molestiae! In aliquam cupiditate maiores earum odio corporis.</Typography>
              <Box marginTop="1rem">
              <Link to="products">
                <Button variant='contained' color='info' >Visit Shop <ArrowRightAltOutlined fontSize='large'/></Button>
              </Link>
              </Box>
            </Stack>
            <Stack flex="1">
              <img src={image} className={style.heroImage} alt="" />
            </Stack>
          </Stack>
        </Container>
      </section>
    </>
  )
}

export default index