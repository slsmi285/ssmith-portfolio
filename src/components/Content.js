import React from "react";
import profile from '../static/profile.jpg';
import { makeStyles } from '@material-ui/core/styles';
import "./style.css";


const useStyles = makeStyles({

  root: {
    height: '100vh',
    marginTop: '5px',
    backgroundColor: 'black',
  },
  border: '2px solid #7ed321',
  img: {
    marginLeft: '5px',
    width: '200px',
    height: '300px',
    float: 'left',
    marginRight: '10px',
    padding: '3px',
    border: '2px double #cccccc',
  },
  modal: {
    marginBottom: '20px',
    borderTop: '2px double #A4DD00',
    marginTop: '60px',
  },
  close: {
    cursor: 'pointer',
    color: '#A4DD00',
    position: 'z-index',
    marginTop: '5px',
    float: 'right',
    display: 'block',
    padding: '12px 5px',
    lineHeight: '15px',
    right: '10px',
    top: '150px',
    fontSize: '11px',
    border: '3px double #A4DD00',
    borderRadius: '8px',
    marginRight: '15px',
    webkitTransition: 'all 0.5s',
    mozTransition: 'all 0.5s',
    oTransition: 'all 0.5s',
    transition: 'all 0.5s',
   
    "&:hover": {
      backgroundColor: "#ff0000",
      color: "#ffffff",
  },

  },
  
 
  content: {
    width: '90%',
    alignContent: 'center',
    // paddingTop: '5px',
    // padding: '10px 5px',
    fontFamily: 'Raleway',
    fontSize: '11px',
    // fontWeight: 'bold',
    float: 'right',
    marginTop: '20px',
    marginLeft: '5px',
    marginRight: '5px',
    color: '#ffffff',
  },
 

});

// const menuIcons = {

// }

const Content = ({ close }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div elevation={3} className={classes.modal}>
        <a href={() => false} className={classes.close} onClick={close}>
          &times;
          Close
    </a>
        {/* <div className={classes.header}>
        </div> */}
        <div className={classes.content}>
          <div>
            <img className={classes.img} src={profile} alt="profile" />
          </div>
          {" "}
      Aloha! I am Sandra Smith....East Tennessean/Hawaiian, Artist/Photographer, Gardener, and Full Stack Web Developer.  I am a recent graduate of Vanderbilt University Coding Bootcamp with a certificate in Full Stack Web Development.  
      I have crossed paths with coding through the years, and I have always been interested in it.  My first introduction to a coding class was in my second year of college.
        <br/> <br/>
      Life sort of took over, and with my associates degree I went into different facets of payroll, hr, sales and sales management.  While working in these roles I realized the workplace challenges that I faced and where coding could improve both my experience and my 
      customer's experience (internally and externally). 
      <br /><br />
      Computer programming always intrigued me, but before I realized that this is where I wanted to be, I decided to finish my college degree.   I graduated from Western Govenor's University with a Bachelor's Degree of Science in Business Management.   And if that was not enough, I had intended
      to go back for another Bachelor's in Accounting, but in my research of colleges, I came upon Vanderbilt's online coding class.  I was absolutely excited, as it had been out of my reach logistically. Closest class was in San Francisco, when I researched five years ago.  Timing could not have been more perfect, 
      I was not going to miss this opportunity to do what I have always wanted to do.  
      
    
      <br /><br />
      As I mentioned, in my past roles, I always had the thought of "there should be an app created for this problem".  Coding can make a process better, as quoted by Reshma Saujani "Coding is extremely creative and is an integral part of almost every industry." This is a Boolean statement, for sure!
      <br /><br />
      Let me share, briefly, some opportuntities where I know having a better program would have been golden:<br />
      <ul>
        <li>In many past roles, I often found that not all departments are connected or streamlined.  Creating an app to remove the manual computing would have improved efficiency. </li>
        <li>In retail management, shrinkage was not automated at the time that I did it, and someone solved that problem with barcode readers! </li>
        <li>In B2B, again, departments were all segregated, creating an app to reduce duplication and improve efficiency on reporting would have improved various areas of reporting.</li>

      </ul>

      <br />

      I am thrilled to be on this new journey!  I am seeing the world through coding, areas of opportunities exist out in the world, to make life easier!
      <br /><br />
      One of my past roles was a business owner, an Award Winning Wedding Photographer. I enjoyed it immensely for the challenges on job, you see its all mathematics and its all in the details.  Mathematics for lighting and shade, as well as getting the details and images done the first time on the front end.
      These days, its a weekend hobby for me, and where I keep up my skills, photographing my muses, my dogs.  Other passions when I am not coding involve the following: Cooking, gardening, and painting.  All of these require continuous practice, which set my foundation for coding, as it requires continous
      practice.  And I know the more I code, the better it gets!  Totally rewarding.
            <br /><br />
      Lastly, I mentioned gardening, I am a self taught gardener.  It is a lot harder than one thinks, its science, but I am not intimidated, as this is my new weekend passion.  Designing for 2021 and into 2022 various English Garden themes in my backyard.

      <br />

        </div>
      </div>
    </div>
  );
};

export default Content;
