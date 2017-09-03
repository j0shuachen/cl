import React from 'react';
import {Link} from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props){
    super(props);

    // console.log(this.props);
    this.state ={

    };
    this.renderUpdate = this.renderUpdate.bind(this);
  }

  componentDidMount(){
    this.props.fetchEvent(this.props.match.params.eventId);
    // setTimeout(this.renderUpdate, 500);
  }

  renderUpdate(){
    // let showz = `/groups/${this.props.evento.group_id}/events/${this.props.evento.id}/update`;
    let showz = `/groups/${this.props.groupId}/events/${this.props.eventId}/update`;
    if(this.props.currentUser){
    let g = this.props.currentUser;
    let v = this.props.evento.user_id;

    // if (this.props.currentUser.id === this.props.evento.user_id){
    if (v ===g.id){
    return (
      <div className="eventup">
        <Link className="eventup" to={showz}>Update Event</Link>
    </div>
  );}
}
  }

  render(){
    console.log(this.props);

    return (
      <div className="singleeventcontainer">
        <div className="singlemain">
          <div className="eventtitle">{this.props.evento.name}</div>
        <div className="eventolocation">{this.props.evento.location}</div>
        <div className="eventstart">{this.props.evento.start_time}</div>
          <div className="eventend">{this.props.evento.end_time}</div>
          <div className="eventinfo">{this.props.evento.description}</div>
          <div className="oo">{this.renderUpdate()}</div>
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
