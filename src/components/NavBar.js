import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Grid, MenuItem, Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    menuText: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        paddingRight: "10px",
        // fontSize: "20px"
        // [theme.breakpoints.only("xs")]: {
        //     fontSize: "10px"
        // },
    },

    navText: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        paddingRight: "10px",
    },

    homeText: {
        color: "white",
        textDecoration: "none",
        fontWeight: "bold",
        paddingLeft: "10px",
        // fontSize: "20px"
        // [theme.breakpoints.only("xs")]: {
        //     fontSize: "10px"
        // },
    },
    appBar: {
        backgroundColor: "#0B6AB0",
        boxShadow: "none",
    },
    menuButtonContainer: {
        marginLeft: "auto",
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },

    navButtonContainer: {
        marginLeft: "auto",
        [theme.breakpoints.down('sm')]: {
            display: "none"
        },
    },
    navbarLink: {
        color: "#0B6AB0",
        textDecoration: "none",
        fontWeight: "bold",
        paddingLeft: "10px",
    },
    menuItem: {
        height: "50px"
    },
    navbarMenu: {
        padding: 0
    },

    homeButton: {
        [theme.breakpoints.only('xs')]: {
            display: 'none',
        },
    },
    iconbutton: {
        marginRight: "5px"
    }
}));

export default function Navbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null)

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const showMenu = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];



    return (
        <div className={classes.root}>
            <AppBar
                position="static"
                className={`${classes.appBar} MuiToolbar-gutters`}
            >
                <Toolbar>

                    <Grid container>

                        <Grid item className={classes.homeButton} >
                            <Link to="/" className={classes.homeText}>
                                Home
                            </Link>
                        </Grid>

                        <Grid item className={`${classes.menuButtonContainer} navButtons`} >
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleMenu}
                                className={classes.iconbutton}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={showMenu}
                                onClose={handleClose}
                                classes={{
                                    list: classes.navbarMenu
                                }}
                            >
                                {menuLinks.map(it => (
                                    <MenuItem
                                        key={it.name}
                                        onClick={handleClose}
                                        className={classes.menuItem}
                                    >
                                        <Link to={it.path} className={classes.navbarLink}>
                                            {it.name}
                                        </Link>

                                    </MenuItem>
                                ))}
                            </Menu>
                        </Grid>

                            <Grid item className={classes.navButtonContainer}>
                                <Link to="/About" className={classes.navText}>
                                    About
                                </Link>
                                <Link to="/Projects" className={classes.navText}>
                                    Projects
                                </Link>
                                <Link to="/Contact" className={classes.navText}>
                                    Contact
                                </Link>
                            </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}