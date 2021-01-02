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
    <div className="foot"> Contact Info </div>
    
    <div className="contentfoot">
     
     
    </div>
  </div>
);
    };