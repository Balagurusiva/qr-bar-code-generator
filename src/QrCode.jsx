import React from 'react' 
import { Button, Box, Stack ,TextField} from '@mui/material'; 
import QRCode from "react-qr-code";
import { useState } from 'react';


const QrCode = () => {
  const [state, setState] = useState('off')
  const [qr_value, setQr_value] = useState('') 

  return (
    <Box sx={{  width: 250,
                      height: 'inherit',
                      borderRadius:4,
                      p: 2,
                      margin:'auto', 
                      backgroundColor:'#fff'
                      }}>
         <Stack justifyContent="center" alignItems="center" spacing={3}>
               <h2>QR Code Generator</h2>
               <h4>Enter your url/text</h4>
               <TextField 
                         id="outlined-size-small" 
                         size='small' label="text/url" 
                         variant="outlined" 
                         p='0px' 
                         value={qr_value}
                         onChange={(e)=>{setQr_value(e.target.value)}}/> 
               {state === 'on' && <QRCode id='qrcode' value={qr_value}  style={{ height: "auto", maxWidth: "100%", width: "100%" }}/>}
               <Button 
                       variant="contained" 
                       onClick={() =>{  
                                              setState('on')
                                               setQr_value('')
                                           }}>Generate QR Code </Button>
         </Stack>
    </Box>
  )
}

export default QrCode