import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, CardText, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url() center / cover' }}>React Project #1</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

          
           

                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url() center / cover' }}>MongoDB Project #2</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

            
       

                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url() center / cover' }}>Passport/MySql Project #3</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

            
     

                    <Card shadow={5} style={{ width: '450px', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url() center / cover' }}>HTML Project #4</CardTitle>
                        <CardText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mauris sagittis pellentesque lacus eleifend lacinia...
                    </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                            <Button colored>CodePen</Button>
                            <Button colored>LiveDemo</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if(this.state.activeTab === 1) {
            return (
              <div><h1>This is MongoDB</h1></div>
            )
          } else if(this.state.activeTab === 2) {
            return (
              <div><h1>This is Passport/MySql</h1></div>
            )
          } else if(this.state.activeTab === 3) {
            return (
              <div><h1>This is HTML</h1></div>
            )
          }
      
        }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>Passport/MySql</Tab>
                    <Tab>HTML</Tab>

                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                {this.toggleCategories()}


            </div>
        )
    }
}

export default Projects;