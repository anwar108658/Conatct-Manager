import { Email, Facebook, Instagram, Phone, Subscript, YouTube } from "@mui/icons-material";
import { Box, Button, colors, Container, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import style from "./index.module.css"

const index = () => {
  return (
    <>
        <Container sx={{ padding: "5rem 1rem 0 1rem",position:"relative" }}>
      <Box
        sx={{
          maxWidth: "750px",
          margin: "0 auto",
          boxShadow: "0 0 1px 5px #eee",
          padding: "1rem 2rem",
          borderRadius: ".5rem",
          marginBottom:"-35px",
          bgcolor:"#fff",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>
            Ready to Get Started? <br /> talk to us Today
          </Typography>
          <Box>
            <Link to="/contact">
                <Button variant="contained" color="secondary">
                GET STARTED
                </Button>
            </Link>
          </Box>
        </Stack>
      </Box>
    </Container>
      <Box component="footer" sx={{bgcolor:"rgb(2, 19, 95)",color:"#fff",paddingTop:"4rem"}}>
      <Container>
        <Stack gap="2rem" sx={{flexDirection:{xs:"column",sm:"row"}}}>
            <Stack direction="row" flex="1">
                <Stack flex="1" gap="1rem">
                    <Typography variant="h7">Ideal Shop</Typography>
                    <Typography component="p" fontSize=".9rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, totam.</Typography>
                </Stack>
                <Stack flex="1" gap="1rem">
                    <Typography variant="h7">Subscribe to get important Update</Typography>
                    <TextField size="small" type="email" placeholder="Your Email" sx={{bgcolor:"white",color:"pink"}}/>
                    <Button variant="contained">Subscribe</Button>
                </Stack>
            </Stack>
            <Stack direction="row" flex="1">
                <Stack flex="1" gap="1rem">
                    <Typography variant="h7">Follow Us</Typography>
                    <Stack direction="row" gap="1rem">
                        <Link><Instagram sx={{color:"pink"}}/></Link>    
                        <Link><Facebook sx={{color:"pink"}}/></Link>    
                        <Link><YouTube sx={{color:"pink"}}/></Link>
                    </Stack>
                </Stack>
                <Stack flex="1" gap="1rem">
                    <Typography variant="h7">Call Us</Typography>
                     <Typography sx={{display:"flex",alignItems:"center"}}>
                      <Phone sx={{mt:"3px",mr:"3px",color:"pink"}}/>
                      <Link to="tel:02423423432" className={style.link}>02423423432</Link>
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
        <hr className={style.hr} />
        <Stack direction="row">
            <Typography component="p" flex="1">
                @{new Date().getFullYear()} Ideal Shop. All right Resserve
            </Typography>
            <Typography component="p" flex="1">
                Privacy and policy <br />
                Terms And Condition
            </Typography>
        </Stack>
      </Container>
      </Box>
    </>
  );
};

export default index;
