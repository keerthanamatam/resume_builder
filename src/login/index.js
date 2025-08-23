import { Grid, TextField, Button, Typography, Paper } from '@mui/material'
import { useState } from 'react'
import './index.css'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
            <Grid item xs={10} sm={6} md={4}>
                <form className='loginform'>
                    {/* <Typography variant="h5" gutterBottom>
                            Login
                        </Typography> */}
                    <Grid container spacing={2} direction='column'>
                        <Grid item >
                            <TextField label='Enter Email' variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ backgroundColor: '#f2f2f2', borderRadius: '8px' }} />
                        </Grid>
                        <Grid item>
                            <TextField label='Enter Password'
                                type='password' variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ backgroundColor: '#f2f2f2', borderRadius: '8px' }} />
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
            </Grid>
        </Grid>
    )
}
export default Login