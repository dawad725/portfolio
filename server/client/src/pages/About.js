import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import NavBar from '../components/NavBar'

import dave from '../images/dave.png'


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        textAlign: "center",
        marginTop: "3em"
    },
    picture: {
        marginLeft: "4em",
        marginTop: "4em"
    }

}))


export default function About() {

    const classes = useStyles();

    return (
        <>
            <NavBar />

            <div className={classes.root}>
                <Grid spacing={3} container>
                    <Grid item xs={12}>
                        <div className={classes.title}>
                            <Typography variant="h3">
                                About me
                        </Typography>
                        </div>
                    </Grid>

                    <Grid item xs={6} sm={12}>
                        <div className={classes.picture}>
                            <div className="polaroid">
                                <img src={dave} alt='dave' />
                                {/* <p>I take the worst pictures</p> */}
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>

    )
}






