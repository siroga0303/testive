import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


export default function DiscreteSliderSteps(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
      className={props.className}
        aria-label="Small steps"
        defaultValue={props.defaultValue}
       onChange={props.cb}
        step={1}
        marks
        min={props.min} 
        max={props.max}
        valueLabelDisplay="auto"
        sx={[{color:'#59b3b3'}, {'& .MuiSlider-thumb': {
          width: 24,
          height: 24,
          backgroundColor: '#df8f00',
          '&::before': {
            boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
          },
          '&:hover, &.Mui-focusVisible, &.Mui-active': {
            boxShadow: 'none',
          },} }]}
      />
    </Box>
  );
}