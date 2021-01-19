import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import Projects from './Projects';
import { Grid, GridList, Container } from '@material-ui/core';
import places from '../static/places';
import Typography from '@material-ui/core/Typography';






const ImageCard = ({ title, checked }) => {

  const getPlacesList = placesObj => {

    return (
      <Grid item xs={4}> <Projects {...placesObj} styles={{ minHeight: "30vh"}}/> </Grid>
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
            spacing={5}
            direction="row"
            alignContent="flex-start"
            justify="space-evenly"
          // style={{ minHeight: '160vh' }}
          >


            {places.map(placesObj => getPlacesList(placesObj))}

          </Grid>
        </Container>
      </Collapse>

    </>
  );
}

export default ImageCard;