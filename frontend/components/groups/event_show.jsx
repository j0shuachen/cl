import React from 'react';
import {Link} from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state ={

    };
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  render(){
    return (
      <div className="singleeventcontainer">
        <div>
          <div className="eventtitle">{this.props.evento.name}</div>
        <div className="eventlocation">{this.props.evento.location}</div>
        <div className="eventstart">{this.props.evento.start_time}</div>
          <div className="eventend">{this.props.evento.end_time}</div>
          <div className="eventinfo">{this.props.evento.description}</div>
        </div>


      </div>
    );
    // return (
    //   <div>
    //     {this.props.events[0] ? <div>{this.props.events[0].name}</div> : ""}
    //   </div>
    // );
  }
}

export default EventShow;
