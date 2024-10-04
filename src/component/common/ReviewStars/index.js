import { Star, StarBorder, StarHalfSharp } from '@mui/icons-material'
import { Box, Stack } from '@mui/material'
import React from 'react'

const index = ({stars,reviews}) => {

    const starGenerate = Array.from({length:5},(element,index) => {
        let number = index + 0.5;

       return <span key={index}>
          {stars >= index + 1 ? (
            <Star sx={{color:"orange"}} />
          ) : stars >= number ? (
            <StarHalfSharp sx={{color:"orange"}}/>
          ) : (
            <StarBorder sx={{color:"orange"}}/>
          )}
        </span>

    })

  return (
    <>
      <Stack direction="row">
        {starGenerate}
        <p>({reviews} : Customer Reviews)</p>
      </Stack>
    </>
  )
}

export default index
