import React from 'react';
import Axios from 'axios';
import moment from 'moment';
import {
    ListGroup,
    ListGroupItem
} from 'reactstrap';


handleChange = (event) => {
    // const { name, value } = event.target;
    this.setState({
        [event.target.name]: event.target.value
    })
    console.log("ShowVaccines State:", this.setState);
}
handleSubmit = (event) => {
    console.log('this was clicked');
    event.preventDefault();
    const registerData = {
        email: this.state.email,
        password: this.state.password
        // username: this.state.username
    }
    console.log('Captured login data', registerData);

    Axios.put('/api/Users/', registerData)
        .then(results => {
            this.toggle()
            console.log('Attempted Login:', results);
            sessionStorage.setItem('authenticated', true);
        })
        .catch(error => {
            console.log(error.response);
            alert('Email and password combination not found.');

        })
}

const renderVacs = () => {
    return (
        <div>Your Personal Vaccination Recommendation
            <ListGroup>
                <ListGroupItem>{"Because you are planning or are pregnant, it is recommended that you consult your physician about the vaccines:"} </ListGroupItem>
                <ListGroupItem>IIV  </ListGroupItem>
                <ListGroupItem>TDAP </ListGroupItem>
            </ListGroup>


            Vaccines are recommended for adults based on age, health conditions, job, and other factors.
            VacTRACK is NOT HIPPA compliant and only 'mock data' should be used.  No personal information
            will be retained by CDC.

            PLEASE NOTE: This list may include vaccines you may have had.
            Discuss the list with a doctor or your health care professional.
            * This vaccine assessment tool applies to adults 19 years or older.
    </div>
    )
}
renderVacs();

export default renderVacs;