import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip } from '@material-ui/core';
import NavBar from '../components/NavBar'

import dave from '../images/dave.png'

import linkedin from '../images/linkedin2.png'
import github from '../images/github.png'
import resumeIcon from '../images/resume.png'
import home from '../images/home.png'

import resume from "../resume/resume.pdf"


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pageBanner: {
        textAlign: "center",
        marginTop: "2.5em"
    },
    picture: {
        marginLeft: "4em",
        marginTop: "8em",
        [theme.breakpoints.only("xs")]: {
            margin: "auto",
            width: "50 %",
            padding: "10px",
        },
    },
    container: {
        marginTop: "8em",
        paddingRight: "10px",
        paddingLeft: "10px",
        marginRight: "10px",
        [theme.breakpoints.only("xs")]: {
            marginTop: "3em",
            marginLeft: "3em",
            padding: "0"
        },
    },
    text: {
        fontSize: "16px",
        marginBottom: "1em",
        [theme.breakpoints.only("xs")]: {
            textAlign: "center",
        },
    },
    title: {
        textAlign: "center",
        fontSize: "20px",
        marginBottom: "1em"
    },
    chip: {
        marginRight: ".5em",
        marginBottom: "1em",
        [theme.breakpoints.only("xs")]: {
            marginBottom: "1em"
        },
    },
    stackTitle: {
        fontSize: "20px",
        marginBottom: "1em",
        textAlign: "center",
        marginRight: "4em",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "4em",
            textAlign: "center"
        },

    },
    chipContainer: {
        marginBottom: "1em"
    },
    imageContainer: {
        height: "40px",
        width: "40px",
        marginBottom: "3em",
        marginLeft: "7em",
        marginTop: "6em",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "3em",
            height: "35px",
            width: "35px",
        },
    },

    iconLabel: {
        marginTop: "5px",
        marginRight: "10px",
        width: "125px",
        [theme.breakpoints.only("xs")]: {
            // display: "none"
            fontSize: "10px"
        },
    },
    image: {
        width: "100%",
        height: "auto",
        marginLeft: "3px",
    },

}))


export default function About() {

    const classes = useStyles();

    return (
        <>
            <NavBar />

            <div className={classes.root}>
                <Grid spacing={1} container>
                    <Grid item xs={12}>
                        <div className={classes.pageBanner}>
                            <Typography variant="h3">
                                About me
                        </Typography>
                        </div>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <div className={classes.picture}>
                                <div className="polaroid">
                                    <img src={dave} alt='dave' />
                                    <p>not photogenic...</p>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <div className={classes.container}>
                                <Typography className={classes.text}>
                                    My name's Dave, and I'm a Full Stack Software Developer based in Durham, NC
                            </Typography>
                                <Typography className={classes.text}>
                                    I'm always striving to learn and take on new challenges.
                            </Typography>
                                <Typography variant="h3" className={classes.stackTitle}>
                                    Tech stack
                            </Typography>
                                <div className={classes.chipContainer}>
                                    <Chip className={classes.chip} label="JavaScript" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="React" variant="outlined" color='secondary' style={{ borderColor: '#f50057', color: '#f50057' }} />
                                    <Chip className={classes.chip} label="Redux" variant="outlined" color='secondary' style={{ borderColor: '#f50057', color: '#f50057' }} />
                                    <Chip className={classes.chip} label="Backbone" variant="outlined" color='secondary' style={{ borderColor: '#f50057', color: '#f50057' }} />
                                    <Chip className={classes.chip} label="jQuery" variant="outlined" color='secondary' style={{ borderColor: '#f50057', color: '#f50057' }} />
                                    <Chip className={classes.chip} label="HTML" variant="outlined" color='secondary' style={{ borderColor: '#f50057', color: '#f50057' }} />
                                    <Chip className={classes.chip} label="CSS" variant="outlined" color='secondary' style={{ borderColor: '#f50057', color: '#f50057' }} />
                                </div>
                                <div className={classes.chipContainer}>
                                    <Chip className={classes.chip} label="Node.js" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="Express" variant="outlined" color='secondary' style={{ borderColor: '#3f51b5', color: '#3f51b5' }} />
                                    <Chip className={classes.chip} label="Passport" variant="outlined" color='secondary' style={{ borderColor: '#3f51b5', color: '#3f51b5' }} />
                                    <Chip className={classes.chip} label="MongoDB" variant="outlined" color='secondary' style={{ borderColor: '#3f51b5', color: '#3f51b5' }} />
                                    <Chip className={classes.chip} label="SQL" variant="outlined" color='secondary' style={{ borderColor: '#3f51b5', color: '#3f51b5' }} />
                                    <Chip className={classes.chip} label="Mocha" variant="outlined" color='secondary' style={{ borderColor: '#3f51b5', color: '#3f51b5' }} />
                                    <Chip className={classes.chip} label="Chai HTTP" variant="outlined" color='secondary' style={{ borderColor: '#3f51b5', color: '#3f51b5' }} />
                                </div>
                                <div className={classes.chipContainer}>
                                    <Chip className={classes.chip} label="Material UI" style={{ backgroundColor: 'orange', color: 'white' }} />
                                    <Chip className={classes.chip} label="Bootstrap" variant="outlined" color='secondary' style={{ borderColor: 'orange', color: 'orange' }} />
                                    <Chip className={classes.chip} label="Git" variant="outlined" color='secondary' style={{ borderColor: 'orange', color: 'orange' }} />
                                    <Chip className={classes.chip} label="Github" variant="outlined" color='secondary' style={{ borderColor: 'orange', color: 'orange' }} />
                                    <Chip className={classes.chip} label="VS Code" variant="outlined" color='secondary' style={{ borderColor: 'orange', color: 'orange' }} />
                                    <Chip className={classes.chip} label="Postman" variant="outlined" color='secondary' style={{ borderColor: 'orange', color: 'orange' }} />
                                    <Chip className={classes.chip} label="Swagger" variant="outlined" color='secondary' style={{ borderColor: 'orange', color: 'orange' }} />
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid spacing={1} container className={classes.iconContainer}>
                    <Grid item xs={3}>
                        <div className={classes.imageContainer}>
                            <img className={classes.image} src={home} alt='Home' />
                            <label className={classes.iconLabel}>Durham, NC</label>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.imageContainer}>
                            <a href="https://github.com/dawad725" target="_blank" ><img className={classes.image} src={github} alt='github' /></a>
                            <label className={classes.iconLabel}>Github</label>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.imageContainer}>
                            <a href={resume} target="_blank" ><img className={classes.image} src={resumeIcon} alt='resume' /></a>
                            <label className={classes.iconLabel}>Resume</label>
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <div className={classes.imageContainer}>
                            <a href="https://www.linkedin.com/in/david-awad/" target="_blank" ><img className={classes.image} src={linkedin} alt='linkedin' /></a>
                            <label className={classes.iconLabel}>Linkedin</label>
                        </div>
                    </Grid>
                </Grid>

            </div>

        </>

    )
}






