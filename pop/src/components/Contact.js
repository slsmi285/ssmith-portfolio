import React from "react";
import "./style.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import  { Paper, Card, TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
// import { CardView } from 'react-card-with-image';
import profile2 from '../assets/profile2.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(3),
      background: 'purple',
      minheight: '10vh',
      width: '100%',
    },
  },
    // form: {
    //   top: '40%',
    //   left: '40',
    //   transform: 'translate(-50%, -50%)',
    //   position: 'absolute',
    //   float: 'right',
    // },
    btnSend: {
      marginTop: '1rem',
      color: 'tomato',
      borderColor: 'tomato',
    },
    modalfoot: {
      borderBottom: '1px solid limegreen',
      width: '100%',
     
      
    },
    contactImg: {
      height: '40vh',
      float: 'left',
      border: '4px double #A4DD00', 
      // marginRight: '20px',
    },

  closefoot: {
      cursor: 'pointer',
      float: 'right',
      color: '#A4DD00',
      padding: '2px 5px',
      lineHeight: '15px',
      marginTop: '1px',
      top: '630px',
      fontSize: '11px',
      border: '2px double #A4DD00',
      borderRadius: '8px',
      marginRight: '15px',
      webkitTransition: 'all 0.5s',
      mozTransition: 'all 0.5s',
      oTransition: 'all 0.5s',
      transition: 'all 0.5s',
    },
    cntForm: {
      minHeight: '40vh',
      width: '200px',
      backgroundColor: '#cccccc',
      float: 'right',
      border: '4px double #A4DD00', 
      marginLeft: '5px',
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

<Box component="div" elevation={8} square style={{ background: "#9c27b0", height: '65vh', width: '800px', border: "1px solid limegreen", padding: "50px", width: '100%' }}>
<div className={classes.modalfoot}>
<a className={classes.closefoot} onClick={close} >
        &times; 
    Close</a> 
    </div>
<Grid  style={{ marginTop: '30px', marginLeft: '25px' }} container>
<Box component="form" className={classes.form}>
<div>
          <img className={classes.contactImg} src={profile2} alt="profile image" />
         
        
<Paper className={classes.cntForm} elevation={8} square >
<div>
  <Card>
  
    <Typography variant="h5" >Contact Me</Typography>
    <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="large" />
    <br /><br />
    <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="large" />
    <br /><br />
    <InputField fullWidth={true} label="Company" variant="outlined"inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="large" />
    <br /><br />
    
     <Button className={classes.btnSend} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
       contact me
     </Button>

</Card>
</div>
</Paper>
    </div>
    
    
    </Box>
    </Grid>
    </Box>
  );
};