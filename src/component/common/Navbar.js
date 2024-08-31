import React from "react";
import style from "./Navbar.module.css";
import { Card, Container, Typography } from "@mui/material";
import {  Phone } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className={style.header}>
        <Container>
            <div className={style.head}>
            <Card className={style.logo}>
                <Phone fontSize="large" />
                <Typography variant="h5" sx={{fontWeight:"700",color:"royalblue",padding:"4px"}}>Contact Manager</Typography>
            </Card>
            <nav className={style.nav}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/conatct'>About</Link></li>
                    <li><Link to='/conatct'>Login</Link></li>
                    <li><Link to='/conatct'>Register</Link></li>
                </ul>
            </nav>
            </div>
        </Container>
      </header>
    </>
  );
};

export default Navbar;
