import React, { Component } from 'react';
// import logo from './logo.svg';
import Login from './Login';
import './App.css';



class App extends Component {
  constructor(){
    super();

    this.state = {
      logged: false,
      username: ''
    }
  }
  handleLogin = (username, isLoggedIn) => {
    console.log(username, isLoggedIn, ' in handleLogin');

    this.setState({
      username: username,
      logged: isLoggedIn
    });
  }
  render() {
    return (
      <div className="App">
      {this.state.logged ? <Login username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
