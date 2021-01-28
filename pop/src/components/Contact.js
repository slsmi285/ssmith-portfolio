import React from "react";
import "./style.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Card, TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/core/Icon';


import profile2 from '../static/profile2.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(3),
      width: '100%',
    },
  },

  btnSend: {
    marginTop: '1rem',
    color: 'tomato',
    borderColor: 'tomato',
    alignContent: 'center',
    bacgroundColor: 'transparent',
  },
  conBox: {
    backgroundColor: 'darkviolet',
    minHeight: '100vh',
    AlignContent: 'center',
    width: '100%',
    border: '3px double #A4DD00',
    borderRadius: '8px',
    // marginRight: '15px',
    webkitTransition: 'all 0.5s',
    mozTransition: 'all 0.5s',
    oTransition: 'all 0.5s',
    transition: 'all 0.5s',
  },
  contactBox: {
    marginTop: '175px',
    width: '1230px',
    

  },
  contactImg: {
    // marginTop: '50px',
    marginRight: '50px',
    marginLeft: '150px',
    width: '30%',
    float: 'left',
    border: '3px solid #A4DD00',
    borderRadius: '8px',
    // marginRight: '15px',
    webkitTransition: 'all 0.5s',
    mozTransition: 'all 0.5s',
    oTransition: 'all 0.5s',
    transition: 'all 0.5s',

  },
  cntForm: {
    // justify: 'flex',
    width: '30%',
    // marginTop: '55px',
    // height: '48vh',
    border: '3px solid #A4DD00',
    borderRadius: '8px',
    marginRight: '15px',
    webkitTransition: 'all 0.5s',
    mozTransition: 'all 0.5s',
    oTransition: 'all 0.5s',
    transition: 'all 0.5s',
  },
  closefoot: {
    cursor: 'pointer',
    float: 'right',
    color: '#A4DD00',
    padding: '2px 5px',
    lineHeight: '20px',
    marginTop: '475px',
    // top: '550px',
    fontSize: '11px',
    border: '2px double #A4DD00',
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
      

      <Box elevation={2} square className={classes.conBox}>
        <div>
          <a className={classes.closefoot} onClick={close} >
            &times;
            Close
        </a>
        </div>

<div className={classes.contactBox}>
  
        <div>
          <img className={classes.contactImg} src={profile2} alt="profile image" />
        </div>


        <div>
          <Card component="form" className={classes.cntForm}>
<h3 style={{ color: "limegreen", display: "center"}} variant="outlined" size="large" fullWidth="true">CONTACT ME</h3>
            {/* <Typography variant="h5" style={{ fontSize: "15px", textAlign: "center" }} >Contact Me</Typography> */}
            <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />

            <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />

            <InputField fullWidth={true} label="Company" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />


            <Button className={classes.btnSend} style={{ backgroundColor: 'transparent', display: 'center'}}
              variant="outlined"
              size="small"
              fullWidth="true"
              target="_top"
              rel="noopener noreferrer"
              href={`mailto:sls2code@gmail.com`}
            >
              <Typography variant="button" style={{ fontSize: '1rem', backgroundColor: 'transparent' }} >
                  SEND EMAIL
              </Typography>
              
            </Button>

          


          </Card>
        </div>
        </div>








      </Box>
    </Grid>
  );
};