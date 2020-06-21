import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Chip } from '@material-ui/core';
import NavBar from '../components/NavBar'



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },

}))


export default function Projects() {

    const classes = useStyles();

    return (
        <>
            <NavBar />


        </>

    )
}






