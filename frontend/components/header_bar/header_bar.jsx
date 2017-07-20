
import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class HeaderBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      username: '',
      email:'',
      password: ''
    };
    this.logg = this.logg.bind(this);
  }

  logg(e){
    e.preventDefault();
    const user = this.state;
    this.props.logout(user);
  }

  render() {

    return (
    <div className="log-out">
      <button onClick={this.logg} className="log-out-button">Log Out</button>
    </div>
  );
}
}

export default HeaderBar;
