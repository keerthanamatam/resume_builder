import { Grid, TextField, Button, Typography, Paper, InputAdornment, IconButton } from '@mui/material'
import { useState } from 'react'
import './index.css'
import {Email, Lock, Visibility, VisibilityOff} from '@mui/icons-material'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const register = () => {
    }
    const signIn = () => {
        let credentials
        if (email && password) {
            credentials = {
                email: email,
                password: password
            }
        }
        console.log(credentials)
    }
    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            style={{ height: "100vh" }} // full page height
        >
            <Paper
                elevation={6}
                sx={{
                    margin: '50px',
                    padding: '50px',
                    borderRadius: '8px',
                    maxWidth: '400px'
                }}

            >
                <Typography align='center' variant='h5' fontWeight='bold' gutterBottom>
                    Login
                </Typography>
                    <form>
                        <Grid container spacing={2} direction='column'>
                            <Grid item >
                                <TextField label='Enter Email' variant="outlined"
                                    value={email}
                                    size='small'
                                    onChange={(e) => setEmail(e.target.value)}
                                    sx={{ backgroundColor: '#f2f2f2', borderRadius: '8px',
                                        "& .MuiInputBase-root": { height: 50 }
                                    }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                            <Email />
                                            </InputAdornment>
                                        )
                                    }}
                                    />
                            </Grid>
                            <Grid item>
                                <TextField label='Enter Password'
                                size='small'
                                    type={showPassword ? 'text' : 'password'}
                                     variant="outlined"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    sx={{ backgroundColor: '#f2f2f2', borderRadius: '8px',
                                         "& .MuiInputBase-root": { height: 50 }
                                     }} 
                                    InputProps={{
                                        startAdornment:(
                                            <InputAdornment position='start'>
                                                <Lock />
                                            </InputAdornment>
                                        ),
                                        endAdornment:(
                                            <InputAdornment position='end'>
                                                <IconButton onClick={()=> setShowPassword(!showPassword)}>
                                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    }}
                                    />
                            </Grid>

                            <Grid item container spacing={2}>
                                <Grid item xs={6}>
                                    <Button fullWidth variant='contained' onClick={register} color='primary'>Register</Button>
                                </Grid>
                                <Grid item xs={6} >
                                    <Button fullWidth variant='outlined' onClick={signIn} color='primary'>Login</Button>
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