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
        </div>

        <div className="dummytitle"> Find a group or an upcoming event near you!</div>

        <div> Explore </div>

        <div className="dummylist">

          <div className="dummyitem">
            <div>Outdoors & Adventure</div>
          </div>

          <div className="dummyitem">
            <div>Tech</div>
          </div>


          <div className="dummyitem">
            <div>Family</div>
          </div>

          <div className="dummyitem">
            <div>Health & Wellness</div>
          </div>

          <div className="dummyitem">
            <div>Sports & Fitness</div>
          </div>

          <div className="dummyitem">
            <div>Learning</div>
          </div>


          <div className="dummyitem">
            <div>Photography</div>
          </div>

          <div className="dummyitem">
            <div>Food & Drink</div>
          </div>


          <div className="dummyitem">
            <div>Writing</div>
          </div>

          <div className="dummyitem">
            <div>Language & Culture</div>
          </div>

          <div className="dummyitem">
            <div>Music</div>
          </div>

          <div className="dummyitem">
            <div>Movements</div>
          </div>

          <div className="dummyitem">
            <div>LGBTQ</div>
          </div>

          <div className="dummyitem">
            <div>Film</div>
          </div>

          <div className="dummyitem">
            <div>Sci-Fi & Games</div>
          </div>

          <div className="dummyitem">
            <div>Beliefs</div>
          </div>

          <div className="dummyitem">
            <div>Arts</div>
          </div>

          <div className="dummyitem">
            <div>Book Clubs</div>
          </div>

          <div className="dummyitem">
            <div>Dance</div>
          </div>

          <div className="dummyitem">
            <div>Pets</div>
          </div>

          <div className="dummyitem">
            <div>Hobbies & Crafts</div>
          </div>

          <div className="dummyitem">
            <div>Fashion & Beauty</div>
          </div>

          <div className="dummyitem">
            <div>Social</div>
          </div>

          <div className="dummyitem">
            <div>Career & Business</div>
          </div>





        </div>
      </div>
    );

  }
}

export default Dummy;
