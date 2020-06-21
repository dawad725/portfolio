import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from '../components/NavBar'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pageBanner: {
        textAlign: "center",
        marginTop: "2.5em",
        marginBottom: "3em"
    },
}))


export default function Contact() {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className={classes.root}>

                <div className={classes.pageBanner}>
                    <Typography variant="h3">
                        Contact
                    </Typography>
                </div>



            </div>

        </>

    )
}






