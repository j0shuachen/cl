import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class updateUserForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email:'',
      // password: '',
      image_url: '',
      location: '',
      id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadButton = this.uploadButton.bind(this);
  }

  update(field){
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.updateUser({user});
  }

  componentDidMount(){
    this.props.fetchUser(this.props.currentUser.id).then(()=>this.prev());
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

  prev (){
    this.setState({name: this.props.currentUser.name});
    // console.log(this.state.name);
    this.setState({username: this.props.currentUser.username});
    // console.log(this.state.username);
    this.setState({location: this.props.currentUser.location});
    this.setState({image_url: this.props.currentUser.image_url});
    this.setState({email: this.props.currentUser.email});
    // this.setState({location: this.props.currentUser.location});
    // console.log(this.state.location);
  }

  uploadButton () {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS, (errors, images) => {
        if(errors === null){
         this.setImage(images[0].url);
        }
      }
    );

  }

  render () {
    // console.log(this.props);
    return(
      <div className="signup-form-container">

          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <input type="hidden" ref="id" value={this.state.id}/>

            <div className="signupformtop">
            </div>

            <label className="userupdatepic">
              <div className="userques"> Update your picture? </div>
                {this.state.image_url ? <img className='groupformpic' src={this.state.image_url}></img> :<img className='groupformpic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260585/default_group_normal_ymyl3t.png'></img> }
                <div className='uplob' onClick={this.uploadButton}>Upload</div>

            </label>
            <br/>
              <label className="form">
                <span className="login-input">Email:</span>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="login-input"/>
              </label>
              <br/>
            <label className="form">
              <span className="login-input">Username:</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"/>
            </label>
            <br/>

            <label className="form">
              <span className="login-input">Name:</span>
                <input type="text"
                  value={this.state.name}
                  onChange={this.update('name')}
                  className="login-input"
                  placeholder="This will be your name displayed to other users"
                  />
            </label>
            <br/>
            <label className="form">
              <span className="login-input"> Location:</span>
              <input type="text"
                value={this.state.location}
                onChange={this.update('location')}
                className="login-input"
                placeholder="We use this to find groups and events near you!"
                />
            </label>

              <br/>
            <input type="submit" value="Update" className="formos"/>

        </form>

          </div>
    );
  }
}



export default withRouter(updateUserForm);



// <br/>
//   <label className="form">
//     <span className="login-input">New password:</span>
//     <input type="password"
//       value={this.state.password}
//       onChange={this.update('password')}
//       className="login-input"/>
//   </label>
//   <br/>
//   <label className="form">
//     <span className="login-input">Confirm password:</span>
//     <input type="password"
//       value={this.state.password}
//       onChange={this.update('password')}
//       className="login-input"/>
//   </label>
