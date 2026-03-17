import { Typography } from '@mui/material';
import NavBar from '../../../src/Navbar';
import './index.css';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';

const UserDetails = () => {
    return (<div className='continer'>
        <NavBar />
        <div>
            <Typography sx={{ fontWeight: 600, fontSize: 30, color: "grey", fontFamily: "satisfies", padding: '20px' }} >
                Enter your Details</Typography>
            <Typography sx={{ fontWeight: 400, fontSize: 18, color: 'grey', fontFamily: "satisfies", paddingTop: '5px', paddingLeft: '25px' }}>
                Fill in your information, work experience, educational details, skills and more to build your resume.
                <br /> Our AI will help improve and polish your content.
            </Typography>
            <div style={{ padding: '305x' }}>
                <ToggleButtonGroup>
                    <ToggleButton onClick={() => {
                        console.log('hello')
                    }}>
                        Personal Information
                    </ToggleButton>
                    <ToggleButton >
                        Work Experience
                    </ToggleButton>
                    <ToggleButton onClick={() => {

                    }}>
                        Education
                    </ToggleButton>
                    <ToggleButton  >
                        skills
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    </div>)

}
export default UserDetails