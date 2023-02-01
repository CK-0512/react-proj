import React from "react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material"



const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  typography: {
    fontFamily: ["GmarketSansMedium"]
  },
  palette: {
    primary: {
      main: "#33c6d6",
      contrastText: "#ffffff"
    }
  }
});

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App theme={theme}/>
  </ThemeProvider>
);

