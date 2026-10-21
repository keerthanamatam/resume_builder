import { Grid, TextField, Button, Typography, Paper, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import './index.css'
import { Email, Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import { useNavigate } from "react-router-dom";
import { signInApi } from '../api/auth'


const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [ValidationError, setValidationError] = useState(false)
    const register = () => {
        navigate("/register");
    }
    const signIn = async (event) => {
        event.preventDefault()
        if (!email || !password) {
            return
        }

        const response = await signInApi({ email, password })
        if (response.ok) {
            navigate("/dashboard")
        }
    }
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(email)) {
            setValidationError(false)
            setEmail(email)
        }
        else {
            setEmail(email)
            setValidationError(true)
        }
    }
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{
                height: "100vh",
                // background: 'linear-gradient(to right, #6a11cb, #2575fc)'
                background: "linear-gradient(to right, #b085f5, #6fa8ff)",


            }} // full page height

        >
            <Paper
                elevation={10}
                sx={{
                    margin: '50px',
                    padding: '50px',
                    borderRadius: '8px',
                    maxWidth: '400px'

                }}

            >
                <Typography align='center' variant='h5' gutterBottom fontWeight='bold'>
                    Welcome Back 👋
                </Typography>
                <Typography align='center' variant='body2' color='textSecondary' gutterBottom>
                    Please login here
                </Typography>
                <form onSubmit={signIn}>
                    <Grid container spacing={2} direction='column'>
                        <Grid item >
                            <TextField label='Enter Email' variant="outlined"
                                value={email}
                                fullWidth
                                required
                                size='small'
                                onChange={(e) => validateEmail(e.target.value)}
                                error={ValidationError}
                                helperText={ValidationError ? "Please Enter valid Email" : ''}
                                sx={{
                                    backgroundColor: '#f2f2f2', borderRadius: '8px',
                                    "& .MuiInputBase-root": { height: 50 }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Email color='primary' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField label='Enter Password'
                                size='small'
                                type={showPassword ? 'text' : 'password'}
                                required
                                variant="outlined"
                                fullWidth
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{
                                    backgroundColor: '#f2f2f2', borderRadius: '8px',
                                    "& .MuiInputBase-root": { height: 50 }
                                }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <Lock color='primary' />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position='end'>
                                            <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item container spacing={2}>
                            <Grid item xs={6}>
                                <Button type='button' fullWidth variant='contained' onClick={register} color='primary'>Register</Button>
                            </Grid>
                            <Grid item xs={6} >
                                <Button type='submit' fullWidth variant='outlined' color='primary'>Login</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </form>

                {/* </Grid> */}
            </Paper>
        </Grid>
    )
}
export default Login