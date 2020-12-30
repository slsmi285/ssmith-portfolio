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
    <div className="foot"> Contact Me </div>
    
    <div className="contentfoot">
      {/* <div className="img">
      <img src={profile} alt="profile image" />
      </div> */}
      {" "}
      {/* <FormData>

      </FormData> */}
    </div>
  </div>
);
    };