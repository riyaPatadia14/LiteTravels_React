import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Ahmedabad from "../Images/ahmd.JPG";
import { Box } from '@mui/material';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
const Places = () => {

    const cardData = [
        { id: 1, image: Ahmedabad, placeName: 'Surat', placeLocation: 'Gujarat' },
        { id: 2, image: Ahmedabad, placeName: 'Ahmedabad', placeLocation: 'Gujarat' }
    ];

    return (
        <>
            <Box sx={{ justifyContent: 'center', display: "flex", m: 5 }}>
                {cardData.map(x => (
                    <Card sx={{ maxWidth: 345, m: 5 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image={x.image}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {x.placeName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {x.placeLocation}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><FavoriteRoundedIcon /></Button>
                            <Button size="small"><ShareRoundedIcon /></Button>
                        </CardActions>
                    </Card>
                ))}
            </Box>
        </>
    );
}

export default Places;
