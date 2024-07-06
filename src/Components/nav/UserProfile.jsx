import React from 'react';
import { Stack, IconButton, Badge } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";


export default function StandaloneToggleButton() {
    const category = useSelector((state) => state.recomended.relevantCategory);
    const navigate = useNavigate();

    return (
        <Stack direction="row" spacing={3} mr={2}>
            <IconButton
                value="check"
                onClick={() => navigate("/for-you")}
                sx={{ border: "none", borderRadius: "50%" }}
            >
                <Badge badgeContent={category?.length || 0} color="primary">
                    <FavoriteBorderIcon color="action" />
                </Badge>
            </IconButton>
            <IconButton
                value="check"
                onChange={() => { }}
                sx={{ border: "none", borderRadius: "50%" }}
            >
                <AccountCircleIcon size="large" />
            </IconButton>
        </Stack>
    );
}
