import React, { useState } from 'react'
import QrCode from './QrCode'
import Barcode from './BarCode'
import { Stack,Button} from '@mui/material'

const App = () => {

  const [ToShow, setToShow] = useState('')
  return (
     <>
       <Stack gap={3} justifyContent='center' alignItems='center'>
           <Stack direction='row' gap={2}>
           <Button variant="contained"  onClick={()=>setToShow('QR')} >Generate QR Code </Button>
           <Button variant="contained"  onClick={()=>setToShow('Bar')}>Genetate Bar code </Button>
           </Stack>

          {ToShow === 'QR' && <QrCode />}
          {ToShow === 'Bar' && <Barcode />}
       </Stack>
     
     </>
  )
}

export default App

