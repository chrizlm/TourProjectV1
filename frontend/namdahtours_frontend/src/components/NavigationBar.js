import {Link} from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});


function NavigationBar() {
    const styles = {
        linksection: {
            fontSize: "18px",
            color: "white",
            padding: "0 20px",
            textDecoration: "none"
        },
        wrapper: {
            textAlign: "center",
            margin: "0 auto",
            marginTop: "50px"
        },
        linkmenu: {
            display: "flex",
            justifyContent: "space-between",
            margin: "auto"
        }
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={theme}>
            <AppBar position="static" color="neutral">
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Namdah Tours
                    </Typography>
                    <div style={styles.linkmenu}>
                            <Link to="/" style={styles.linksection}>Home</Link>
                            <Link to="booking" style={styles.linksection}> Booking </Link>
                            <Link to="about" style={styles.linksection}> About </Link>
                    </div>
                </Toolbar>
            </AppBar>
            </ThemeProvider>
        </Box>
    )
}

export default NavigationBar




