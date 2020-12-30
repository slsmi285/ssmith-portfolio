import React from 'react';
import Popup from 'reactjs-popup';
import { makeStyles } from '@material-ui/core/styles';
import Contact from './Contact';

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


 function ModalContact() {

 
 
    
    return (
       
        
    
  
      <div className="Footer">
        
        <Popup modal trigger={<button className="buttonFoot"><h1>Contact Me</h1></button>}>
        {close => <Contact close={close} />}
      </Popup>
      </div>
      
        );

    }

    export default ModalContact;