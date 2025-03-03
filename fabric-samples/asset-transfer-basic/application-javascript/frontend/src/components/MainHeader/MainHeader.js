import React from "react";
import logo from './LOGO.png';
import classes from "./MainHeader.module.css";
import { Button , ButtonGroup,Stack } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';



const MainHeader = (props) => {

  const handleLogin = () => {
    window.location.href = '/login'
  }
  const handleRegister = () => {
    window.location.href = '/Registration'
  }
  const handleHome = () => {
    window.location.href = '/'
  }
  return (

    
    <header className={classes["main-header"]}>
      <img src={logo}  />
      <h1 onClick={handleHome}>MediShelter <sup>beta</sup>  +</h1> 
      <ButtonGroup variant="contained" color="primary" >
      <Stack spacing={2} direction='row'>

      <Button onClick={handleLogin} endIcon={<LoginIcon />}>Login </Button>
      <Button onClick={handleRegister} endIcon={<AppRegistrationIcon />}>Register</Button>
      </Stack>
      </ButtonGroup>
      
    </header>
  );
};

export default MainHeader;