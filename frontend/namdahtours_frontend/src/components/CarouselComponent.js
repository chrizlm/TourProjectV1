import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CardMedia from "@mui/material/CardMedia";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}



const theme = createTheme({
    palette: {
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
        exclusive: {
            main: '#dc143c',
            contrastText: '#fff',
        }
    },
});

export default function CarouselComponent() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const styles = {
        column: {
            float: "left",
            width: "50%",
            padding: "10px",
            height: "300px",
        },
        row : {
            content: "",
            display: "table",
            clear: "both",
        }
    }

    return (
        <Box sx={{ width: '100%' }}>

            <TabPanel value={value} index={0} >
                <div style={{height:"450px"}}>
                <Paper elevation={3} >
                    <CardMedia
                        component="img"
                        image= "https://res.cloudinary.com/chrislm/image/upload/v1661403838/Namdah%20Tours/package1.jpg"
                        alt="happy clients"
                        style={{height: "225px"}}
                    />
                </Paper>
                <Paper elevation={0}>
                    <Typography>
                        <h3>Amaizing sagana</h3>
                        <Typography style={{fontSize: 16, float: "left"}}>
                            Date: 10th september 2022
                        </Typography>
                        <br/>
                        <DecoretedList/>
                    </Typography>
                </Paper>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <div style={{height:"450px"}}>
                    <Paper elevation={3} >
                        <CardMedia
                            component="img"
                            image= "https://res.cloudinary.com/chrislm/image/upload/v1661403838/Namdah%20Tours/package2.jpg"
                            alt="happy clients"
                            style={{height: "225px"}}
                        />
                    </Paper>
                    <Paper elevation={0}>
                        <Typography>
                            <h3>Masai mara</h3>
                            <Typography style={{fontSize: 16, float: "left"}}>
                                Date: 14th september 2022
                            </Typography>
                            <br/>
                            <div >
                                <DecoretedList/>
                            </div>
                        </Typography>
                    </Paper>
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <div style={{height:"450px"}}>
                    <Paper elevation={3} >
                        <CardMedia
                            component="img"
                            image= "https://res.cloudinary.com/chrislm/image/upload/v1661403838/Namdah%20Tours/package1.jpg"
                            alt="happy clients"
                            style={{height: "225px"}}
                        />
                    </Paper>
                    <Paper elevation={0}>
                        <Typography>
                            <h3>Mombasa</h3>
                            <Typography style={{fontSize: 16, float: "left"}}>
                                Date: 29th september 2022
                            </Typography>
                            <br/>
                            <DecoretedList/>
                        </Typography>
                    </Paper>
                </div>
            </TabPanel>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}
                 style={{ display: "flex",
                     justifyContent: "center"}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="SAGANA" {...a11yProps(0)} />
                    <Tab label="MASAI MARA" {...a11yProps(1)} />
                    <Tab label="MOMBASA" {...a11yProps(2)} />
                </Tabs>
            </Box>
        </Box>
    );
}


let DecoretedList = function () {
    const styles = {
        listelements : {
            display:"flex",
            flexWrap: "wrap",
            gap: "5px"
        }
    }
    return(
        <>
            <ThemeProvider theme={theme}>
                <div>
                    <span style={{float:"left", paddingRight: "5px"}}>Activities: </span>
                </div>
                <Stack direction="row" spacing={1} style={styles.listelements}>
                    <Chip label="Swimming" color="neutral" variant="outlined" />
                    <Chip label="Team building" color="neutral" variant="outlined" />
                    <Chip label="Fun" color="neutral" variant="outlined" />
                    <Chip label="network" color="neutral" variant="outlined" />
                </Stack>
                <br/>
                <div>
                    <span style={{float: "left", paddingRight:"5px"}}>Inclusive: </span>
                </div>
                <Stack direction="row" spacing={1} style={styles.listelements}>
                    <Chip label="Drinks" color="success" variant="outlined" />
                    <Chip label="Transport" color="success" variant="outlined" />
                    <Chip label="Lunch" color="success" variant="outlined" />
                    <Chip label="Photography" color="success" variant="outlined" />
                </Stack>
                <br/>
                <span style={{float:"left", paddingRight: "5px"}}>Exclusive: </span>
                <Stack direction="row" spacing={1} style={styles.listelements}>
                    <Chip label="Entry fee" color="exclusive" variant="outlined" />
                    <Chip label="Accomodation" color="exclusive" variant="outlined" />
                    <Chip label="Snacks" color="exclusive" variant="outlined" />
                </Stack>
            </ThemeProvider>
        </>
    )
}


let List1Inclusive = function() {
    const styles = {
        listinclusive:{
            display: "inline",
            listStyle: "disc",
            margin: 0,
            padding: 0,
            float: "left"
        },
        heading:{
            color: "green",
            fontWeight: "normal",
        }
    }
    return (
        <div style={styles.listinclusive} >
            <span style={styles.heading}>Inclusive</span>
            <li>List1</li>
            <li>List2</li>
            <li>List3</li>
            <li>List4</li>
            <li>List5</li>
        </div>
    );
};

let List1Exclusive = function() {
    const styles = {
        listexclusive:{
            display: "inline-block",
            width: "50%",
            listStyle: "circle",

        },
        heading:{
            color: "red",
            fontWeight: "normal",
        }
    }
    return (
        <div style={styles.listexclusive}>
            <span style={styles.heading}>Exclusive </span>
            <li>List6</li>
            <li>List7</li>
            <li>List8</li>
            <li>List9</li>
            <li>List10</li>
        </div>
    );
};