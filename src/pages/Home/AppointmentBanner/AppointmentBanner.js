import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../../src/images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 77, 0.9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: (-110) }}
                        src={Doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                    alignItems: 'center'
                }}>
                    <Box>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: '#5BD5E3' }}>
                            Appointment
                        </Typography>
                        <Typography variant='h4' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam velit sunt quod quaerat eveniet magni dolores dolorum sit officiis ex?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5BD5E3' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default AppointmentBanner;