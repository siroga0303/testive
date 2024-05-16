import * as React from 'react';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase': {
        '&.Mui-checked': {
            color: '#df8f00',
            '& + .MuiSwitch-track': {
                backgroundColor: '#59b3b3',
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#59b3b3',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
                color: '#df8f00',
            },
        },
        '& .MuiSwitch-track': { backgroundColor: '#59b3b3' },
    },
}));

export default function ControlledSwitches() {
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <CustomSwitch
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
}
