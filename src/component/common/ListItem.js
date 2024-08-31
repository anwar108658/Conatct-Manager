import React from "react";
import { Avatar, Box, Card, Container, IconButton, ListItem as MuiLi, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import { Delete, Edit, EmailOutlined, Image, Phone, PhoneAndroid } from '@mui/icons-material'
import image from '../../image/unnamed.jpg'
import style from './ListItem.module.css'
const ListItem = ({firstName,lastName,email,contact}) => {
  return (
    <>
      <Card variant="outlined">
        <MuiLi
          secondaryAction={
            <Stack>
              <IconButton edge="end">
                <Edit color="info" />
              </IconButton>
              <IconButton edge="end">
                <Delete color="warning" />
              </IconButton>
            </Stack>
          }
        >
          <ListItemAvatar>
            <Avatar sx={{ width: "3rem", height: "3rem" }} src={image} />
          </ListItemAvatar>
          <ListItemText
            primary={<h4>{firstName} {lastName}</h4>}
            secondary={
              <Typography component="p" variant="body2" marginTop=".3rem">
                <Stack
                  direction="row"
                  gap="1rem"
                  className={style.secondaryList}
                >
                  <Box sx={{ display: "flex", gap: ".3rem" }}>
                    <Box>
                      <PhoneAndroid color="primary" />
                    </Box>
                    <Box component="span">{contact}</Box>
                  </Box>
                  <Box sx={{ display: "flex", gap: ".3rem" }}>
                    <Box>
                      <EmailOutlined color="primary" />
                    </Box>
                    <Box component="span">{email}</Box>
                  </Box>
                </Stack>
              </Typography>
            }
          />
        </MuiLi>
      </Card>
    </>
  );
};

export default ListItem;
