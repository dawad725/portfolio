import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip } from '@material-ui/core';
import NavBar from '../components/NavBar'

import dave from '../images/dave.png'

import linkedin from '../images/linkedin2.png'
import github from '../images/github.png'
import resumeIcon from '../images/resume.png'


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
            paddingRight: "20px",
            paddingLeft: "20px"

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
        fontSize: "25px",
        marginBottom: "1em",
        textAlign: "center",
        marginRight: "4em",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "4em",
            textAlign: "center",
            marginTop: "4em"
        },

    },
    chipContainer: {
        marginBottom: "1em"
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

    iconContainer: {
        marginBottom: "3em",
        marginTop: "6em",
        paddingRight: "4em",
        [theme.breakpoints.only("xs")]: {
            paddingRight: "4em",

        },

    }
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
                                    Hi, my name's Dave, and I'm a Full Stack Software Engineer based in Durham, North Carolina.
                                    I would consider myself a foodie, coffee lover, traveler, and someone that always has a general curiousity for how things work.
                            </Typography>
                                <Typography className={classes.text}>
                                    I'm excited to make immediate contributions to a team, expand my skill set and grow as a professional developer.
                            </Typography>
                                <Typography variant="h3" className={classes.stackTitle}>
                                    Tech stack
                            </Typography>
                                <div className={classes.chipContainer}>
                                    <Chip className={classes.chip} label="JavaScript" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="React" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="Redux" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="Backbone" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="jQuery" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="HTML" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                    <Chip className={classes.chip} label="CSS" style={{ backgroundColor: '#f50057', color: 'white' }} />
                                </div>
                                <div className={classes.chipContainer}>
                                    <Chip className={classes.chip} label="Node.js" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="Express" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="Passport" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="MongoDB" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="SQL" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="Mocha" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                    <Chip className={classes.chip} label="Chai HTTP" style={{ backgroundColor: '#3f51b5', color: 'white' }} />
                                </div>
                                <div className={classes.chipContainer}>
                                    <Chip className={classes.chip} label="Material UI" style={{ backgroundColor: 'green', color: 'white' }} />
                                    <Chip className={classes.chip} label="Bootstrap" style={{ backgroundColor: 'green', color: 'white' }} />
                                    <Chip className={classes.chip} label="Git" style={{ backgroundColor: 'green', color: 'white' }} />
                                    <Chip className={classes.chip} label="Github" style={{ backgroundColor: 'green', color: 'white' }} />
                                    <Chip className={classes.chip} label="VS Code" style={{ backgroundColor: 'green', color: 'white' }} />
                                    <Chip className={classes.chip} label="Postman" style={{ backgroundColor: 'green', color: 'white' }} />
                                    <Chip className={classes.chip} label="Swagger" style={{ backgroundColor: 'green', color: 'white' }} />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>


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

        </>

    )
}






