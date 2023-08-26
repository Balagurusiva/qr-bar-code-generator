import React from 'react' 
import {  Box, Stack ,TextField} from '@mui/material'; 
import Barcode from 'react-barcode';
import { useState } from 'react';


const App = () => {
 
  const [bar_value, setBar_value] = useState('') 

  return (
    <Box sx={{  width: 'inherit',
                      height: 'inherit',
                      borderRadius:4,
                      p: 2,
                      margin:'auto', 
                      backgroundColor:'#fff'
                      }}>
         <Stack justifyContent="center" alignItems="center" spacing={3}>
               <h2>Bar Code Generator</h2>
               <h4>Enter your text</h4>
               <TextField 
                         id="outlined-size-small" 
                         size='small' label="text/url" 
                         variant="outlined" 
                         p='0px' 
                         value={bar_value}
                         onChange={(e)=>{setBar_value(e.target.value)}}/> 
               <Barcode value={bar_value} style={{ height: "auto", maxWidth: "100%", width: "100%" }}/>
               
         </Stack>
    </Box>
  )
}

export default App
