import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import NavBar from '../components/NavBar'
import emailjs from 'emailjs-com';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        [theme.breakpoints.only("xs")]: {
            paddingBottom: "3em",



        },
    },
    pageBanner: {
        textAlign: "center",
        marginTop: "2.5em",
        marginBottom: "3em"
    },
    formContainer: {
        textAlign: "center",
        backgroundColor: "#cc4b37",
        padding: "3em",
        marginTop: "5em",
        [theme.breakpoints.only("xs")]: {
            padding: "1em",
            marginTop: "2em"

        },

    },
    textField: {
        color: "white",
        backgroundColor: "white",
        marginBottom: "2em",
        [theme.breakpoints.only("xs")]: {
            // width: "250px"
        },
    },
    container: {
        paddingLeft: "40px",
        paddingRight: "40px",

    },
    button: {
        marginTop: "1em",
        backgroundColor: ""
    },
    labels: {
        float: "left",
        color: "white"
    },

    imageContainer: {
        height: "50px",
        width: "50px",
        marginBottom: "3em",
        marginLeft: "7em",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "5em",
            height: "25px",
            width: "25px"
        },
    },

    image: {
        width: "100%",
        height: "auto",
        marginLeft: "3px",

    },

    iconLabel: {
        marginTop: "5px",
        marginRight: "10px",
        width: "125px"

    },
    textContainer: {
        textAlign: "center",
        fontSize: "30px",
        marginBottom: "3em",

    },

    text: {
        fontSize: "30px",
        marginLeft: "2.5em",
        marginBottom: "1em",
        color: "#233768",
        textAlign: " left",
        [theme.breakpoints.only("xs")]: {
            fontSize: "20px",
            textAlign: "center",
            marginLeft: "0"
        },
    }



}))


export default function Contact() {


    const classes = useStyles();

    const initialState = {
        name: "",
        email: "",
        message: "",
    }

    const clearState = () => {
        setValues({ ...initialState });
    }

    const handleInputChange = e => {
        e.preventDefault();
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const addItem = (e) => {
        e.preventDefault();
        const { name, email, message } = values

        if (!name || !email || !message) return



        console.log("values", values)
        sendEmail(values);
        clearState();
    }


    const [values, setValues] = useState(initialState)

    function sendEmail(values) {
        const service_id = "default_service";
        const template_id = "portfoliosite";
        const user_id = 'user_CpSZxOogktSxfnutjVVbH'


        const template_params = {
            name: values.name,
            email: values.email,
            message: values.message
        }

        emailjs.send(service_id, template_id, template_params, user_id)
            .then((response) => {
                console.log(response.status, response.text);
            }, (error) => {
                console.log(error.text);
            });


    }


    return (
        <>
            <NavBar />

            <div className={classes.root}>

                <div className={classes.pageBanner}>
                    <Typography variant="h3">
                        Contact
                    </Typography>
                </div>
                <Grid spacing={1} container >
                    <Grid item xs={12}>
                        <Typography className={classes.text}>
                            Interested in working together?
                        </Typography>
                        <Typography className={classes.text}>
                            Drop me a line.
                        </Typography>
                    </Grid>
                </Grid>

                <div className={`${classes.container} formContainer`}>
                    <form onSubmit={addItem}>
                        <Grid spacing={1} container className={classes.formContainer}>
                            <Grid item xs={12} sm={6}>
                                <label className={classes.labels}>Name</label>
                                <TextField
                                    name="name"
                                    fullWidth={true}
                                    value={values.name}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    className={classes.textField}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6} >
                                <label className={classes.labels}>Email</label>
                                <TextField
                                    name="email"
                                    fullWidth={true}
                                    value={values.email}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={12} >
                                <label className={classes.labels}>Message</label>
                                <TextField
                                    id="outlined-multiline-static"
                                    name="message"
                                    multiline
                                    fullWidth={true}
                                    rows={4}
                                    value={values.message}
                                    variant="outlined"
                                    onChange={handleInputChange}
                                    className={classes.textField}
                                />
                            </Grid>
                            <Grid item xs={12} className={classes.button}>
                                <Button
                                    className={classes.button}
                                    color="primary"
                                    variant="contained"
                                    onClick={addItem}
                                >
                                    Submit
                            </Button>

                            </Grid>
                        </Grid>
                    </form>
                </div>



            </div>

        </>

    )
}






