import React from "react";
import "./style.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
// import Link from '@material-ui/core/Link';
import  { Paper, Card, TextField, Typography, Button, Box, Grid } from '@material-ui/core';
// import Form from '@material-ui/core/form';
import SendIcon from '@material-ui/icons/Send';



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
// {/* <div className={classes.modalfoot}> */}
<Box component="div" elevation={8} square style={{ background: "#9c27b0", height: '50vh', width: '600px', border: "1px solid limegreen", padding: "50px"}}>
<div className={classes.modalfoot}>
<a style={{ color: "limegreen", cursor: "pointer"}} className={classes.closefoot} onClick={close}>
        &times; 
    </a>
    </div>
<Grid container justify="center">
<Box component="form" className={classes.form}>
<Paper elevation={5} square>
<div>
  <Card>
    
      {/* <a className={classes.closefoot} onClick={close}>
        &times;
    </a> */}
    <Typography variant="h5" style={{color: "tomato", textAlign: "center", textTransform: "upperCase"}}>Contact Me</Typography>
    <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
    <br />
    <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
    <br />
    <InputField fullWidth={true} label="Company" variant="outlined"inputProps={{ style: { color: "white" } }} margin="dense" size="medium" />
    <br />
    
     <Button className={classes.btnSend} variant="outlined" fullWidth={true} endIcon={<SendIcon/>}>
       contact me
     </Button>
     {/* <Link
    component="button"
    variant="body2"
    onClick={() => {
      
    }}
  >
    Button
  
  </Link> */}
    
      
      

   

</Card>
    </div>
    
    </Paper>
    </Box>
    </Grid>
    </Box>
  );
};