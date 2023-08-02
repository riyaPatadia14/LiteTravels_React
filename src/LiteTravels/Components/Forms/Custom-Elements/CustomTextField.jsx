import { Grid, TextField } from '@mui/material';

const CustomTextField = ({ ...props }) => {
    return (
        <>
            <Grid item xs={12} sm={6} md={3}>
                <TextField
                    InputLabelProps={{ shrink: true || props.value }}
                    {...props}
                />
            </Grid>
        </>
    );
}

export default CustomTextField;
