import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class LogInForm extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props);

    this.state = {

      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();

    const user = this.state;
    this.props.processForm({user}).then(()=>this.props.history.push('/groups'));
  }

  demo(){
    const guests = {1:{
      username: 'guest1',
      password: 'guest1'
    }, 2:{
      username: 'guest2',
      password: 'guest2'
    }, 3:{
      username: 'guest3',
      email:'guest3',
    }, 4:{
      username: 'guest4',
      password: 'guest5'},
      5:{
        username: 'guest5',
        password: 'guest5'}
      };
      const user= guests[5];
      this.props.processForm({user}).then(()=>this.props.history.push('/groups'));

    }

  navLink(){
    if (this.props.formType === 'login'){
      return <Link className="logintosignup" to="/signup">Sign Up</Link>;
    } else {
      return <Link className="logintosignup" to="/login">Log In</Link>;
      }
    }

    cap(){
      if (this.props.formType === 'login'){
        return "Log In";
      }else{
        return "Sign Up";
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
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
        <div className="login-formtop"><div>Login</div></div>
        <div className="login-form">
          <br/>
            <div className="forms">Username:</div>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="forms"/>
          <br/>
            <div className="forms">Password:</div>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="forms"/>
          <br/>
            <span className="errors">{this.renderErrors()}</span>
            <div><input className="formo" type="submit" value="Log In"/> </div>


        </div>
        <div className="loginbottom">

          <div>Not a member?</div>
          <div className="logintosignup">{this.navLink()}</div>
          </div>

          <div onClick={this.demo}> guest demo </div>
        </form>
      </div>
    );
  }
}


export default withRouter(LogInForm);
