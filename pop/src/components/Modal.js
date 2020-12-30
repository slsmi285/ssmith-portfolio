import React from 'react';
import Popup from 'reactjs-popup';
import { makeStyles } from '@material-ui/core/styles';
import Content from "./Content.js";
import "./style.css";



const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '8vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column',
        },
       
    }

}));


 function Modal() {

 
  
    
    return (
       
        

  
      <div className="App">
        
        <Popup modal trigger={<button className="buttonName"><h1>About Me</h1></button>}>
        {close => <Content close={close} />}
      </Popup>
      </div>
      
        );

    }

    export default Modal;