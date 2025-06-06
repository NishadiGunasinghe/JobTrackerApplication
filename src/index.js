import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TrackApplication from './Pages/TrackApplication';
import MenuAppBar from './Components/AppBar';
import { Box } from "@mui/material";
import CreateApplicationForm from './Pages/CreateApplicationForm';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routePath";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>  
    {/* <App /> */}
    <MenuAppBar></MenuAppBar>
    {/* <DashboardLayoutNavigationDividers></DashboardLayoutNavigationDividers> */}
    <Box sx={{ mt: { xs: 7, sm: 8 } }}>
      <Routes />
    </Box>    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
