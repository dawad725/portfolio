import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/NavBar'
import { Typography, Grid } from '@material-ui/core';
import NavBar from '../components/NavBar'

import computer from "../images/computer.png"

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    imageContainer: {
        marginLeft: "15em",
        marginTop: "10em",
        width: "250px",
        height: "100px",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "3.5em"
        }
    },
    image: {
        width: "100%",
        height: "auto"
    },
    title: {
        textAlign: "center",
        margin: "0",
        paddingTop: "20%",
        color: "white",
        [theme.breakpoints.only("xs")]: {
            fontSize: "25px"
        }
    }
}))


export default function Home() {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className="fade-in">
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.imageContainer}>
                                <img className={classes.image} src={computer} alt="computer" />
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </>
    )
}






