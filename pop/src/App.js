import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
// import Modal from './components/Modal';
import ModalContact from './components/ModalContact';

import PlaceToVisit from './components/PlaceToVisit';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './images/dahlia3.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },



}));
function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />



      {/* <Modal /> */}
      <PlaceToVisit />
      <ModalContact />
      

    </div>
  );



}
export default App;