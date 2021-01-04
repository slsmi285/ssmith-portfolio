import React from "react";
import "./style.css";
// import profile from './profile.jpg';
// import FormData from '@material-ui/core';


export default ({ close }) => {
  return (
    <div className="modalfoot">
      <a className="closefoot" onClick={close}>
        &times;
    </a>
      <div className="foot"> CONTACT INFO </div>
      
        <p>https://www.linkedin.com/in/sandrasmithdev1548/ | sls2code@gmail.com</p>
        <p>Voice: 865.696.1106</p>
        
        
      

      
    </div>
  );
};