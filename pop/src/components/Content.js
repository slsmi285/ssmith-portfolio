import React from "react";
import "./style.css";
import profile from './profile.jpg';
// import bwdahlia from './bwdahlia.jpg';

export default ({ close }) => {
  return (
    <div className="modal">
      <a className="close" onClick={close}>
        &times;
    </a>
      <div className="header"></div>
          

      <div className="content">
        <div className="img">
          <img src={profile} alt="profile image" />
        </div>
        {" "}
      I am Sandra Smith....East Tennessean/Hawaiian, Artist/Photographer, Gardener, and Full Stack Web Developer.

      I embarked on a new journey, and I am extremely excited about it, having recently graduated from Vanderbilt University Full Stack Coding Bootcamp.
      <br /><br />
      I have a passion for coding, but when I am not coding I can be found doing one of the following: Cooking and researching new recipes, painting in oil or acrylic, photographing, and gardening.

      Photographing involves a lot of mathematics, and I love the challenge of getting the image right the first time.  I have won a ton of awards internationally and locally for my wedding photography.
      While I enjoyed photographing weddings, I now love to photograph landscape and pets.  My greatest subjects are my two newest rescues, two boxers, Bailey and Buster.
      <br /><br />
      Finally, my latest weekend passion is gardening, all year round.  I am taking on a a huge project to design and landscape my backyard to create an English style garden with various themes.
    
      
        <h2 className="skills">Skills</h2>
        <p className="skillsets">HTML | CSS | Nodejs | Algorithms | Big O Notation | Javascript | Bootstrap | Handlebars |
    Reactjs | MySql | Firebase | MongoDB |Heroku | Git | Passport | MERN | </p>
    </div>
      </div>

    
  );
};

// export default Content;