import React from 'react';
import { Box } from '@material-ui/core'

function Headline() {
  return (
    <Box style={{width: 'calc(100% + 10vh)', height: '10vh', backgroundColor: 'lightblue', position: 'relative', top:'-5vh', color: 'white'}}>
      <em>Some sort of passed in data will go here</em>
    </Box>
  )
}

export default Headline;