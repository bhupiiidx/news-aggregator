import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function StandaloneToggleButton() {
    const [selected, setSelected] = React.useState(false);

    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
            }}
            sx={{ border: "none", borderRadius: "50% 10% 50% 10%" }}
        >
            <AccountCircleIcon size="large" />
        </ToggleButton>
    );
}
