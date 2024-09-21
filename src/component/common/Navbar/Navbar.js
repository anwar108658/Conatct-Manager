import React, { useState } from "react";
import style from "./Navbar.module.css";
import { Box, Card, Container, IconButton, Typography } from "@mui/material";
import {  Cancel, Menu, Padding, Phone, ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  const handelerToggle = () =>{
    setToggle(!toggle);
  }
  return (
    <>
      <header className={style.header}>
        <Container>
            <Box className={style.head}>
              <Card className={style.logo} sx={{padding:{lg:".2rem .5rem",md:".2rem .4rem",sm:".2rem .3rem",xs:".2rem .2rem"}}}>
                  <ShoppingBag  sx={{fontSize:{lg:"2.3rem",md:"2rem",sm:"2rem",xs:"2rem"}}} />
                  <Typography variant="h5" sx={{fontWeight:"700",color:"royalblue",padding:"4px",fontSize:{lg:"2rem",md:"1.5rem",sm:"1.5rem",xs:"1.3rem"}}}>Ideal Shop</Typography>
              </Card>
              <Box sx={{display:{md:"flex",sm:"none",xs:"none"},flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                <nav className={style.nav}>
                    <Box component="ul" sx={{display:"flex",flexDirection:"row"}} className={style.Box}>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/products'>Products</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                        <li className={style.ShoppingCart}><Link to='/cart'>
                        <ShoppingCart fontSize="large"/>
                        <span className={style.ShoppingCartNum}>1</span>
                        </Link></li>
                    </Box>
                </nav>
              </Box>
              <Box sx={{display:{md:"none",sm:"block"},justifyContent:"center",alignItems:"center"}}>
              <IconButton sx={{zIndex:"2"}} onClick={handelerToggle}>
                {toggle ?<Cancel sx={{color:"white"}} fontSize="large" />:<Menu sx={{color:"white"}} fontSize="large"/>}
              </IconButton>
              </Box>
              <Box 
              sx={{
                display:{md:"none",sm:`${toggle ? "flex":"none"}`,xs:`${toggle ? "flex":"none"}`},
                justifyContent:"center",
                position:"absolute",
                width:"100%",
                height:"100vh",
                top:"0",
                right:"0",
                backgroundColor:"rgb(5, 139, 197)",
                zIndex:"1"
                }}>
                  <nav className={style.reponsiveNav}>
                    <ul>
                        <li><Link onClick={handelerToggle} to='/'>Home</Link></li>
                        <li><Link onClick={handelerToggle} to='/about'>About</Link></li>
                        <li><Link onClick={handelerToggle} to='/products'>Products</Link></li>
                        <li><Link onClick={handelerToggle} to='/contact'>Contact</Link></li>
                        <li className={style.ShoppingCart}><Link onClick={handelerToggle} to='/cart'>
                        <ShoppingCart fontSize="large"/>
                        <span className={style.ShoppingCartNum}>1</span>
                        </Link></li>
                    </ul>
                </nav>
                </Box>
            </Box>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
