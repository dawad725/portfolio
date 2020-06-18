import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
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
        fontWeight: "bold"
    },
    appBar: {
        backgroundColor: "white"
    },
    right: {
        position: "right"
    }
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar
                position="fixed"
                className={classes.appBar}
            >
                <Toolbar>
                    <Button variant="h6" >
                        <Link to='/' className={classes.text}>
                            Home
                        </Link>
                    </Button>
                    <Button variant="h6" className={classes.right} >
                        <Link to='/About' className={classes.text}>
                            About
                        </Link>
                    </Button>
                    <Button variant="h6" className={classes.right}>
                        <Link to='/Contact' className={classes.text}>
                            Contact
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}