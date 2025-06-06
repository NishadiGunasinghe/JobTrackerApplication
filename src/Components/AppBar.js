import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Hamburger from 'hamburger-react'
import SideBar from './SideBar';

export default function MenuAppBar() {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(prev => !prev);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ display: 'flex' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Hamburger rounded toggled={isOpen} toggle={setOpen} size={20}/>
          {isOpen && <SideBar toggleMenu={toggleMenu} />}
          <Typography variant="h6" component="div" 
            sx={{ flexGrow: 1, 
              fontFamily: 'Papyrus', 
              fontSize: '24px',
              fontWeight: 'bold',
              color: 'rgb(254, 254, 254)', 
              textShadow: '2px 2px 5px rgba(17, 10, 86, 0.9)', }}>
            Job Tracker
          </Typography>

          {/* Right Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MailIcon 
              size="large"
              aria-label="mail"
              color="inherit"
              sx={{ marginRight: '1em' }}
            />  
            {auth && (
            <div>              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}