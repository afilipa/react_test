import React from 'react';


const UserInformation = props => (!props.name) ? (
  <div>
    You will see user information here
  </div>
) : (<div>
  <h1>Here is your Lovely user's info</h1><br />
  <div className="line">Name: {props.name}</div>
  <div className="line">Repos:</div>
  {<RepositoriesInfo user={props.login} />}
</div>);

class RepositoriesInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { user: this.props.user, repos: [] };
    this.getReposInformation();
  }

  getReposInformation() {

    fetch(`https://api.github.com/users/${this.state.user}/repos`).then(results => { return results.json(); }).then(data => {
      this.setState({ repos: data })
    });

  }
  render() {
    return (
      <div className="line">
        <ul>
          {this.state.repos.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}


export default UserInformation;
