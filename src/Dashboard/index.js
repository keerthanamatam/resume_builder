import { Typography, Card, CardContent, CardHeader, CardActions, CardActionArea } from '@mui/material';
import './index.css';
import NavBar from '../Navbar';
import { grey } from '@mui/material/colors';
import { useNavigate  } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  return (
    <div className="dashboard-layout">
      <NavBar />

      <div className="container">
        <Typography sx={{ fontWeight: 600, fontSize: 25, color: "grey", fontFamily: "satisfies" }}>
          Welcome Back, Jhon!
        </Typography>
        <Typography sx={{ forntWeight: 500, fontSize: 15, color: 'grey' }}>
          Create your proffessional resume step by step
        </Typography>
        <div className='card-row'>
          <Card className="card">
              <CardActionArea >
            <CardHeader titleTypographyProps={{ fontSize: '17px', fontWeight: '600' }} title='1. Choose Template' />
            <CardContent>select from various resume templates </CardContent>
            </CardActionArea>
          </Card>
          <Card className="card">
            <CardActionArea onClick={() => navigate('/userDetails')}>
              <CardHeader titleTypographyProps={{ fontSize: '17px', fontWeight: '600' }} title='2. Enter Your Details' />
              <CardContent>Fill in your informantion and work history </CardContent>
            </CardActionArea>
          </Card>
          <Card className="card">
            <CardActionArea >
            <CardHeader titleTypographyProps={{ fontSize: '17px', fontWeight: '600' }} title='3. Generate Your Resume' />
            <CardContent>Let AI Create and optimize your resume </CardContent>
            </CardActionArea>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;