import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { DeliveryDining, Flag, Recycling, Shield } from "@mui/icons-material";
import ReviewStars from "../../common/ReviewStars";
import AddToCart from "../../common/AddToCart";
import search from "../../../image/search.gif"
import { useProductContext } from "../../Context/ContextProduct";

const Index = () => {
  const { getSingleData,singleProduct,isloading } = useProductContext();

  const {id} = useParams();
  const dataHandel = singleProduct
  useEffect(() => {
    getSingleData(`https://api.pujakaitem.com/api/products?id=${id}`)
  },[])
  console.log(dataHandel);
  return (
    <Container sx={{ padding: "5rem 1rem" }}>
      {dataHandel && isloading === false ? <Stack direction="row" gap="2rem">
        <Stack  justifyContent="center">
          <Box sx={{ maxWidth: "340px" ,aspectRatio:"1"}} src={dataHandel?.image?.[0]?.url} width="100%" component="img"></Box>
        </Stack>
        {dataHandel ? (
          <Stack gap=".5rem" flex="2">
            <Typography variant="h3">{dataHandel?.name}</Typography>
            <ReviewStars
              stars={dataHandel?.stars}
              reviews={dataHandel?.reviews}
            ></ReviewStars>
            <Typography component="p">
              MRP:
              <del>{dataHandel?.price + 5000}</del>
            </Typography>
            <Typography component="p">
              Deal of The days: {dataHandel?.price}
            </Typography>
            <Typography component="p">
              Description: {dataHandel?.description}
            </Typography>
            <Stack
              direction="row"
              gap="1rem"
              sx={{ borderBottom: "1px solid #ddd" }}
            >
              <Stack alignItems="center">
                <Avatar sx={{ backgroundColor: "#eee" }}>
                  <DeliveryDining sx={{ color: "#000" }} />
                </Avatar>
                <Typography component="p" color="royalblue">
                  free Delivery
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Avatar sx={{ backgroundColor: "#eee" }}>
                  <Shield sx={{ color: "#000" }} />
                </Avatar>
                <Typography component="p" color="royalblue">
                  2 years Warranty
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Avatar sx={{ backgroundColor: "#eee" }}>
                  <Flag sx={{ color: "#000" }} />
                </Avatar>
                <Typography component="p" color="royalblue">
                  free Delivery
                </Typography>
              </Stack>
              <Stack alignItems="center">
                <Avatar sx={{ backgroundColor: "#eee" }}>
                  <Recycling sx={{ color: "#000" }} />
                </Avatar>
                <Typography component="p" color="royalblue">
                  30 days reChange
                </Typography>
              </Stack>
            </Stack>
            <Typography
              component="p"
              color={dataHandel.stock > 0 ? "green" : "red"}
            >
              Available:{dataHandel.stock > 0 ? "In Stock" : "Not Available"}
            </Typography>
            <Typography component="p">
              Brand : {dataHandel?.company}
            </Typography>
            <hr />
            {dataHandel.stock > 0 && (
              <AddToCart productsDetail={dataHandel} />
            )}
          </Stack>
        ) : (
          ""
        )}
      </Stack>:
      <Stack>
        <Box src={search} component="img" sx={{width:"150px"}}></Box>
      </Stack>
      }
    </Container>
  );
};
export default Index;
