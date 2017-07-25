import React from 'react';
import EventShow from './event_show';

import {Link, Route} from 'react-router-dom';

class EventIndex extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props);
  }

  componentDidMount(){
    this.props.fetchEvents();
  }

  render(){
    const {events} = this.props;
    const eventItems = this.props.events.map((event, idx) => {
      let showz = `/events/${event.id}`;

      return (
        <div key={idx}>
          <Link className="eventindex" to={showz}>{event.name}</Link>
        </div>
      );
    });

    return (
      <div>
        <ul>{eventItems}</ul>

      </div>
    );
  }
}

export default EventIndex;
