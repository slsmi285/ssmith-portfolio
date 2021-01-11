import React from "react";
import "./style.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import  { Paper, Card, TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
// import { CardView } from 'react-card-with-image';
import profile2 from './profile2.jpg';



const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(3),
      background: 'purple',
      minheight: '10vh',
    },
    form: {
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
    },
    btnSend: {
      marginTop: '1rem',
      color: 'tomato',
      borderColor: 'tomato',
    },
    modalfoot: {
      borderBottom: '1px solid limegreen',

    },

    closefoot: {
      cursor: 'pointer',
      float: 'right',
      padding: '2px 5px',
      lineHeight: '15px',
      marginTop: '1px',
      top: '630px',
      fontSize: '24px',
      background: 'purple',
      borderRadius: '18px',
      border: '1px solid #cfcece',
    },
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

<Box component="div" elevation={8} square style={{ background: "#9c27b0", height: '65vh', width: '800px', border: "1px solid limegreen", padding: "50px" }}>
<div className={classes.modalfoot}>
<a style={{ color: "limegreen", cursor: "pointer", border: '3px double limegreen', padding: '3px', elevation: '8' }} className={classes.closefoot} onClick={close} >
        &times; 
    Close</a> 
    </div>
<Grid  style={{ marginTop: '30px', marginLeft: '25px' }} container>
<Box component="form" className={classes.form}>
<div>
          <img style={{ height: '40vh', float: 'left', marginRight: '20px', border: '4px double limegreen', hover: 'blue' }} src={profile2} alt="profile image" />
         
        
<Paper elevation={8} square style={{ minHeight: '40vh', width: '300px', backgroundColor: '#cccccc', float: 'right', border: '4px double limegreen' }}>
<div>
  <Card>
  
    <Typography variant="h5" style={{color: "limegreen", textAlign: "center", textTransform: "upperCase", backgroundColor: "#cccccc" }}>Contact Me</Typography>
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