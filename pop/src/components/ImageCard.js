import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse } from '@material-ui/core';
import Projects from './Projects';
import { Grid, GridList } from '@material-ui/core';
import places from '../static/places';
import Typography from '@material-ui/core/Typography';






const ImageCard = ({ title, checked }) => {

  const getPlacesList = placesObj => {

    return (
      <Projects {...placesObj} />
    );
  };

  return (
    <>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Typography style={{ display: "flex", justifyContent: "center",  }}>
          <h1 style={{ color: "limegreen", textShadow: "-1px 1px black" }}>Portfolio</h1>
        </Typography>

        <Grid 
          container
          // spacing={3}
          direction="row"
          alignContent="flex-start"
          justify="space-evenly"
          // style={{ minHeight: '160vh' }}
          >
          
          <GridList cols={3}>
          {places.map(placesObj => getPlacesList(placesObj))}
        </GridList>
</Grid>
      </Collapse>

    </>
  );
}

export default ImageCard;