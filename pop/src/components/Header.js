import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, IconButton, Toolbar, Collapse, Box, Link, Nav } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import ScrollTotop from './ScrollTotop';
import Skills from './Skills';
import Popup from 'reactjs-popup';
import "./style.css";
import Content from "./Content.js";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '5px',
        fontFamily: 'Raleway',
        // minHeight: '10vh',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        },

    },
    appbar: {
        background: 'none',

    },
    appbarTitle: {
        flexGrow: '1',
        fontSize: '1rem',
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem',

    },
    colorText: {
        color: '#5AFF3D',
        textShadow: '-1px 1px #000',
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
}));
export default function Header() {
    // render() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>Sandra Smith: <span className={classes.colorText}>
                        My Portfolio</span></h1>
                    {/* <ul>
                        <Link>About Me</LInk>
                        <Link>Projects</Link>
                        <Link>Contact</LInk>
                    </ul> */}
                    <div className="App">
        
        <Popup modal trigger={<button className="buttonMe"><h3>About Me</h3></button>}>
        {close => <Content close={close} />}
      </Popup>
      </div>

                    <IconButton>
                       
                        <ScrollTotop />

                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* <Box> */}
            <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapseHeight={50}>
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Sandra Smith <br />
            Web<span className={classes.colorText}>Developer</span>
            
                        <div className={classes.skillBlock}>
                            <Skills />
                        </div>
                        

                    </h1>
                    {/* <br /> */}
                    <Scroll to="place-to-visit" smooth={true}> 
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>

                </div>
            </Collapse>
            {/* </Box> */}
        </div>
    );
}

