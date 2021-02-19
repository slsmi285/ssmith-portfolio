import React from 'react';
import { Collapse } from '@material-ui/core';
import Projects from './Projects';
import { Grid, Container } from '@material-ui/core';
import places from '../static/places';
import Typography from '@material-ui/core/Typography';






const ImageCard = ({ title, checked }) => {

  const getPlacesList = placesObj => {

    return (
      <Grid item xs={4}> <Projects {...placesObj} styles={{ minHeight: "40vh" }}/> </Grid>
    );
  };

  return (
    <>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Typography style={{ display: "flex", justifyContent: "center", }}>
          <h1 style={{ color: "limegreen", textShadow: "-1px 1px black" }}>Portfolio</h1>
        </Typography>
        <Container>
          <Grid
            container
            spacing={3}
         
            flexWrap= 'wrap'
            justifyContent= 'space-around'
            overflow= 'hidden'
          //   alignContent="flex-start"
          //   justify="space-evenly"
          // style={{ minHeight: '100vh' }}
          >


            {places.map(placesObj => getPlacesList(placesObj))}

          </Grid>
        </Container>
      </Collapse>

    </>
  );
}

export default ImageCard;