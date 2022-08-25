import {Link} from "react-router-dom";
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia";
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';





function Home() {
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
                        <Grid xs={6}>
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
                        <Grid xs={6}>
                            <Paper elevation={3}>
                                <CardMedia
                                    component="img"
                                    image= "https://res.cloudinary.com/chrislm/image/upload/v1661403857/Namdah%20Tours/fun2.jpg"
                                alt="happy clients"

                                />
                            </Paper>
                        </Grid>
                        <Grid xs={6}>
                            <ImageList
                                sx={{ width: "auto", height: 450 }}
                                variant="quilted"
                                cols={4}
                                rowHeight={121}
                            >
                                {itemData.map((item) => (
                                    <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                                        <img
                                            {...srcset(item.img, 121, item.rows, item.cols)}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Grid>
                        <Grid xs={6}>
                            <div style={styles.textsection}>
                            <Typography gutterBottom variant="h5" component="div">
                                Want to make memories with those you cheriesh
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
                                <br/>
                                <br/>
                                Expore the wonderful parkages with us
                            </Typography>
                            <div>
                                <Link to="booking" style={{textDecoration: "none"}}><Button variant="outlined">MORE</Button></Link>
                            </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </>
    );
}

export default Home;




function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
            size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}


const itemData = [
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403855/Namdah%20Tours/fungroup3.jpg',
        title: 'Happy group',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403855/Namdah%20Tours/fun3.jpg',
        title: 'Happy client',
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403871/Namdah%20Tours/fun1.jpg',
        title: 'Happy client',
    },
    {
        img: "https://res.cloudinary.com/chrislm/image/upload/v1661403844/Namdah%20Tours/fungroup8.jpg",
        title: 'Happy group',
        cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403859/Namdah%20Tours/fungroup1.jpg',
        title: 'Happy group',
        cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403843/Namdah%20Tours/fungroup9.jpg',
        title: 'Happy group',
        author: '@namdah',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403838/Namdah%20Tours/fungroup11.jpg',
        title: 'Happy group',
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403837/Namdah%20Tours/fungroup12.jpg',
        title: 'Happy group',
    }
];

/*

    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403839/Namdah%20Tours/fungroup10.jpg',
        title: 'Happy group',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403847/Namdah%20Tours/fungroup6.jpg',
        title: 'Happy group',
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403845/Namdah%20Tours/fungroup7.jpg',
        title: 'Happy group',
    },
    {
        img: 'https://res.cloudinary.com/chrislm/image/upload/v1661403857/Namdah%20Tours/fun2.jpg',
        title: 'Bike',
        cols: 2,
    },
 */