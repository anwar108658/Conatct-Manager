import { Box, Button, Container, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from "../../common/Card"
import data from '../../../Data'
import { Link } from 'react-router-dom'
import {useFilterContext} from "../../Context/filterProduct"
import { GridView, List } from '@mui/icons-material'

const Index = () => {
  const [toggle,setToggle] = useState(true);
  const [filter,setFilter] = useState('');

  const toggleHandel = (e) => {
    if (e === "grid") {
      setToggle(true)
    }else{
      setToggle(false)
    }
  }
  const {filter:{text,Company},products,Allproducts,blurHandel,handleChange,updateFilterValue} = useFilterContext();
  const state = useFilterContext()

  useEffect(() => {
    handleChange(filter)    
  },[filter])
  const getData = (Data,type) => {
    let data =  Data.map((item) => item[type])
    let newData = ["All", ...new Set(data)]
    return newData
  }

  let category = getData(Allproducts,"category")
  let copmany = getData(Allproducts,"company")
  let colors = getData(Allproducts ,"colors")

  // console.table([category,copmany,colors])
  // console.log("data",state)
  return (
    <Container sx={{padding:"3rem 1rem"}}>
      <Stack direction="row">
        <Stack flex="1" gap="1rem">
          <Box component="form" onSubmit={(e) => e.preventDefault()}>
            <TextField label="Search" size='small' name='text' value={text} onBlur={blurHandel} onChange={updateFilterValue}/>
          </Box>
          <Stack>
              <Typography variant='h6'>Category</Typography>
            {category.map((item,index) => (
              <Box key={index}>
                <Button key={index}  type='button' value={item} name="category" onBlur={blurHandel} onClick={updateFilterValue} sx={{paddingRight:"3rem",border:"1px solid #fff",":focus":{border:"1px solid royalblue"}}}>{item}</Button>
              </Box>
            ))}
          </Stack>
          <Stack>
          <FormControl sx={{width:"150px"}}>
                <InputLabel id="demo-simple-select-label">Company</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Company}
                  label="Company"
                  name="Company"
                  onBlur={blurHandel}
                  onChange={updateFilterValue}
                >
                  {copmany.map((item,index) => (
                    <MenuItem key={index} value={item} name="Company">{item}</MenuItem>
                  ))}
                </Select>
              </FormControl>
          </Stack>
        </Stack>
        <Stack flex="3" gap='1rem'>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row">
              <IconButton onClick={() => toggleHandel("grid")}>
                <GridView/>
              </IconButton>
              <IconButton onClick={() => toggleHandel("list")}>
                <List/>
              </IconButton>
            </Stack>
            <Stack direction="row" alignItems="center">
              <Typography>Total Products : {products?.length}</Typography>
            </Stack>
            <Stack>
              <FormControl sx={{width:"150px"}}>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                  size='small'
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Filter"
                  onChange={(e) => setFilter(e.target.value)}
                >
                  <MenuItem value="lowest">Start lowest Price</MenuItem>
                  <MenuItem value="heighest">Start heighest Price</MenuItem>
                  <MenuItem value="a-z">Price (A-Z)</MenuItem>
                  <MenuItem value="z-a">Price (Z-A)</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Stack>
          {toggle && <Stack direction="row" gap="1rem" justifyContent="space-evenly" flexWrap="wrap">
          {
          products && products.length? products.map((item,index) => (
              <Link key={index} to={`/productsDetail/${item.id}`}>
                <Card data={item}/>
              </Link>
            )):
            <Typography>
              Curently Data Not Available
            </Typography>
          }
          </Stack>}
          {!toggle && <Stack gap="1rem">
          {
          products && products.length? products.map((item,index) => (
              
              <Stack direction="row" gap="2rem">
                <Stack sx={{maxWidth:"250px"}}>
                  <Box sx={{width:"100%"}} src={item.image} component="img"/>
                </Stack>
                <Stack justifyContent="space-between">
                  <Typography variant='h6'>{item.name}</Typography>
                  <Typography variant='body1'>Description: {item.description && item.description.split(" ").slice(0, 10).join(" ")}</Typography>
                  <Typography variant='body2'>Company :<span style={{color:"green"}}>{item.company}</span></Typography>
               <Link key={index} to={`/productsDetail/${item.id}`}>
                <Button sx={{padding:".2rem .7rem"}} variant='contained' color='success'>Read more</Button>
              </Link> 
                </Stack>
              </Stack>
            )):
            <Typography>
              Curently Data Not Available
            </Typography>
          }
          </Stack>}
        </Stack>
      </Stack>
    </Container>
  )
}

export default Index