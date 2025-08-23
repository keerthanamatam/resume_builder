import { useState } from "react";
import { Grid, TextField, Button, Paper, Typography, InputAdornment, IconButton } from "@mui/material";
import '../login/index.css'
import { Person, Email, LocalPhone, Lock, VisibilityOff, Visibility } from '@mui/icons-material'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    return (
        <Grid container justifyContent='center' alignContent='center' style={{ height: '100hv' }} >
            <Paper
                elevation={6}
                sx={{
                    padding: '30px',
                    margin: '30px',
                    borderRadius: '8px',
                    boxShadow: ' 0px 8px 8px rgb(0,0,0,0.5)'
                    // width: '100%'
                    //    background: '#f5f5f5'
                }}
            >
                <Typography align='center' variant="h5" gutterBottom fontWeight='bold'>
                    Create Account
                </Typography>

                <form>
                    <Grid container spacing={2} direction={"column"}>
                        <Grid>
                            <TextField fullWidth variant="outlined" label='Enter Name' sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start" >
                                        <Person />
                                    </InputAdornment>
                                )
                            }} />
                        </Grid>

                        <Grid>
                            <TextField fullWidth variant="outlined" label='Enter Email' sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                startAdornment: (<InputAdornment position="start">
                                    <Email />
                                </InputAdornment>)
                            }} />
                        </Grid>

                        <Grid>
                            <TextField fullWidth variant="outlined" label='Enter Phone Number' sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <LocalPhone />
                                    </InputAdornment>
                                )
                            }} />
                        </Grid>
                        <Grid>
                            <TextField fullWidth variant="outlined" type={showPassword ? 'text' : 'password'} label='Enter Password' sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowPassword(!showPassword)}>
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }} />
                        </Grid>
                        <Grid>
                            <TextField fullWidth variant="outlined" type={showConfirm ? 'text' : 'password'} label='Enter confirm Password' sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Lock />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton onClick={() => setShowConfirm(!showConfirm)}></IconButton>
                                        {showConfirm ? <Visibility /> : <VisibilityOff />}
                                    </InputAdornment>
                                )
                            }} />
                        </Grid>

                        <Grid>
                            <Button variant="contained" color="primary" sx={{ paddingLeft: '100px', paddingRight: '120px', fontWeight: 'bold', borderRadius: '8px', paddingTop: '10px', paddingBottom: '10px' }}>Register</Button>
                        </Grid>


                    </Grid>

                </form>
            </Paper>
        </Grid>

    )

}

export default Register
