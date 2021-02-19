import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Particles from 'react-particles-js';
import PlaceToVisit from './components/PlaceToVisit';
import particlesConfig from './config/particlesConfig';






const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './images/dahlia3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },



});


function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <CssBaseline />
      <div style={{ position: 'absolute' }}>
        <Particles width="100vw" params={particlesConfig} />
      </div>
      <Header />


      <PlaceToVisit />
      {/* <ModalContact /> */}



    </div>
  );



}


export default App;