import React from 'react';


const UserInformation = props => (!props.name) ? (
  <p>
    (You will see user information here)
  </p>
) : (<div>
  <h1>Here is your Lovely user's info</h1><br />
  <div className="line">Name: {props.name}</div>
  <div className="line">Repos:</div>
  {<RepositoriesInfo user={props.login} />}
</div>);

class RepositoriesInfo extends React.Component {

  constructor(props) {
    super(props);
    this.state = { repos: [] };
  }

  componentDidMount() {
    this.getReposInformation();
  }

  getReposInformation() {

    fetch(`https://api.github.com/users/${this.props.user}/repos`).then(results => { return results.json(); }).then(data => {
      this.setState({ repos: data })
    });

  }
  render() {
    return (
      <div className="line">
        <ul>
          {this.state.repos.map(item => (
            <li key={item.id}>{item.name}   <div className="description">  &#10140; {(item.description)? item.description: '\u26A0 (Ooops! Someone forgot the repo description ...)'  }</div></li>
          ))}
        </ul>
      </div>
    );
  }
}


export default UserInformation;
