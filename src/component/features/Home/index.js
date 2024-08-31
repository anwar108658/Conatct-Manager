import React from 'react'
import Form from '../../common/Form'
import { Avatar, Box, Card, Container, IconButton, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import style from './style.module.css'
import List from '../../common/List'

const Index = () => {
  const contactsArr = [
    {
      id: 1,
      firstName: "xyz",
      lastName: "thomas",
      email: "xyz@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 2,
      firstName: "xyz",
      lastName: "thomas",
      email: "xyz@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 3,
      firstName: "xyz",
      lastName: "thomas",
      email: "xyz@email.com",
      contact: "+92 333 333 3333",
    },
    {
      id: 4,
      firstName: "xyz",
      lastName: "thomas",
      email: "xyz@email.com",
      contact: "+92 333 333 3333",
    },
    
  ];
  return (
    <>
      <header className={style.header}>
        <Typography variant='h4' component='h5' className={style.mhead}>Manage your contacts in an easy way</Typography>
      </header>
      <main>
        <Container>
            <Stack direction="row" margin="3.5rem 0" gap="2rem">
              <Box flex="1">
                <Form />
              </Box>
              <Box flex="1" sx={{padding:".5rem",boxShadow:"2px 2px 10px 3px #ccc",height:"374px",overflowY:"auto",borderRadius:".5rem"}}>
                <List contactsArr={contactsArr}/>    
              </Box>
            </Stack>
        </Container>
      </main>
    </>
  )
}

export default Index
