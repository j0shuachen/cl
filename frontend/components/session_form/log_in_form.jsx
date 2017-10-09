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
      <div>
        {this.props.errors.map((error, i) => (
          <div className='errorz' key={`error-${i}`}>
            {error}
          </div>
        ))}
      </div>
    );
  }

  render () {
    return (
      <div className="signup-form-container">
        <form onSubmit={this.handleSubmit} className="signup-form-box">
        <div className="signupformtop">Login</div>
        <div className="signupformbody">
          <br/>
            <label className="usernameform">

            <div className="signupques">Username:</div>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="signupinput"/>
            </label>
            <label className="usernameform">

            <div className="signupques">Password:</div>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="signupinput"/>
            </label>
            <span className="errors">{this.renderErrors()}</span>
            <div><input className="formos" type="submit" value="Log In"/> </div>


        </div>
        <div className="signupwelcome">

          <div className='signupbuttontop'>
              <div className="alreadyamember">Not a member?</div>
              <br/>
              <div className="signtuptologin">{this.navLink()}</div>
              </div>
          </div>

        </form>
      </div>
    );
  }
}


export default withRouter(LogInForm);
