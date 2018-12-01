import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { user: {login:"afilipa"}, class: "App-intro" }
    
  }

  getUserInformation() {
    fetch(`https://api.github.com/users/${this.state.user.login}`).then(results => { return results.json(); }).then(data => { console.log(data); this.setState({ user: data, class: "intro-hidden" }) });

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={this.state.class}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={this.state.class}>
          <hr />
          <p>Click on the button to fetch the user information</p>
          <button onClick={this.getUserInformation.bind(this)}>
            Click me
          </button>
        </div>
        <UserInformation login={this.state.user.login} name={this.state.user.name} />
      </div>
    );
  }
}

export default App;
