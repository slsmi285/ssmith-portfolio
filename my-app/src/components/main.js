import React from 'react';
import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Resume from './resume';
import { Switch, Route } from 'react-router-dome';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/aboutme" component={AboutMe} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
)

export default Main;