import React, { Component } from 'react';
import { Grid, Cell, ListItem, List, ListItemContent } from 'react-mdl';
import vangogh_irises from '../assets/vangogh_irises.webp';


class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Sandra Smith</h2>
                        <img src={vangogh_irises}
                            alt="vangogh"
                            style={{ height: '250px', border: '1px solid black' }}
                        />
                        {/* <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            
                        </p> */}
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                   (865) 696-1106
                                   </ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                   toosandra@gmail.com
                                   </ListItemContent>
                            </ListItem>

                     
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;