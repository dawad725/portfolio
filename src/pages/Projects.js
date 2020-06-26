import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Project from '../components/Project';
import CardDeck from 'react-bootstrap/CardDeck';

// Screen shots of the applications 
import illuminate from '../images/illuminate.png'
import weatherApp from '../images/WeatherApp.png'
import portfolio from '../images/portfolio1.png'
import medline from '../images/Medline.png'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    pageBanner: {
        textAlign: "center",
        marginTop: "2.5em",
        marginBottom: "3em"
    },
    cards: {
        marginBottom: "1em",
        marginRight: "1em",
        [theme.breakpoints.only("xs")]: {
            marginLeft: "3em"
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
                    <Project title={"illuminate"} image={illuminate} border={'dark'} bg={'light'} href_app={'https://illuminate-app.herokuapp.com/'}
                        text={'Illuminate helps consumers understand the approximate savings potential they will see by upgrading their current lighting in their home to energy efficient LED lighting.'}
                        stack={'React | Redux | Express | Node.js | MongoDB | Bootstrap | Heroku'} href_code={'https://github.com/dawad725/illuminate'}
                    />
                    <Project title={"Dave's Weather Station"} image={weatherApp} border={'dark'} bg={'light'} href_app={'https://daves-weather-station.herokuapp.com/'}
                        text={"This fun app allows a user to check the weather by zip code or city. It also gives you the option to see the five day forecast for that area."}
                        stack={'React | Material UI | Express | Node.js | Heroku |'} href_code={'https://github.com/dawad725/react-weather'}
                    />
                    <Project title={"Medline.io"} image={medline} border={'dark'} bg={'light'} href_app={'https://www.medline.io/'}
                        text={"This is a platform that I'm currently volunteering on with a remote team to match medical supply companies to frontline workers in need of PPE while fighting the COVID-19 pandemic."}
                        stack={'React | Material UI | Heroku'} href_code={'https://github.com/ComeTiss/medline-frontend'}
                    />

                </CardDeck>

                <CardDeck className={classes.cards}>
                    <Project title={"My Portfolio Site"} image={portfolio} border={'dark'} bg={'light'} href_app={'https://daveawad.com'}
                        text={"Last but not least my portfolio site your currently using. Please let me know what you think : )"}
                        stack={'React | Material UI | React Bootstrap | Netlify'} href_code={'https://github.com/dawad725/portfolio'}
                    />
                </CardDeck>

                <Footer />

            </div>

        </>

    )
}






