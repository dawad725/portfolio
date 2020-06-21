import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import NavBar from '../components/NavBar'
import Project from '../components/Project';
import CardDeck from 'react-bootstrap/CardDeck';

// Screen shots of the applications 
import illuminate from '../images/illuminate.png'
import WeatherApp from '../images/WeatherApp.png'
import Portfolio from '../images/Portfolio.png'
import Medline from '../images/Medline.png'

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



                <CardDeck className={classes.cards}>
                    <Project title={"illuminate"} image={illuminate} border={'dark'} bg={'light'} href_app={'https://illuminate-app.herokuapp.com/'}
                        text={'Illuminate helps consumers understand the approximate savings potential they will see by upgrading their current lighting in their home to energy efficient LED lighting.'}
                        stack={'React | Redux | Express | Node.js | MongoDB | Bootstrap | Heroku'} href_code={'https://github.com/dawad725/illuminate'}
                    />
                    <Project title={"Dave's Weather Station"} image={WeatherApp} border={'dark'} bg={'light'} href_app={'https://daves-weather-station.herokuapp.com/'}
                        text={"This fun app allows a user to check the weather by zip code or city. It also gives you the option to see the five day forecast for that area."}
                        stack={'React | Material UI | Express | Node.js | Heroku |'} href_code={'https://github.com/dawad725/react-weather'}
                    />
                    <Project title={"Medline.io"} image={Medline} border={'dark'} bg={'light'} href_app={'https://www.medline.io/'}
                        text={"This is a platform that I'm currently volunteering on with a remote team to match medical supply companies to fronline workers in need of PPE while fighting the COVID-19 pandemic."}
                        stack={'React | Material UI | Heroku'} href_code={'https://github.com/ComeTiss/medline-frontend'}
                    />

                </CardDeck>

                <CardDeck className={classes.cards}>
                    <Project title={"My Portfolio Site"} image={Portfolio} border={'dark'} bg={'light'} href_app={null}
                        text={"I spent a lot of time on this very site so you can check out the kind of Software Engineer I am. Please let me know what you think : )"}
                        stack={'React | Material UI | React Bootstrap | Heroku'} href_code={'https://github.com/dawad725/portfolio'}
                    />
                    {/* <Project title={"Dave's Weather Station"} image={WeatherApp} border={'dark'} bg={'light'} href_app={'https://daves-weather-station.herokuapp.com/'}
                        text={"This app allows a user to check the weather and get the five day forecast."}
                        stack={'React | Material UI | Express | Node.js | Heroku |'} href_code={'https://github.com/dawad725/react-weather'}
                    />
                    <Project title={"My Portfolio Site"} image={Portfolio} border={'dark'} bg={'light'} href_app={null}
                        text={"I spent a lot of time on this very site so you can check out the kind of Software Engineer I am. Please let me know what you think : )"}
                        stack={'React | Material UI | React Bootstrap | Heroku'} href_code={'https://github.com/dawad725/portfolio'}
                    /> */}
                </CardDeck>


            </div>

        </>

    )
}






