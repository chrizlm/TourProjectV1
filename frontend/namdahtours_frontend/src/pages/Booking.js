import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import RegistrationForm from "../components/RegistrationForm";
import CarouselComponent from "../components/CarouselComponent";


function Booking() {

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
                    <Grid container spacing={0}>
                        <Grid xs={12} lg={6} md={6} sm={6}>
                            <div style={styles.textsection}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Namdah Tours safaris
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun
                                    Tour wonderful places with your friends and family
                                    get to enjoy and have fun

                                </Typography>
                            </div>
                        </Grid>
                        <Grid lg={6} md={6} sm={6}>
                            <CarouselComponent />
                        </Grid>
                        <Grid xs={12}>
                            <RegistrationForm />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    )
}

export default Booking

/*
<Paper elevation={3}>
                                <CardMedia
                                    component="img"
                                    image= "https://res.cloudinary.com/chrislm/image/upload/v1661403838/Namdah%20Tours/package1.jpg"
                                    alt="happy clients"
                                    style={{height: "auto"}}
                                />
                            </Paper>
 */