import { Typography } from '@mui/material';
import './index.css';
import NavBar from '../Navbar';
import { grey } from '@mui/material/colors';

const Dashboard = () => {
  return (
    <div className="dashboard-layout">
      <NavBar />

      <div className="container">
        <Typography sx={{ fontWeight: 600, fontSize: 20, color: "grey", fontFamily: "satisfies" }}>
          Welcome Back, Jhon!
        </Typography>
      </div>
    </div>
  );
};

export default Dashboard;