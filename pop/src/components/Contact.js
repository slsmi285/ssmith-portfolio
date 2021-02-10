import React from "react";
import "./style.css";
import CardActions from '@material-ui/core/CardActions';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Card, TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import axios from 'axios';


var Mailto = require('react-mailto');





const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(3),
      width: '100%',
      backgroundColor: 'black',
    },
  },

  btnSend: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
    alignContent: 'center',
    bacgroundColor: 'transparent',
  },

  cntForm: {

    width: '100%',

    border: '3px solid #A4DD00',
    borderRadius: '8px',
    marginRight: '15px',
    webkitTransition: 'all 0.5s',
    mozTransition: 'all 0.5s',
    oTransition: 'all 0.5s',
    transition: 'all 0.5s',
  },


}));
const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "tomato",
    },
    "& label": {
      color: "tan",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        boroderColor: "tan",
      },
      "&:hover fieldset": {
        boderColor: "tan",
      },
      "& .Mui-focused fieldset": {
        borderColor: "tan",
      },
    },
  },
})(TextField);

export default ({ close }) => {
  const classes = useStyles();
  return (

    <Grid xs={12} className={classes.root} container>


      <Box>
        <Card component="form" className={classes.cntForm}>
          <h3 style={{ color: "limegreen", display: "center" }} variant="outlined" size="large" fullWidth="true">CONTACT ME</h3>
          {/* <Typography variant="h5" style={{ fontSize: "15px", textAlign: "center" }} >Contact Me</Typography> */}
          <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />

          <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />

          <InputField fullWidth={true} label="Company" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />


          <Button className={classes.btnSend} style={{ backgroundColor: 'transparent', display: 'center' }}
            variant="outlined"
            size="small"
            fullWidth="true"
            target="_top"
            rel="noopener noreferrer"
            
          ><Mailto email="sls2code@gmail.com" obfuscate={true}></Mailto>
            <Typography variant="button" style={{ fontSize: '1rem', backgroundColor: 'transparent' }} >
              SEND EMAIL
            </Typography>
          </Button>
          </Card>
          <CardActions>
            <Button 
              style={{ display: 'flex' }}
              fullWidth="true"
              size="medium"
              color="primary"
              href={`https://linkedin.com/in/sandrasmith1548dev/`} target='_blank'>
              <LinkedInIcon />
            </Button>
          </CardActions>
        
      </Box>
    </Grid>
  );
};