import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid } from '@material-ui/core';

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
                            <Button className={classes.text} href='/portfolio/'>
                                Home
                            </Button>
                        </Grid>

                        <Grid item className={classes.buttonContainer}>
                            <Button className={classes.text} href='/portfolio/About'>
                                About
                            </Button>
                            <Button className={classes.text} href='/portfolio/Projects'>
                                Projects
                            </Button>
                            <Button className={classes.text} href='/portfolio/Contact'>
                                Contact
                            </Button>
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}