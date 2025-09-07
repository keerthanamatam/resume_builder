import { useState } from "react";
import { Grid, TextField, Button, Paper, Typography, InputAdornment, IconButton } from "@mui/material";
import '../login/index.css'
import { Person, Email, LocalPhone, Lock, VisibilityOff, Visibility } from '@mui/icons-material'

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [error, setError] = useState({})
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: ''
    })

    const handleSubmit = () => {
        if (formData.name === '') {
            setError((prev) => ({
                ...prev,
                ['name']: 'Name is required'
            }))
        }
        console.log(formData)


    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
        const errorMsg = validate(name, value)
        setError((prev) => ({
            ...prev,
            [name]: errorMsg
        }))
    }

    const validate = (name, value) => {
        switch (name) {
            case 'name':
                if (!value)
                    return 'Name is required'
                return ''
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    return "Email is required";
                } else if (!emailRegex.test(value)) {
                    return "Enter a valid email address";
                }
                return "";
            case 'phoneNumber':
                const phoneRegex = /^[0-9]{10}$/;
                if (!value) {
                    return "Phone number is required"
                }
                else if (!phoneRegex.test(value)) {
                    return "Enter a valid phone Number"
                }
                return ''
            case 'password':
                if (!value) {
                    return 'Password is required'
                }
                return ''
            case 'confirmPassword':
                if (!value) {
                    return 'confirm password is required'
                }
                else {
                    if (value !== formData.password) {
                        return "Passwords do not match"
                    }
                }
                return ''
        }

    }

    return (
        <Grid container justifyContent='center' alignItems='center' style={{
            height: '100vh',
            background: "linear-gradient(to right, #b085f5, #6fa8ff)",

        }} >

            <Paper
                elevation={10}
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

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} direction={"column"}>
                        <Grid>
                            <TextField fullWidth
                                name="name"
                                error={error.name}
                                helperText={error.name}
                                required variant="outlined"
                                onChange={handleChange}
                                label='Enter Name' sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start" >
                                            <Person color="primary" />
                                        </InputAdornment>
                                    )
                                }} />
                        </Grid>

                        <Grid>
                            <TextField fullWidth
                                variant="outlined"
                                required name="email"
                                error={error.email}
                                helperText={error.email}
                                onChange={handleChange}
                                label='Enter Email'
                                sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                    startAdornment: (<InputAdornment position="start">
                                        <Email color="primary" />
                                    </InputAdornment>)
                                }} />
                        </Grid>

                        <Grid>
                            <TextField fullWidth
                                variant="outlined"
                                required
                                error={error.phoneNumber}
                                helperText={error.phoneNumber}
                                name="phoneNumber"
                                onChange={handleChange}
                                label='Enter Phone Number'
                                sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <LocalPhone color="primary" />
                                        </InputAdornment>
                                    )
                                }} />
                        </Grid>
                        <Grid>
                            <TextField fullWidth
                                variant="outlined"
                                required name="password"
                                error={error.password}
                                helperText={error.password}
                                onChange={handleChange}
                                type={showPassword ? 'text' : 'password'}
                                label='Enter Password'
                                sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock color="primary" />
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
                            <TextField fullWidth
                                onChange={handleChange}
                                required name="confirmPassword"
                                variant="outlined"
                                error={error.confirmPassword}
                                helperText={error.confirmPassword}
                                type={showConfirm ? 'text' : 'password'}
                                label='Enter confirm Password'
                                sx={{ backgroundColor: '#f2f2f2' }} InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock color="primary" />
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
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                sx={{
                                    paddingLeft: '100px',
                                    paddingRight: '120px',
                                    fontWeight: 'bold',
                                    borderRadius: '8px',
                                    paddingTop: '10px',
                                    paddingBottom: '10px'
                                }}>Register</Button>
                        </Grid>


                    </Grid>

                </form>
            </Paper>
        </Grid>

    )

}

export default Register
