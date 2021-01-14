import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
// import Modal from './components/Modal';
import ModalContact from './components/ModalContact';
// import Resume from './components/Resume';
import PlaceToVisit from './components/PlaceToVisit';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + './assets/dahlia3.jpg'})`,
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
  // <div className={classes.root}>
  // <Switch>
  //   <Route exact from="/" render={props => <Home {...props} />} />
  //   {/* <Route exact path="/modal" render={props => <AboutMe {...props} />} /> */}
  //   <Route exact path="/places-to-visit" render={props => <Projects {...props} />}/>
  //   <Route exact path="/modalcontact" render={props => <Contact {...props} />} />
  //   <Route exact path="/resume" render={props => <Resume {...props} />} />


  // </Switch>
  // </div>


}
export default App;