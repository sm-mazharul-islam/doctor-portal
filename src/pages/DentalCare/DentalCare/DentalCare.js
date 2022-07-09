import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import image from '../../../images/treatment.png'



const DentalCare = () => {
    return (
        <Container sx={{ flexGrow: 1, mt: 8, boxShadow: '1px solid gray' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400 }}
                        src={image} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant='h4'>
                            Exceptional Dental Care, on Your Terms
                        </Typography>
                        <Typography variant='h6' sx={{ my: 5 }} style={{ fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora in culpa autem error incidunt animi molestiae aut voluptatem expedita ea. Assumenda reiciendis tempora eum nostrum rerum earum, enim odio commodi sit, qui ducimus numquam suscipit aliquam? Mollitia facilis libero modi nostrum maxime iure voluptates omnis cum saepe at excepturi itaque dignissimos dolorum eligendi dolor nihil, earum inventore, provident officia eius maiores similique! Nulla, illo beatae repudiandae nesciunt esse voluptates placeat earum veniam eius eligendi sunt eaque ducimus asperiores officiis omnis.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5BD5E3' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>

        </Container>
    );
};

export default DentalCare;