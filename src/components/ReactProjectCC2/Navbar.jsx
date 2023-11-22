import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/CompanyLogo.jpg'


const Navbar = ({ toggleSidebar }) => {

  const navigate=useNavigate();
  const onchange=()=>{
      navigate('/home');
  }
  const onchoose=()=>{
      navigate('./choose');
  }
  const signout=()=>{
      navigate('/go');
  }

  return (
    <>
    <div style={{width:'100%'}  }>
    <AppBar style={{width:'100%',background:'#4FB06D',margin:'auto'}}position="fixed">
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleSidebar}
          edge="start"
        >
          <MenuIcon />  
        </IconButton>
        <img src={Logo} alt="Logo" width="50px" height="50px" style={{borderRadius:"15px"}}/>
        <Typography variant="h4" noWrap style={{fontFamily:"Bahnschrift",paddingLeft:"10px"}}> V4U Health Care
        </Typography> 
        <Button variant="standard" onClick={onchange} style={{color:'white',marginLeft:'750px'}}>Home</Button>
        <Button variant="standard" onClick={onchoose} style={{color:'white'}}>Book Now</Button>
        <Button variant="standard" onClick={signout} style={{color:'white'}}>Admin</Button>
        <Button variant="standard" style={{color:'white'}}>Contact</Button>
      </Toolbar>
    </AppBar>
    </div>
    </>

  );
};
export default Navbar;

