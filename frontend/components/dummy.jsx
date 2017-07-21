import React from 'react';
import { Link, withRouter} from 'react-router-dom';

class Dummy extends React.Component{

  render(){
    return (
      <div className="dummy">
        <div className="backgroundgif">
        <div className="dummyp">What do you love?</div>
        <br></br>
        <div className="dummypdos">Do more of it with MeetUp</div>
          <br></br>

        <div className="dummysignup">
          <Link className= "dummysignup" to="/signup"> Sign Up </Link>
        </div>
        <br></br>
        </div>
          <br></br>
          <br></br>
        Find a group or an upcoming event near you!

      </div>
    );

  }
}

export default Dummy;
