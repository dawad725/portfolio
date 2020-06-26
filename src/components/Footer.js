import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import linkedin from '../images/linkedin2.png'
import github from '../images/github.png'
import resumeIcon from '../images/resume.png'


import resume from "../resume/resume.pdf"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    iconContainer: {
        marginBottom: "3em",
        marginTop: "6em",
        paddingRight: "4em",
        [theme.breakpoints.only("xs")]: {
            paddingRight: "4em",

        },

    },
    imageContainer: {
        height: "40px",
        width: "40px",
    },
    iconLabel: {
        marginTop: "5px",
        marginRight: "10px",
        fontSize: "12px",
        [theme.breakpoints.only("xs")]: {
            fontSize: "10px",
            margin: "0"
        },
    },
    image: {
        width: "100%",
        height: "auto",
        marginLeft: "3px",
    },
}));

export default function Footer() {
    const classes = useStyles();



    return (
        <div className={classes.root}>
            <Grid container className={`${classes.iconContainer} iconBox`} >
                <Grid item xs={3}>

                </Grid>
                <Grid item xs={3} >
                    <div className={classes.imageContainer}>
                        <a href="https://github.com/dawad725" rel="noopener noreferrer" target="_blank" ><img className={classes.image} src={github} alt='github' /></a>
                        <label className={classes.iconLabel}>Github</label>
                    </div>
                </Grid>
                <Grid item xs={3} >
                    <div className={classes.imageContainer}>
                        <a href={resume} rel="noopener noreferrer" target="_blank" ><img className={classes.image} src={resumeIcon} alt='resume' /></a>
                        <label className={classes.iconLabel}>Resume</label>
                    </div>
                </Grid>
                <Grid item xs={3} >
                    <div className={classes.imageContainer}>
                        <a href="https://www.linkedin.com/in/david-awad/" rel="noopener noreferrer" target="_blank" ><img className={classes.image} src={linkedin} alt='linkedin' /></a>
                        <label className={classes.iconLabel}>Linkedin</label>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}