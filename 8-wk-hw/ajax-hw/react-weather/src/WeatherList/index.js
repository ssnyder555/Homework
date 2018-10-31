import React, { Component } from 'react';


class Login extends Component {
  constructor(){
    super();
// super calls the Component class's constructor,
// which allows us to use 'this'

this.state = {
  username: '',
  password: ''
}
  }
  handleInput = (e) => {
    console.log(e.currentTarget.name, e.currentTarget.value);
    //arrow function automattically bind this. which means we can use this
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });


  }
  handleSubmit = (e) => {
// to stop the page from refreshing
// we don't want to refresh cus we are making a SPA
e.preventDefault();

// this is the messenger function from the app component that will
// allow us to lyft up state from the parent Component
      this.props.handleLogin(this.state.username, true);

  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' onChange={this.handleInput} value={this.state.username} placeholder='username'/>
        <input type='password' name='password' onChange={this.handleInput} value={this.state.password} placeholder='password'/>
        <input type='submit' value='Login'/>
      </form>
    )
  }
}

export default Login;
