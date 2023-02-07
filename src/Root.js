import React, { useEffect } from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material"
import App from './App';
import { RecoilRoot } from "recoil";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";

export default function Root() {
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

    useEffect(() => {
        const r = document.querySelector(':root');

        muiThemePaletteKeys.forEach((paletteKey) => {
            const themeColorObj = theme.palette[paletteKey];

            for (const key in themeColorObj) {
                if (Object.hasOwnProperty.call(themeColorObj, key)) {
                    const colorVal = themeColorObj[key];
                    r.style.setProperty(`--mui-color-${paletteKey}-${key}`, colorVal);
                }
            }
        });
    }, []);

    return (
        <><ThemeProvider theme={theme}>
            <CssBaseline />
            <RecoilRoot >
                <Router>
                    <App />
                </Router>
            </RecoilRoot>
        </ThemeProvider>
        </>
    );
}

const muiThemePaletteKeys = [
    "background",
    "common",
    "error",
    "grey",
    "info",
    "primary",
    "secondary",
    "success",
    "text",
    "warning",
];