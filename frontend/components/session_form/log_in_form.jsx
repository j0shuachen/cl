import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class LogInForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email:'',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
      }
    }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return (
      <div>
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <label>Welcome to MeetUp!</label>
        <br/>
        <span className="errors">{this.renderErrors()}</span>
        <div className="login-form">
          <br/>
          <div>
            <span className="ftext">Username:</span>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"/>
          </div>
          <br/>
          <div>
            <span className="ftext">Password:</span>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"/>
          </div>
          <br/>
          <input className="log-in-submit" type="submit" value="Log In"/>
          <br></br>
          <br></br>
            <span>{this.props.formType} or {this.navLink()}</span>

        </div>
        </form>
      </div>
      </div>
    );
  }
}


export default withRouter(LogInForm);
