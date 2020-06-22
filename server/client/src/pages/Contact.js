import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import NavBar from '../components/NavBar'
import emailjs from 'emailjs-com';




const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
        [theme.breakpoints.only("xs")]: {
            padding: "1em",

        },


    },
    textField: {
        color: "white",
        backgroundColor: "white",
        marginBottom: "2em",
        [theme.breakpoints.only("xs")]: {
            width: "250px"
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

    const addItem = () => {
        const { name, email, message } = values

        if (!name || !email || !message) return



        console.log("values", values)
        sendEmail(values);
        clearState();
    }


    const [values, setValues] = useState(initialState)
    // console.log("values", values)

    function sendEmail(values) {
        const service_id = "default_service";
        const template_id = "portfoliosite";
        const user_id = 'user_CpSZxOogktSxfnutjVVbH'

        console.log("VAL", values)

        const template_params = {
            name: values.name,
            email: values.email,
            message: values.message
        }

        // console.log("checking ", template_params)
        emailjs.sendForm(service_id, template_id, template_params, user_id)
            .then((result) => {
                console.log(result.text);
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

                <div className={classes.container}>
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






