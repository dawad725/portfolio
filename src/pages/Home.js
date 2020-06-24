import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import NavBar from '../components/NavBar'
import { Link } from 'react-router-dom';

import computerImage from "../images/computer.png"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    imageContainer: {
        width: "250px",
        height: "100px",
        marginBottom: "4em",
        [theme.breakpoints.only("xs")]: {
            width: "150px",
            height: "100px",
            marginTop: "5em"
        }
    },
    image: {
        width: "100%",
        height: "auto"
    },
    title: {
        textAlign: "center",
        marginTop: "11em",
        fontWeight: "bold",
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
        minHeight: "50vh",
        marginTop: "5em",
        [theme.breakpoints.only("sm")]: {
            paddingBottom: "4em",

        },
    },

    name: {
        fontSize: "60px",
        fontWeight: "bold",
        [theme.breakpoints.only("xs")]: {
            fontSize: "40px"
        },
    }
}))


export default function Home() {

    const classes = useStyles();

    return (
        <>
            <NavBar />

            <div className="fade-in">

                <div className={classes.root}>
                    <Grid container direction="column" alignItems="center" justify="center" className={`${classes.container} home`}>

                        <Grid item xs={12}>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={computerImage} alt="computer" />
                            </div>
                        </Grid>

                        <Grid item xs={12}>
                            <div className={`${classes.title} font`}>
                                <Typography className={classes.name}>
                                    Dave Awad
                                </Typography>
                                <br></br>
                                <Typography variant="h5">
                                    Software Engineer
                                </Typography>
                                <div className={classes.buttonContainer}>
                                    <Link to="/About">
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                            className={classes.button}
                                        >
                                            About me
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}






