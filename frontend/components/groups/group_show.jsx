import React from 'react';
import {Link} from 'react-router-dom';
// import GroupEnrollment from '../group_enrollments/group_enrollment_container';

class GroupShow extends React.Component{

  constructor (props) {
    super(props);
    console.log(this.props);
    this.state= {

    };
    // this.renderEvents = this.renderEvents.bind(this);
    this.renderU = this.renderU.bind(this);
  }


  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId);
  }

renderU (){
  const show =`/groups/${this.props.group.id}/update`;
  let g = this.props.currentUser;
  let v = this.props.group.user_id;
  if (v === g){
    return (
      <div className="gg">
        <Link to={show} className="upgroup">Update Group</Link>
      </div>
    );
  }
}

// renderEvents(events = []){
//   console.log(events);
//
// events.map(event => {
//   const t = this.props.currentUser;
//   console.log(t);
//
//   const g = event.user_id;
//   console.log(g);
//   const lin = `/groups/${event.group_id}/events/${event.id}/update`;
  // if (t===g){
  //   return (
  //     <div >
  //       <Link to={lin}>Edit</Link>
  //     </div>
  //   );
  // }

//   return(
//     <div>
//   <div className="groupeventeach" key={event.id}>
//       <div className="groupeventname">{event.name}</div>
//         <div className="groupeventlocation">Event location: {event.location}</div>
//
//     <div className="groupeventid">Event# {event.id}</div>
//
//     <div className="groupeventorganizer">Event organizer: {event.user_id}</div>
//     <div className="groupevenntdescription">{event.description}</div>
// </div>
// </div>
// );
// });
// }


// const l = ({ group, groupId, fetchGroup}) => {
//
//
  // const groups = {
  //   [groupId]: group
  // };

  render() {
    const idz = `/groups/${this.props.group.id}`;
    const members=`/groups/${this.props.group.id}/members`;
    const sponsors=`/groups/${this.props.group.id}/sponsors`;
    const photos=`/groups/${this.props.group.id}/photos`;
    const pages=`/groups/${this.props.group.id}/pages`;
    const myprofile="/users/1";
    const created=this.props.group.created_at;
    // const eventg = this.props.group.events.forEach((e, idx) => (
    //   <div key={idx} name={e.name} description={e.description}></div>
    // ));
    // const year=created.getUTCFullYear();
    // console.log(year);

    // const g = () => (
    //   <div className="grouptocreateevent">
    //     <Link to={idz +"/create/event"}>Create a new event</Link>
    //     </div>
    // );

    // console.log(g);
    // g.forEach((ev, idx) => (
    //   <div key={idx}>{ev.name}</div>
    // ));




    const eventList = (events = []) => (
  events.map(event => {

    let g = this.props.currentUser.id;
    let v = event.user_id;
    const lin = `/groups/${event.group_id}/events/${event.id}/update`;
    const x = () => {
      if (g===v){
        return (
          <div className="upLink">
            <Link className= "uplink" to={lin}>Update Event</Link>
          </div>
        );
      }
    };
    return(
    <div className="groupeventeach" key={event.id}>
        <div className="groupeventname">{event.name}</div>
          <div className="groupeventlocation">Event location: {event.location}</div>

      <div className="groupeventid">Event# {event.id}</div>

      <div className="groupeventorganizer">Event organizer: {event.user_id}</div>
      <div className="groupevenntdescription">{event.description}</div>
      <div className="uplinko">{x()}
    </div>
  </div>
);
})
);

  return (
    <div className="singlegroupcontainer">
      <div className="groupheader">
        <div className="singlegroupbanner"></div>
      <div className="singlegroupheader">
        <span>{this.props.group.name}</span>
      </div>

      <div className="singletop">
      <div className="singlegroupbar">
        <Link to={idz} className="glink">Home</Link>
        <Link to={members} className="glink">Members</Link>
        <Link to={sponsors} className="glink">Sponsors</Link>
        <Link to={photos} className="glink">Photos</Link>
        <Link to={pages} className="glink">Pages</Link>
      </div>
      <div className="bardos">
      <Link className="glink" to={myprofile} >My profile</Link>
      </div>
    </div>
      </div>

    <div className="singlegroup">




        <div className="singlegroupsidebar">

          <div className="gcreated">
            <div className="sidehead">
            </div>

            <div className="gcreated2">
              <div className="g11">{this.props.group.name}</div>
              <div className="g2">Created: {this.props.group.created_at}</div>
          </div>
              <div className="gcreated3">{this.renderU()}
              </div>
            </div>
          </div>

        <div className="singlegroupmain">

          <div className="grouphomeinfo">
            <div className="info">{this.props.group.info}</div>
                <Link className="createeventt" to={idz +"/create/event"}>Create a new event</Link>

          </div>
          <div className="groupevents">

              {eventList(this.props.group.events)}

            </div>
      </div>


        <div className="singlegroupnews">
          <div>What's new</div>
        </div>


    </div>
    </div>
  );
}

}
export default GroupShow;
