import React, { Component } from 'react';
import { Redirect } from "react-router-dom"
import Axios from 'axios';
import FluidJumbo from '../FluidJumbo/index';
import RoundAbout from '../RoundAbout/RoundAbout';
import {
  Button,
  Form,
  Label,
  FormGroup,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

export default class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modal: this.props.showModal,
      nestedModal: false,
      email: "",
      password: "",
      username: "",
      closeAll: false,
      authenticated: false,
      redirect: false
    };

    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  handleChange = (event) => {
    // const { name, value } = event.target;
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log("Login State:", this.setState);
  }

  toggle () {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested () {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: !this.state.closeAll
    });
  }

  toggleAll () {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  handleSubmit = (event) => {
    console.log('this was clicked');
    event.preventDefault();
    const registerData = {
      email: this.state.email,
      password: this.state.password
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

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/register" />
    }
  }


  render () {
    return (
      <div>
        {this.props.showModal &&
          <Modal isOpen={this.state.modal} className={this.props.className}>
            <ModalHeader toggle={this.toggle.bind(this)}>MyVacTRACK Login</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="Email">email</Label>
                  <Input type="email" name="email" id="eEmail" placeholder="email address" onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input type="password" name="password" id="password" placeholder="password" onChange={this.handleChange} />
                </FormGroup>
              </Form>
              <br />
              <Button color="primary" onClick={this.handleSubmit} type="submit"> Login</Button>
            </ModalBody>
            <ModalFooter>
              <p><b>Not Yet Registered?</b></p>
              {this.renderRedirect()}
              <Button color="success" onClick={this.setRedirect}> Get Started </Button> {' '}
              {console.log('Getting Started Button', this.toggleNested)}
              <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
        }
        <RoundAbout />
        <FluidJumbo />
      </div>
    )
  }
}