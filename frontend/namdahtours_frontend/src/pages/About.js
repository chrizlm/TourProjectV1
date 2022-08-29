import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Members from "../components/Members";

function About() {
    const styles = {
        fullscreenlayout : {
            height: "auto",
            width: "auto"
        },
        homecontent : {
            height: 300,

        },
        textsection : {
            justifyContent: "center",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        },

        tobeused : {
            backgroundColor: 'primary.dark',
            '&:hover': {
                backgroundColor: 'primary.main',
                opacity: [0.9, 0.8, 0.7],
            }
        }
    }

    return(
        <>
            <div style={styles.fullscreenlayout}>
                <Box sx={{
                    flexGrow: 1,
                    width: "auto",
                    height: "auto",
                }}>
                    <Grid container spacing={2}>
                        <Grid xs={12} style={{height:300}}>
                            <div style={styles.textsection}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Namdah Tours safaris
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun
                                </Typography>
                            </div>
                        </Grid>
                        <Members />
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default About