import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import NavBar from '../components/NavBar'

import computerImage from "../images/computer.png"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    imageContainer: {
        marginLeft: "10em",
        marginTop: "10em",
        width: "250px",
        height: "100px",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "7em",
            width: "150px",
            height: "100px",
            marginTop: "5em"
        },
        [theme.breakpoints.only("sm")]: {
            marginLeft: "9em",
            width: "150px",
            height: "100px",
            marginTop: "9em"
        },
    },
    image: {
        width: "100%",
        height: "auto"
    },
    title: {
        textAlign: "center",
        marginTop: "11em",
        [theme.breakpoints.only("xs")]: {
            marginTop: "11em",
            fontSize: "10px"
        },
        [theme.breakpoints.only("sm")]: {
            marginTop: "13em",
            fontSize: "10px",

        },
    },
    buttonContainer: {
        marginTop: "3em"
    },
    button: {
        // boxShadow: "0 0 5px blue, 0 0 10px blue, 0 0 10px blue"
    },
    container: {
        marginTop: "3em"
    }
}))


export default function Home() {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className="fade-in">
                <div className={classes.root}>
                    <Grid container spacing={1} className={classes.container}>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={computerImage} alt="computer" />
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.title}>
                                <Typography variant="h2">
                                    Dave Awad
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    Software Engineer
                                </Typography>
                                <div className={classes.buttonContainer}>
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.button}
                                        href='/About'
                                    >
                                        About me
                                </Button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}






