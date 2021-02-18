import React from 'react';
import emailjs from 'emailjs-com';
import { Typography, Button, TextField } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';


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
  

    

export default function Form() {
const classes = useStyles();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_joqxle9', e.target, 'user_MU203xES78vTYM5MYEgpG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }



    return (
        <div>
        <form onSubmit={sendEmail}>
            {/* <input type="hidden" name="contact_number" /> */}

            <InputField 
            fullWidth={true} 
            label="Name" 
            type="text"
            variant="outlined" 
            inputProps={{ style: { color: "#cccccc" } }} 
            margin="dense" size="small" 
            name="name" />

            <InputField 
            fullWidth={true} 
            label="Email" 
            type="email"
            variant="outlined" 
            inputProps={{ style: { color: "#cccccc" } }} 
            margin="dense" size="small" 
            name="email" />

            <InputField 
            fullWidth={true} 
            label="Company" 
            type="text"
            variant="outlined" 
            inputProps={{ style: { color: "#cccccc" } }} 
            margin="dense" 
            size="small" 
            name="company" />

            <InputField 
            fullWidth={true} 
            label="Message" 
            variant="outlined" 
            type="textarea"
            inputProps={{ style: { color: "#cccccc" } }} 
            margin="dense" size="small" 
            name="message" />

            <Button className={classes.btnSend} style={{ backgroundColor: 'transparent', display: 'center' }}
                variant="outlined"
                type="submit"
                value="Send"
                size="small"
                fullWidth="true"
                target="_top"
                rel="noopener noreferrer"

            >

                <Typography variant="button" style={{ fontSize: '1rem', backgroundColor: 'transparent' }} >
                    SEND EMAIL
                </Typography>
            </Button>
           
        </form>
        </div>
    );
}

