import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'
const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }
    const location = useLocation();
    const navigate = useNavigate();
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate);
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>

                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant="text">Didn't Account this site? Please Register</Button>
                        </NavLink>
                    </form>
                    <p>--------------------------</p>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created  successfully </Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;