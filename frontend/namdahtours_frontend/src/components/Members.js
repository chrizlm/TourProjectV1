import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';

function Members() {
    const styles = {
        avatarsection : {
            justifyContent: "center",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"
        }
    }
    return(
        <>
            <Grid container spacing={3}>
                <Grid xs={4}>
                    <Card elevation={10}>
                        <div style={{height: 140}} >
                        <Avatar
                            alt="Team"
                            src="https://res.cloudinary.com/chrislm/image/upload/v1659689771/Namdah%20Tours/random3.jpg"
                            sx={{ width: 100, height: 100 }}
                            style={styles.avatarsection}
                        />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               Team Member Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As a team member of namdah tour safaris incharge of
                                <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid container spacing={2}>
                                    <Grid sx={6}>
                                        <PhoneIcon/>:phone contact
                                    </Grid>
                                    <Grid sx={6}>
                                        <AlternateEmailIcon/>:email
                                    </Grid>
                                    <Grid sx={6}>
                                        <InstagramIcon/>:instagram
                                    </Grid>
                                    <Grid sx={6}>
                                        <FacebookIcon/>:facebook
                                    </Grid>
                                    <Grid sx={6}>
                                        <TwitterIcon/>:twitter
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
                <Grid xs={4}>
                <Card elevation={10}>
                    <div style={{height: 140}} >
                        <Avatar
                            alt="Namdah"
                            src="https://res.cloudinary.com/chrislm/image/upload/v1661403857/Namdah%20Tours/fun2.jpg"
                            sx={{ width: 100, height: 100 }}
                            style={styles.avatarsection}
                        />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Team Member Name
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            As a team member of namdah tour safaris incharge of
                            <br/>
                            -task task task task task task <br/>
                            -task task task task task task <br/>
                            -task task task task task task <br/>
                            -task task task task task task <br/>
                            -task task task task task task <br/>
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <Grid container spacing={2}>
                                <Grid sx={6}>
                                    <PhoneIcon/>:phone contact
                                </Grid>
                                <Grid sx={6}>
                                    <AlternateEmailIcon/>:email
                                </Grid>
                                <Grid sx={6}>
                                    <InstagramIcon/>:instagram
                                </Grid>
                                <Grid sx={6}>
                                    <FacebookIcon/>:facebook
                                </Grid>
                                <Grid sx={6}>
                                    <TwitterIcon/>:twitter
                                </Grid>
                            </Grid>
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
                <Grid xs={4}>
                    <Card elevation={10}>
                        <div style={{height: 140}} >
                            <Avatar
                                alt="Member"
                                src="https://res.cloudinary.com/chrislm/image/upload/v1661403840/Namdah%20Tours/wild3.jpg"
                                sx={{ width: 100, height: 100 }}
                                style={styles.avatarsection}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Team Member Name
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                As a team member of namdah tour safaris incharge of
                                <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                                -task task task task task task <br/>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <Grid container spacing={2}>
                                    <Grid sx={6}>
                                        <PhoneIcon/>:phone contact
                                    </Grid>
                                    <Grid sx={6}>
                                        <AlternateEmailIcon/>:email
                                    </Grid>
                                    <Grid sx={6}>
                                        <InstagramIcon/>:instagram
                                    </Grid>
                                    <Grid sx={6}>
                                        <FacebookIcon/>:facebook
                                    </Grid>
                                    <Grid sx={6}>
                                        <TwitterIcon/>:twitter
                                    </Grid>
                                </Grid>
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default Members;