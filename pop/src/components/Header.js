import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import Button from "@material-ui/core/Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Link as Scroll } from 'react-scroll';
import ScrollTotop from './ScrollTotop';
import Skills from './Skills';
import Popup from 'reactjs-popup';
import "./style.css";
import Content from "./Content.js";
import Contact from './Contact';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        // margin: '5px',
        fontFamily: 'Raleway',
        minHeight: '10vh',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        },
    },
    rootTwo: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
            color: '#ffffff',
            textShadow: '-1px 1px #000',
            minHeight: '1rem',
            fontFamily: 'Raleway',
            fontSize: '12px',
        },
    },
    btnHeader: {
        backgroundColor: 'transparent',
        color: 'limegreen',
        textShadow: '-1px 1px black',
        fontFamily: 'Raleway',
        minHeight: '1rem',
        border: 'none',
        textAlign: 'center',
        fontSize: '10px',
        width: 'auto',
        webkitTransition: 'all 0.5s',
        mozTransition: 'all 0.5s',
        oTransition: 'all 0.5s',
        transition: 'all 0.5s',
        cursor: 'pointer',
        float: 'center',
    },
    a: {
        webkit: {
            textDocoration: "none",
        },
    },
    appbar: {
        background: 'none',

    },
    appbarTitle: {
        flexGrow: '1',
        fontSize: '1rem',
        display: 'flex',

    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',

    },
    colorText: {
        color: '#5AFF3D',
        textShadow: '-1px 1px #000',
        marginLeft: '10px',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#fff',
        fontSize: '3rem',
        marginTop: '20px',
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: '3rem',

    },
    skillBlock: {
        justify: 'center',
        marginLeft: '100px',
        // marginBottom: '20px',
    },
    navLinks: {
        cursor: 'pointer',
    },

}));
const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    const handleOnLink = pageURL => {
        history.pushState(pageURL);
    };

    return (
        <div className={classes.root} id="header">
            <div className="App">
                <AppBar className={classes.appbar} elevation={0}>

                    <Toolbar className={classes.appbarWrapper}>

                        <h1 className={classes.appbarTitle}>Sandra Smith<span className={classes.colorText}>My Portfolio</span></h1>

                        <Typography className={classes.rootTwo}>
                            <Popup modal
                                trigger={<button className={classes.btnHeader}>
                                    <h3>About Me</h3></button>}>
                                {close => <Content close={close} />}
                            </Popup>
                            <Popup modal trigger={<button className={classes.btnHeader}>
                                <h3>Contact Me</h3>
                            </button>}>
                                {close => <Contact close={close} />}
                            </Popup>
                            {<Button className={classes.btnHeader}>
                                <a style={{ textDecoration: "none", color: "limegreen", textShadow: "-1px 1px black" }} href="/resume.pdf" target="_blank" ><h3>RESUME</h3></a>
                            </Button>}

                            <IconButton>

                                <ScrollTotop />

                            </IconButton>
                        </Typography>
                    </Toolbar>

                </AppBar>
            </div>

            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapseHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Sandra Smith <br />
                        Web<span className={classes.colorText}>Developer</span>

                        <div className={classes.skillBlock}>
                            <Skills />
                        </div>


                    </h1>

                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>

                </div>
            </Collapse>

        </div>
    )
};


export default Header;