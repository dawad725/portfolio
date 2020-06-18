import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../components/NavBar'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
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

        <div>
            <Navbar />

        </div>

    )
}






