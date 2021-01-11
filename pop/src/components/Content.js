import React from "react";
import "./style.css";
import profile from './profile.jpg';
import { makeStyles } from '@material-ui/core/styles';

import { blue, purple } from "@material-ui/core/colors";




const useStyles = makeStyles({
  // menuSlideContainer: {
  //   width: 250,
  //   background: '#511',
  //   height: '30rem',
  // },
  root: {
    height: '80vh',
    marginTop: '5px',
    backgroundColor: '#862d7e',
  },
  border: '2px solid #7ed321',
  img: {
    marginLeft: '10px',
    width: '200px',
    height: '275px',
    float: 'left',
    marginLeft: '20px',
    paddingRight: '10px',
    paddingTop: '3px',
  },
  modal: {
    marginBottom: '50px'
  },
  close: {
    cursor: 'pointer',
    color: '#ffffff',
    position: 'z-index',
    float: 'right',
    display: 'block',
    padding: '2px 5px',
    lineHeight: '15px',
    right: '10px',
    top: '150px',
    fontSize: '12px',
    borderRadius: '18px',
    marginRight: '15px',
  

  },
  // close: hover {
  //   color: blue;
  // },
  content: {
    width: '98%',
    alignContent: 'center',
    paddingTop: '5px',
    padding: '10px 5px',
    fontFamily: 'Raleway',
    fontSize: '12px',
    // fontWeight: 'bold',
    float: 'right',
    marginTop: '60px',
    marginBottom: '10px',
    marginRight: '5px',
    color: '#ffffff',
  },
  // header: {
  //   width: '100%',
  //   borderBottom: '1px solid #697689',
  //   fontSize: '20px',
  //   fontWeight: 'bolder',
  //   textAlign: 'center',
  //   fontFamily: 'Raleway',
  // },

});

const menuIcons = {

}

export default ({ close }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div elevation={8} className={classes.modal}>
        <a className={classes.close} onClick={close}>
          &times;
          Close
    </a>
        <div className={classes.header}>
        </div>
        <div className={classes.content}>
          <div>
            <img className={classes.img} src={profile} alt="profile image" />
          </div>
          {" "}
      I am Sandra Smith....East Tennessean/Hawaiian, Artist/Photographer, Gardener, and Full Stack Web Developer.
      <br /><br />

      Coding has always been an interest for me. I was exposed to it in college, then through the course of life, I experienced areas where I realized that changes to a program could make a process better.
      <br /><br />

      As a Retail Store Manager, a couple of areas of improvement or creation in automating would have improved employee effeciency.  Automating the employee scheduling would have made a huge difference in time spent creating the weekly store schedule.
      Another area of efficiency at the time, was inventory control for shrinkage. In most cases, inventory received would be automatically added to the store's inventory by entering the shipping barcode information, however, when it came to inventory for shrinkage was
      done manually. As a Store Manager, I had often discussed with my HQ team about how wonderful automating this process for accuracy, and improving bottom-line would be for all.
      <br /><br />
      In another role, working with a Telecomm giant, first as a Consultant, then as a B2B Sales Representative, I came upon so many areas of opportunity where I thought improving or creating the programming could make life better, and again, this would add improvement to the company's processes and bottom-line revenue.
       There were applications that were not entirely connected, not all dashboards could be seen at once. Being able to track processes and clients through a dashboard for both front end sales and back-end processes would have made it easier.
      Tracking one hundred accounts manually is very challenging, and staying on your "A" game was a must, but I often thought if it were all automated, I could increase my workflow and efficiency.
      <br /><br />
      As you can tell, coding was a forethought of my mine in every instance and for each role that I worked in.  Until recently, the opportunity to embark on this path was just not logistically available.
      However, when the "perfect storm" presented itself through a Coding Bootcamp with Vanderbilt University -- yes!  right in my backyard (practically), but online, I could not wait to jump on the chance to finally do what I wanted to do.

      <br /><br />

      I have a passion for coding, but when I am not coding, I can be found doing one of the following: Cooking and researching new recipes, painting in oil or acrylic, photographing, and gardening.
      <br /><br />
      Photographing involves a lot of mathematics, and I love the challenge of getting the image right the first time.  I have won a ton of awards internationally and locally for my wedding photography.
      While I enjoyed photographing weddings, I now love to photograph landscape and pets.  My greatest subjects are my two newest rescues, two boxers, Bailey and Buster.
      <br /><br />
      Finally, my latest weekend passion is gardening, all year round.  I am taking on a a huge project to design and landscape my backyard to create an English style garden with various themes.

      <br />

        </div>
      </div>
    </div>
  );
};

// export default Content;