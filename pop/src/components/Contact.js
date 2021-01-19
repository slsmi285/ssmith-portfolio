import React from "react";
import "./style.css";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Paper, Card, TextField, Typography, Button, Box, Grid } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
// import { CardView } from 'react-card-with-image';
import profile2 from '../assets/profile2.jpg';



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
  },
  conBox: {
    backgroundColor: 'purple',
    minHeight: '50vh',
    AlignContent: 'center',
    width: '80%',
    border: '3px double #A4DD00',
    borderRadius: '8px',
    marginRight: '15px',
    webkitTransition: 'all 0.5s',
    mozTransition: 'all 0.5s',
    oTransition: 'all 0.5s',
    transition: 'all 0.5s',
  },
  contactImg: {
    marginTop: '20px',
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
    marginTop: '25px',
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
    marginTop: '15px',
    top: '550px',
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


        <div>
          <img className={classes.contactImg} src={profile2} alt="profile image" />
        </div>


        <div>
          <Card component="form" className={classes.cntForm}>

            {/* <Typography variant="h5" style={{ fontSize: "15px", textAlign: "center" }} >Contact Me</Typography> */}
            <InputField fullWidth={true} label="Name" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />

            <InputField fullWidth={true} label="Email" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />

            <InputField fullWidth={true} label="Company" variant="outlined" inputProps={{ style: { color: "#cccccc" } }} margin="dense" size="small" />


            <Button className={classes.btnSend} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
              contact me
                  </Button>

          </Card>
        </div>








      </Box>
    </Grid>
  );
};