import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import style from "./style.module.css";
import { Add, Check, Remove} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Index = ({ productsDetail }) => {
  const { id, stock, colors } = productsDetail;

  const [ccolor, setCcolor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const increaseHandle = () => {
    amount < stock ? setAmount(amount + 1): setAmount(stock);
  }
  const decreaseHandle = () => {
    amount > 1 ? setAmount(amount - 1): setAmount(1);
  }

  return (
    <>
      <Typography sx={{ display: "flex", gap: "0.3rem" }}>
        colors:
        {colors.map((elem, index) => (
          <Box key={index}>
            <IconButton
              key={index}
              className={style.button}
              onClick={() => {
                setCcolor(elem);
              }}
              sx={{
                backgroundColor: elem,
                opacity: "0.4",
                width: "8px",
                height: "8px",
                ":hover": { backgroundColor: elem, opacity: "1" },
                ":focus": { opacity: "1", backgroundColor: elem },
              }}
            >
              {ccolor === elem ? (
                <Check sx={{ color: "#fff", fontSize: "15px" }} />
              ) : null}
            </IconButton>
          </Box>
        ))}
      </Typography>
      <Stack direction="row" gap=".5rem" alignItems="center">
        <IconButton onClick={increaseHandle}>
          <Add fontSize="small"/>
        </IconButton>
        <Typography>{amount}</Typography>
        <IconButton onClick={decreaseHandle}>
          <Remove fontSize="small"/>
        </IconButton>
      </Stack>
      <Link to="/cart">
        <Button variant="contained">Add To Cart</Button>
      </Link>
    </>
  );
};

export default Index;
