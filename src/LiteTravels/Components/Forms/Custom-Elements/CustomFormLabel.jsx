import React from "react";
import { Typography } from '@mui/material';

const CustomFormLabel = ({ children }) => {
    return (
        <>
            <Typography variant="body1" color="Primary" gutterBottom>
                {children}
            </Typography >
        </>
    );
}

export default CustomFormLabel;