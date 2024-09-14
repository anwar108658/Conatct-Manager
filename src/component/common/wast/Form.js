import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack, TextareaAutosize, TextField } from '@mui/material'
import style from './Form.module.css'
import React from 'react'
import { Add, CleaningServices, Search } from '@mui/icons-material'

const Form = () => {
  return (
    <>
        <form className={style.form}>
            <Stack className={style.stack1} direction="row" gap=".5rem">
                <TextField fullWidth label="First Name" size='small' autoComplete='true'/>
                <TextField fullWidth type='text' label="Last Name" size='small'/>
            </Stack>
            <Stack className={style.stack2} direction="column" gap="1rem">
                <TextField type='email' label="Email" size='small'/>
                <TextField type='number' label="Phone#" size='small'/>
            </Stack>
            <FormControl>
              <FormLabel>Contact Type</FormLabel>
              <RadioGroup
              defaultValue="personal"
              // aria-labelledby='contactType'
              >
                <FormControlLabel
                value="personal"
                control={<Radio/>}
                label="personal"
                />
                <FormControlLabel
                value="professional"
                control={<Radio/>}
                label="professional"
                />
              </RadioGroup>
            </FormControl>
            <Button variant='contained'>Add Contact<Add fontSize='medium'/></Button>
        </form>
    </>
  )
}

export default Form