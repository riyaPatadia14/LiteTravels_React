import { Box, FormControl, Grid, OutlinedInput, TextField } from '@mui/material';

const CustomTextField = () => {
    return (
        <>

            <Box component="form" noValidate autoComplete="off">
                <FormControl sx={{ width: '25ch' }}>
                    <OutlinedInput />
                </FormControl>
            </Box>
        </>
    );
}

export default CustomTextField;
{/* <>
<Grid item xs={12} sm={6} md={3}>
    <TextField
        InputLabelProps={{ shrink: true || props.value }}
        {...props}
    />
</Grid>
</> */}