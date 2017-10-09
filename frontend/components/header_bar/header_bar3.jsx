
import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import Modal from 'react-modal';

class HeaderBar3 extends React.Component{
  constructor(props){
      super(props);
      // console.log(this.props);
      this.state = {
        modalIsOpen: false
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.personalGreeting = this.personalGreeting(this);
      this.sessionLinks = this.sessionLinks(this);
      this.demo=this.demo.bind(this);
    }

  sessionLinks (){
    return (
    <div className="login-signup">
      <Link to="/login"
        className="sign-in-button">Login
      </Link>
      <Link to="/signup"
        onClick= {this.openModal}
       className="sign-up-button">Signup
       <Modal
         isOpen={this.state.modalIsOpen}
         onRequestClose={this.closeModal}
         contentLabel="test"
         >

       </Modal>
      </Link>
    </div>
  );
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }
  openModal(){
    this.setState({modalIsOpen: true});
  }

  demo(){
    const guests = {1:{
      username: 'guest1',
      password: 'guest11'
    }, 2:{
      username: 'guest2',
      password: 'guest21'
    }, 3:{
      username: 'guest3',
      email:'guest31',
    }, 4:{
      username: 'guest4',
      password: 'guest41'},
      5:{
        username: 'guest5',
        password: 'guest51'},
      6:{
        username: 'guest6',
        password: 'guest61'},
      7:{
        username: 'guest7',
        password: 'guest71'},
      8:{
        username: 'guest8',
        password: 'guest81'},
      9:{
        username: 'guest9',
        password: 'guest91'},
      10:{
        username: 'guest10',
        password: 'guest101'}
      };

      const num = Math.floor((Math.random() * 10) + 1);
      const user= guests[num];
      this.props.login({user}).then(()=>this.props.history.push('/groups'));
    }

personalGreeting (currentUser, logout) {
  return (
    <div>
      <h1 className="header-name">Hi, {currentUser.username}!</h1>
      <Link to="/"className="header-button">Log Out
      </Link>
  </div>
);
}
render(){

  const personalGreeting = (currentUser, logout) => (
    <div className="mainheaderbar">
    <div className="create-header">
      <div className="logo">

          <Link to="/groups" className="header-link">
            <img className='headerlogo' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507253413/Drawing_3_pa3iwm.jpg'/>
          </Link>
        </div>
      <Link to="/create/group" className="create-header-button">Create a Clique</Link>
        <Link to="/" className="demo-button" onClick={this.demo}> Demo </Link>
  </div>

    <div className="greeting">
      <div className="header-name">  <Link className='headertoprof' to={`/users/${currentUser.id}`}>{'Hi, ' + currentUser.username +'!'}</Link></div>
      <Link to="/"className="header-button" onClick={logout}>Log Out
      </Link>
  </div>
</div>
  );

  const sessionLinks =() =>{
    return (
      <div className="mainheaderbar">
      <div className="create-header">
        <Link to="/create/group" className="create-header-button">Create a Clique</Link>
          <Link to="/" className="demo-button" onClick={this.demo}> Demo </Link>
    </div>
      <div className="logo">
        <Link to="/groups" className="header-link">
          <img className='headerlogo' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507253413/Drawing_3_pa3iwm.jpg'/>


        </Link>
      </div>
    <div className="login-signup">

      <Link to="/login"
        className="sign-in-button">Login
      </Link>
      <Link to="/signup"
        className="sign-up-button">Signup
      </Link>
    </div>
    </div>
  );
};
const {currentUser, logout} = this.props;
  return (
    currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
    );
}

}


// <Link to="/"
//   onClick= {this.openModal}
//  className="sign-up-button">Signup
//  <Modal
//    isOpen={this.state.modalIsOpen}
//    onRequestClose={this.closeModal}
//    contentLabel="test"
//    >
//    <div className="modalsignupbox">
//      <div className="modalform">
//    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=2403839689&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.6%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Fsecure.meetup.com%252Fties%252Ffacebook%252F%26state%3DreturnUri%253Dhttps%25253A%25252F%25252Fwww.meetup.com%25252Ffind%25252F%26scope%3Demail%252Cuser_friends%26client_id%3D2403839689%26ret%3Dlogin%26logger_id%3D7cb80dd5-f648-dc76-69be-63f8a7746194&cancel_url=https%3A%2F%2Fsecure.meetup.com%2Fties%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DreturnUri%253Dhttps%25253A%25252F%25252Fwww.meetup.com%25252Ffind%25252F%23_%3D_&display=page&locale=en_US&logger_id=7cb80dd5-f648-dc76-69be-63f8a7746194"
//      className="modal-button" onClick={this.closeModal}>Continue with Facebook</a>
//    <a href="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=855636443875-pmqkjkrj33pvp0t1ghecgp4f3l746856.apps.googleusercontent.com&as=-2fb3a287b6a5dd26&destination=https%3A%2F%2Fsecure.meetup.com&approval_state=!ChQwLXRuUWNVdmoyeHFEVklLS090VhIfTV9uZGg4QnNBZ3NWb1Bud0gtVkU1UUdtQUJRUTFoVQ%E2%88%99ADiIGyEAAAAAWXI3MqdBpse-HQrUCrxu-2zCH7F71UmP&xsrfsig=AHgIfE_TM6mXc4uFcB2pNwRAZAl0XW3J6Q&flowName=GeneralOAuthFlow"
//      className="modal-button" onClick={this.closeModal}>Continue with Google</a>
//
//    <Link to="/signup" className="modal-button" onClick={this.closeModal}>Or sign up with email</Link>
//    </div>
//  </div>
// </Modal>
// </Link>

// <Link to="https://www.facebook.com/login.php?skip_api_login=1&api_key=2403839689&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.6%2Fdialog%2Foauth%3Fredirect_uri%3Dhttps%253A%252F%252Fsecure.meetup.com%252Fties%252Ffacebook%252F%26state%3DreturnUri%253Dhttps%25253A%25252F%25252Fwww.meetup.com%25252Ffind%25252F%26scope%3Demail%252Cuser_friends%26client_id%3D2403839689%26ret%3Dlogin%26logger_id%3D7cb80dd5-f648-dc76-69be-63f8a7746194&cancel_url=https%3A%2F%2Fsecure.meetup.com%2Fties%2Ffacebook%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DreturnUri%253Dhttps%25253A%25252F%25252Fwww.meetup.com%25252Ffind%25252F%23_%3D_&display=page&locale=en_US&logger_id=7cb80dd5-f648-dc76-69be-63f8a7746194"
//   className="modal-button" onClick={this.closeModal}>Continue with Facebook</Link>
// <Link to="https://accounts.google.com/signin/oauth/oauthchooseaccount?client_id=855636443875-pmqkjkrj33pvp0t1ghecgp4f3l746856.apps.googleusercontent.com&as=-2fb3a287b6a5dd26&destination=https%3A%2F%2Fsecure.meetup.com&approval_state=!ChQwLXRuUWNVdmoyeHFEVklLS090VhIfTV9uZGg4QnNBZ3NWb1Bud0gtVkU1UUdtQUJRUTFoVQ%E2%88%99ADiIGyEAAAAAWXI3MqdBpse-HQrUCrxu-2zCH7F71UmP&xsrfsig=AHgIfE_TM6mXc4uFcB2pNwRAZAl0XW3J6Q&flowName=GeneralOAuthFlow"
//   className="modal-button" onClick={this.closeModal}>Continue with Google</Link>

export default HeaderBar3;


// 'http://res.cloudinary.com/dxeyfggji/image/upload/v1507097808/Drawing_1_gfv2bu.jpg'
