import { BusAlertOutlined, DeliveryDining, Money, Payment, Shield } from "@mui/icons-material";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import React from "react";
import style from "./style.module.css"

const index = () => {
  return (
    <section>
      <Container sx={{padding:"5rem 1rem"}}>
        <Stack  gap="2rem" sx={{flexDirection:{md:"row",sx:"column"}}}>
          <Stack
            flex="1"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              padding: "3rem .5rem",
              bgcolor: "#eee",
              borderRadius: ".5rem",
              border:"2px solid royalblue"
            }}
          >
            <Avatar
              sx={{ backgroundColor: "#fff", width: "70px", height: "70px" }}
            >
              <DeliveryDining color="primary" fontSize="large" />
            </Avatar>
            <Typography component="p" fontSize="1.1rem">
              Super Fast Delivery
            </Typography>
          </Stack>
          <Stack flex="1" direction="column" gap="2rem">
          <Stack direction="row"
                sx={{
                //   justifyContent:"center",
                  alignItems:"center",
                  gap:".5rem",
                  padding: "1rem .5rem",
                  bgcolor: "#eee",
                  borderRadius: ".5rem",
                  border:"2px solid royalblue"
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#fff",
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <Payment color="primary" fontSize="large" />
                </Avatar>
                <Typography component="p" fontSize="1.1rem">
                  Super-Secure-payment-System
                </Typography>
              </Stack>
              <Stack direction="row"
                sx={{
                //   justifyContent:"center",
                  alignItems:"center",
                  gap:".5rem",
                  padding: "1rem .5rem",
                  bgcolor: "#eee",
                  borderRadius: ".5rem",
                  border:"2px solid royalblue"
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#fff",
                    width: "70px",
                    height: "70px",
                  }}
                >
                  <Money color="primary" fontSize="large" />
                </Avatar>
                <Typography component="p" fontSize="1.1rem">
                  Money-Back-Guaranted
                </Typography>
              </Stack>
          </Stack>
          <Stack
            flex="1"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              alignItems: "center",
              padding: "3rem .5rem",
              bgcolor: "#eee",
              borderRadius: ".5rem",
              border:"2px solid royalblue"
            }}
          >
            <Avatar
              sx={{ backgroundColor: "#fff", width: "70px", height: "70px" }}
            >
              <Shield color="primary" fontSize="large" />
            </Avatar>
            <Typography component="p" fontSize="1.1rem">
              Non-Contact-Shipping
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </section>
  );
};

export default index;
