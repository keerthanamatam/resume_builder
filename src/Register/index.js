import { useState } from "react";
import { Grid, TextField, Button, Paper, Typography  } from "@mui/material";
import '../login/index.css'

const Register = () => {
    return (
        <Grid container justifyContent='center' alignContent='center' style={{height : '100hv' }} >
            <Paper 
            elevation={6}
            sx={{
                padding: '30px',
                margin : '30px',
                borderRadius: '8px',
                boxShadow:' 0px 8px 8px rgb(0,0,0,0.5)'
                // width: '100%'
            //    background: '#f5f5f5'
            }}
            >
               <Typography align='center' variant="h5" gutterBottom  fontWeight='bold'>
                Create Account
               </Typography>
                
            <form>
                <Grid container spacing={2} direction={"column"}>
                    <Grid>
                        <TextField fullWidth variant="outlined" label='Enter Name' sx={{ backgroundColor: '#f2f2f2' }} />
                    </Grid>

                    <Grid>
                        <TextField fullWidth variant="outlined" label='Enter Email' sx={{ backgroundColor: '#f2f2f2' }} />
                    </Grid>

                    <Grid>
                        <TextField fullWidth variant="outlined" label='Enter Phone Number' sx={{ backgroundColor: '#f2f2f2' }} />
                    </Grid>
                    <Grid>
                        <TextField fullWidth variant="outlined" type="password" label='Enter Password' sx={{ backgroundColor: '#f2f2f2' }} />
                    </Grid>
                    <Grid>
                        <TextField fullWidth variant="outlined" type='password' label='Enter confirm Password' sx={{ backgroundColor: '#f2f2f2' }} />
                    </Grid>

                    <Grid>
                        <Button variant="contained" color="primary" sx={{ marginLeft: '150px', marginTop: '10px' }}>Registers</Button>
                    </Grid>


                </Grid>

            </form>
            </Paper>
        </Grid>

    )

}

export default Register
