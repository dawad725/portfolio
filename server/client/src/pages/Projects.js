import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';
import NavBar from '../components/NavBar'
import Project from '../components/Project';
import CardDeck from 'react-bootstrap/CardDeck';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pageBanner: {
        textAlign: "center",
        marginTop: "2.5em"
    }
}))


export default function Projects() {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className={classes.root}>
                <Grid spacing={1} container>
                    <Grid item xs={12}>
                        <div className={classes.pageBanner}>
                            <Typography variant="h3">
                                Projects
                            </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={12} sm={6}>

                    </Grid>
                </Grid>
            </div>

        </>

    )
}






