import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectLabels(props) {
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (

     

        <Select 
        defaultValue= {age}
          value={age}
          onChange={handleChange}
          
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {props.selectAttr.map((element) => {
            return(
            <MenuItem key={element.value} value={element.value}>{element.name}</MenuItem> )
          })}
          
        </Select>
        
     
  );
}