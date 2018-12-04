import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInformation from './UserInformation';

class App extends Component {

  constructor(props) {
    super(props);
    this.state={ user: { login: "afilipa" }, class: "App-intro" }

  }

  getUserInformation() {
    fetch(`https://api.github.com/users/${this.state.user.login}`).then(results => { return results.json(); }).then(data => { console.log(data); this.setState({ user: data, class: "intro-hidden" }) });
  }

  handleChange(event) {
    /* new login  */
    this.setState({ user: {login:event.target.value }})
  }

  handleSubmit(event){
    this.getUserInformation();
    event.preventDefault();
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

          <form onSubmit={this.handleSubmit.bind(this)} >
            <p>Insert the Lovely Username you are looking for <br/>and get some information about his/her github  </p>
            <label> Username: </label>
            <input type="text" name="name" value={this.state.user.login} onChange={this.handleChange.bind(this)} />
            <input type="submit" value="Submit" />
          </form>
          

        </div>
        <UserInformation login={this.state.user.login} name={this.state.user.name} />
      </div>
    );
  }
}

export default App;
