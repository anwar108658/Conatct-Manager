import { Box, Button, Container, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import style from './style.module.css'
import { Facebook, LocationOn, Phone, WhatsApp, YouTube } from '@mui/icons-material'

const index = () => {
  return (
    <>
        <section>
            <Stack className={style.contactImage}>
              <Typography color="aqua" sx={{padding:"7rem 1rem",fontSize:{xs:"2rem",sm:"2.3rem",md:"2.5rem",lg:"3rem"}}}>
                Any Question?
              </Typography>
            </Stack>
          <Container sx={{padding:"5rem 1rem"}}>
            <Box sx={{display:"flex",flexDirection:"column",gap:"3rem"}}>
              <Box>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924237.7097540089!2d66.4959539227841!3d25.192983650620572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1726187505964!5m2!1sen!2s" width="100%" height="300px" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              </Box>
              <Box component="form" method='POST' sx={{backgroundColor:"#fff",border:"1px solid #ccc",borderRadius:".5rem"}}>
                <Stack gap="1rem" sx={{flexDirection:{xs:"column",sm:"row"}}}>
                  <Stack flex="1" gap="1rem" padding="1rem .5rem">
                      <TextField variant='standard' label="First Name" name='First Name'/>
                      <TextField variant='standard' label="Last Name" name='Last Name'/>
                      <TextField variant='standard' label="#phone/WhatsApp" type='number' name='Number'/>
                      <TextField variant='standard' label="Email" type='email' name='Email'/>
                      <TextareaAutosize cols="12" minRows="8" placeholder='Message' className={style.TextareaAutosize}/>
                      <Box>
                        <Button variant='contained'>Send</Button>
                      </Box>
                  </Stack>
                  <Stack gap=".5rem" sx={{width:{sm:"250px"},bgcolor:"rgb(5, 139, 197)",color:"#fff",padding:"1rem .5rem"}}>
                    <Typography sx={{display:"flex",alignItems:"center"}}>
                      <Phone color='white' sx={{mt:"3px",mr:"3px"}}/> :
                      02423423432
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"center"}}>
                      <WhatsApp color='white' sx={{mt:"3px",mr:"3px"}}/> :
                      02423423432
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"center"}}>
                      <Facebook color='white' sx={{mt:"3px",mr:"3px"}}/>:
                      http://facebook.com
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"center"}}>
                      <YouTube color='white' sx={{mt:"3px",mr:"3px"}}/>:
                      http://YouTube.com
                    </Typography>
                    <Typography sx={{display:"flex",alignItems:"center"}}>
                      <LocationOn color='white' sx={{mt:"3px", mr:"3px"}}/> :
                      11 g new Karachi Godhra Colony qweqe qweqwe qweqwe qeweqwe
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            </Box>
          </Container>
        </section>
    </>
  )
}

export default index
