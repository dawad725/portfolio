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
        fontWeight: "bold"
    },
    appBar: {
        backgroundColor: "white",
        boxShadow: "none"
    },
    buttonContainer: {
        marginLeft: "auto",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "2em"
        }
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={classes.appBar}
            >
                <Toolbar>
                    <Grid container>
                        <Button className={classes.text} href='/Home'>
                            Home
                        </Button>
                        <Grid item className={classes.buttonContainer}>
                            <Button className={classes.text} href='/About'>
                                About
                        </Button>
                            <Button className={classes.text} href='/Projects'>
                                Projects
                        </Button>
                            <Button className={classes.text} href='/Contact'>
                                Contact
                        </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}