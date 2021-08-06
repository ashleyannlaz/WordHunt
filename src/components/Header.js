import React from 'react';
import './Header.css';
import { TextField, ThemeProvider, } from '@material-ui/core';
import { createTheme } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import categories from '../data/category.js'

const Header = (setCategory, category) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
          type: 'dark',
        },
      });

    return (
    <div className='header'>
        <span className='title'>Word Hunt</span>
        <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
            <TextField id='standard-basic' label='standard' />
            <TextField
                id="standard-select-currency"
                select
                label="Select"
                helperText="Please select your currency"
                // onChange={(e) => setCategory(e.target.value)}
            >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))};
           
        </TextField>
               

                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
