import React from 'react'
import style from './List.module.css'
import ListItem from './ListItem'
import { List as Muilul, TextField, Typography} from '@mui/material'
import { Search } from '@mui/icons-material'

const List = ({contactsArr}) => {
  return (
    <>
        <Muilul className={style.muiul} sx={{position:"relative"}}>
        <TextField variant='filled' label='Search' sx={{position:"sticky",top:"0",zIndex:"1",backgroundColor:"#fff"}}/>
            {contactsArr && contactsArr.length ?(
                contactsArr.map((data) => (
                    <ListItem 
                    key = {data.id}
                    firstName = {data.firstName}
                    lastName = {data.lastName}
                    email = {data.email}
                    contact = {data.contact}
                    />
                ))
            ):(
                <Typography variant='body2'>Data Not Found</Typography>
            )}
        </Muilul>
    </>
  )
}

export default List
