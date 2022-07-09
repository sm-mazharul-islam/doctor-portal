import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../pages/Home/Service/Service';
import Typography from '@mui/material/Typography';
import fluoride from '../../src/images/fluoride.png'
import cavity from '../../src/images/cavity.png'
import whitening from '../../src/images/whitening.png'

const services = [
    {
        name: 'Fluroide Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum dolorum totam tenetur nulla ipsum dignissimos? Odit est natus laudantium recusandae, temporibus iusto nobis? Magni optio amet incidunt dolorem reprehenderit?',
        img: fluoride
    },

    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum dolorum totam tenetur nulla ipsum dignissimos? Odit est natus laudantium recusandae, temporibus iusto nobis? Magni optio amet incidunt dolorem reprehenderit?',
        img: cavity
    },

    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum dolorum totam tenetur nulla ipsum dignissimos? Odit est natus laudantium recusandae, temporibus iusto nobis? Magni optio amet incidunt dolorem reprehenderit?',
        img: whitening

    },



]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, m: 2, color: 'success.main' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;