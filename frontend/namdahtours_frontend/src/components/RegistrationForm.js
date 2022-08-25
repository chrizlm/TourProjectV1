import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import {Alert, Grid, Snackbar} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import {styled} from "@mui/system";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import axios from "axios";


const MyCardComponent = styled('div')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    //borderRadius: 4,
    maxWidth: true,
    backgroundImage:
        "url('https://res.cloudinary.com/chrislm/image/upload/v1661403840/Namdah%20Tours/wild3.jpg')",
    height:'auto',
    //marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',

});

function RegistrationForm() {
    const {register, handleSubmit, formState: {errors}, control} = useForm( { mode: "onBlur"} );
    const handleRegistration = (data) => {console.log(data);
        axios.post("https://namdah-tours-client.herokuapp.com/save", data)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
        setOpen(true);
    }
    const handleError = (errors) => {};
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };



    const registerOptions = {
        first_name: { required: "First name is required"},
        last_name: { required: "Last name is required"},
        email: { required: "Email is required"},
        id_number: {required: "id or passport number required"},
        phone_number: {
            required: "phone number required",
            minLength: {
                value: 10,
                message: "number must be at least 10 digits"
            }
        },
    };

    return(
        <MyCardComponent>
            <Card sx={{ maxWidth: true , margin: 10, alignContent: 'center', borderRadius: 0}} elevation={12}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" style={{textAlign: "center"}}>
                        Register with us
                    </Typography>
                    <Box
                        component="form"
                        sx={{
                            flexGrow: 1,
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <form onSubmit={handleSubmit(handleRegistration, handleError)}>
                            <Grid container spacing={2} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <Controller
                                            name="first_name"
                                            control={control}
                                            defaultValue=""
                                            rules={registerOptions.first_name}
                                            render={({field}) => (
                                                <TextField {...register('first_name')} label="First Name" type="text"/>
                                            )}
                                        />
                                        {errors?.first_name && errors.first_name.message
                                            ? <Alert severity="error" > {errors?.first_name && errors.first_name.message}</Alert>
                                            :<small></small>}

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <Controller
                                            name="last_name"
                                            control={control}
                                            defaultValue=""
                                            rules={registerOptions.last_name}
                                            render={({field}) => (
                                                <TextField {...register('last_name')} label="Last Name" type="text"/>
                                            )}
                                        />
                                        {errors.last_name && errors.last_name.message
                                            ? <Alert severity="error">{errors?.last_name && errors.last_name.message}</Alert>
                                            : <small></small>}

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue=""
                                            rules={registerOptions.email}
                                            render={({field}) => (
                                                <TextField {...register('email')} label="email" type="email"/>
                                            )}
                                        />
                                        {errors?.email && errors.email.message
                                            ? <Alert severity="error">{errors?.email && errors.email.message}</Alert>
                                            : <small></small>}

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <Controller
                                            name="id_number"
                                            control={control}
                                            defaultValue=""
                                            rules={registerOptions.id_number}
                                            render={({field}) => (
                                                <TextField {...register('id_number')} label="id_number" />
                                            )}
                                        />
                                        {errors?.id_number && errors.id_number.message
                                            ? <Alert severity="error">{errors?.id_number && errors.id_number.message}</Alert>
                                            : <small></small>}

                                    </div>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <div>
                                        <Controller
                                            name="phone_number"
                                            control={control}
                                            defaultValue=""
                                            rules={registerOptions.phone_number}
                                            render={({field}) => (
                                                <TextField {...register('phone_number')} label="phone_number" />
                                            )}
                                        />
                                        {errors?.phone_number && errors.phone_number.message
                                            ? <Alert severity="error">{errors?.phone_number && errors.phone_number.message}</Alert>
                                            : <small></small>}

                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="outlined" onClick={handleSubmit(handleRegistration, handleError)}>SUBMIT</Button>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                            Details sent successfully !
                                        </Alert>
                                    </Snackbar>
                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </CardContent>
            </Card>
        </MyCardComponent>
    );
}

export default RegistrationForm;