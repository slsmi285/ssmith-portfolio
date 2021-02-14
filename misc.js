import React, { Component } from "react";
import "./style.css";
// import { useStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core'; 
import { Form, FormGroup, Input, Label } from 'reactstrap';

// import axios from 'axios';

class ContactForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            company: '',
            message: '',
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   


    render() {
//         const classes = this.props.classes;
//     }
// }
    return ( 

        <Grid xs={12} container>
            <Box>
                <Form onSubmit={this.handleSubmit} style={{ width: '600px'}}>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <Input
                        type="text"
                        name="name"
                        onChange={this.handleChange}
                        value={this.state.feedback} />
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                        type="email"
                        name="email"
                        onChange={this.handleChange}
                        value={this.state.feedback} />
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="company">Company:</Label>
                        <Input
                        type="text"
                        name="company"
                        onChange={this.handleChange}
                        value={this.state.feedback} />
                        
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <Input
                        type="textarea"
                        name="message"
                        onChange={this.handleChange}
                        value={this.state.feedback} />
                        
                    </FormGroup>
                    <Input type="Button" value="Submit"  onClick={this.handleSubmit} />
                </Form>

            </Box>

        </Grid>

    )
    }
    handleChange(event) {
        this.setState({feedback: event.target.value})
    }
    handleSubmit(event) {
        const templateId = 'template_Label';
        this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
    }
    sendFeedback (templateId, variables) {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
            console.log(`Email successfully sent!`)
        })
        .catch(err => console.error('Sorry, your email was not sent. Error:', err))
    }
    
}
export default ContactForm;

