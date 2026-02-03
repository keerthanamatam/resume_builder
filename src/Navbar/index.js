import { Button, Typography, InputAdornment, TextField } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import './index.css'


const NavBar = () => {
    return (
        <>
            <div className="nav-container">
                <Typography sx={{ fontWeight: 800, fontSize: 30 }}>GenResume</Typography>
                <div className="nav-buttons">
                    <Button sx={{ textTransform: 'none', color: "white", fontWeight: 600, fontSize: 20 }}>Home</Button>
                    <Button sx={{ textTransform: 'none', color: "white", fontWeight: 600, fontSize: 20 }}>My Resume</Button>
                    <Button sx={{ textTransform: 'none', color: "white", fontWeight: 600, fontSize: 20 }}>Templates</Button>
                    <Button sx={{ textTransform: 'none', color: "white", fontWeight: 600, fontSize: 20 }}>Help</Button>
                    {/* <TextField
                        placeholder="Search..."
                        variant="outlined"
                        size="small"
                        sx={{background: "white", borderRadius: "10px"}}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    /> */}
                    <Button sx={{ textTransform: 'none', color: "white", fontWeight: 600, fontSize: 20 }}>Profile</Button>

                </div>
            </div>
        </>
    )

}
export default NavBar