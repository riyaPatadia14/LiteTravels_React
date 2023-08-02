import CustomFormLabel from "./Forms/Custom-Elements/CustomFormLabel";
import CustomTextField from "./Forms/Custom-Elements/CustomTextField";
import { Box, Grid } from '@mui/material';
const Places = () => {
    // const Item = styled(Paper)(({ theme }) => ({
    //     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //     ...theme.typography.body2,
    //     padding: theme.spacing(1),
    //     textAlign: 'center',
    //     color: theme.palette.text.secondary,
    // }));
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item columns={{ xs: 4, md: 12 }}>
                        <CustomFormLabel >Places</CustomFormLabel>
                        <CustomTextField name="places" />
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}

export default Places;