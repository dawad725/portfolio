import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Project from '../components/Project';
import CardDeck from 'react-bootstrap/CardDeck';

// Screen shots of the applications 
import illuminate from '../images/illuminate.png'
import weatherApp from '../images/weather.png'
import portfolio from '../images/portfolio.png'
import medline from '../images/Medline.png'
import mockup from '../images/mockup.png'
import youtube from '../images/youtube.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pageBanner: {
        color: "#4A4A4A",
        textAlign: "center",
        marginTop: "2.5em",
        marginBottom: "3em"
    },
    cards: {
        marginBottom: "1em",
        textAlign: "center",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "2.5em",
        },
    }
}))


export default function Projects() {

    const classes = useStyles();

    return (
        <>
            <NavBar />
            <div className={classes.root}>

                <div className={classes.pageBanner}>
                    <Typography variant="h3">
                        Projects
                    </Typography>
                </div>



                <CardDeck className={`${classes.cards} carddeck`}>
                    <Project title={"illuminate"} image={illuminate} bg={'light'} href_app={'https://illuminate-app.herokuapp.com/'}
                        text={'Illuminate helps consumers understand the approximate savings potential they will see by upgrading their current lighting in their home to energy efficient LED lighting.'}
                        stack={'React | Redux | HTML | CSS | Express | Node.js | MongoDB | Bootstrap | Heroku'} href_code={'https://github.com/dawad725/illuminate'}
                    />
                    <Project title={"Dave's Weather Station"} image={weatherApp} bg={'light'} href_app={'https://daves-weather-station.herokuapp.com/'}
                        text={"This fun app allows a user to check the weather by zip code or city. It also gives you the option to see the five day forecast for that area."}
                        stack={'React | Material UI | HTML | CSS | Express | Node.js | Heroku |'} href_code={'https://github.com/dawad725/react-weather'}
                    />
                    <Project title={"Medline.io"} image={medline} bg={'light'} href_app={'https://www.medline.io/'}
                        text={"This is a platform that I'm currently volunteering on with a remote team to match medical supply companies to frontline workers in need of PPE while fighting the COVID-19 pandemic."}
                        stack={'React | Material UI | HTML | CSS | Heroku'} href_code={'https://github.com/ComeTiss/medline-frontend'}
                    />

                </CardDeck>

                <CardDeck className={classes.cards}>
                    <Project title={"Dave-Tube"} image={youtube} bg={'light'} href_app={null}
                        text={"This is a smaller version of youtube that I built using backbone.js as a framework."}
                        stack={'Backbone.js | HTML | CSS | Bootstrap '} href_code={'https://github.com/dawad725/backbone-youtube'}
                    />
                    <Project title={"My Portfolio Site"} image={portfolio} bg={'light'} href_app={'https://daveawad.com'}
                        text={"That's right, this site you're perusing is no template. Check out the code and let me know what you think :)"}
                        stack={'React | Material UI | React Bootstrap | HTML | CSS | Netlify'} href_code={'https://github.com/dawad725/portfolio'}
                    />
                    <Project title={"Mockup page"} image={mockup} bg={'light'} href_app={'https://dawad725.github.io/mockup/'}
                        text={"This is an HTML page I created based on a given mockup to work from."}
                        stack={'HTML | CSS | Bootstrap | GH Pages'} href_code={'https://github.com/dawad725/mockup'}
                    />
                </CardDeck>

                <Footer />

            </div>

        </>

    )
}






