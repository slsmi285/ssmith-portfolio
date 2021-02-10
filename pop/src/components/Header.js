import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Button from "@material-ui/core/Button"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { Link as Scroll } from 'react-scroll';
import ScrollTotop from './ScrollTotop';
import Skills from './Skills';
import "./style.css";
import Content from "./Content.js";
import Contact from './Contact';

const drawerWidth = 240;


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

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: `url(${process.env.PUBLIC_URL + './images/vcoffee.jpg'})`,
    },
    drawerHeader: {
        // display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
}));
const Header = props => {
    const { history } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);

    const handleOnLink = pageURL => {
        history.pushState(pageURL);
    };
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root} id="header">
            <div className="App">
                <AppBar className={classes.appbar} elevation={0}>

                    <Toolbar className={classes.appbarWrapper}>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, open && classes.hide)}
                        >
                            <ContactMailIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap>
                            Sandra Smith Portfolio
                        </Typography>
                        <Drawer
                            className={classes.drawer}
                            variant="persistent"
                            anchor="left"
                            open={open}
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                        >
                            <div className={classes.drawerHeader}>
                                <IconButton onClick={handleDrawerClose}>
                                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                                </IconButton>
                            </div>
                            <Divider />
                            <Contact />

                        </Drawer>
                        <main
                            className={clsx(classes.content, {
                                [classes.contentShift]: open,
                            })}
                        >

                        </main>
                        {/* </div> */}

                        <Typography className={classes.rootTwo}>
                            <Popup modal
                                trigger={<button className={classes.btnHeader}>
                                    <h3>About Me</h3></button>}>
                                {close => <Content close={close} />}
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

        </div >
    )
};


export default Header;