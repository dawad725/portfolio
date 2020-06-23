import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    text: {
        color: "Black",
        textDecoration: "none",
        fontWeight: "bold",
    },
    appBar: {
        backgroundColor: "gray",
        boxShadow: "none",
    },
    buttonContainer: {
        marginLeft: "auto",
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={`${classes.appBar} MuiToolbar-gutters`}
            >
                <Toolbar>
                    <Grid container>

                        <Grid item className={classes.home} >
                            <Link to="/">
                                <Button className={classes.text}>
                                    Home
                                </Button>
                            </Link>
                        </Grid>

                        <Grid item className={classes.buttonContainer}>
                            <Link to="/About">
                                <Button className={classes.text}>
                                    About
                                </Button>
                            </Link>
                            <Link to="/Projects">
                                <Button className={classes.text}>
                                    Projects
                            </Button>
                            </Link>
                            <Link to="/Contact">
                                <Button className={classes.text}>
                                    Contact
                            </Button>
                            </Link>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}