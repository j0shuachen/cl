import React from 'react';
import {Link} from 'react-router-dom';
// import TimeAgo from 'react-timeago';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import moment from 'moment';
class EventShowDos extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      // member: null
      newz: true,
      loaded: false,
      num: true,
    };
    this.membergroups = this.membergroups.bind(this);
    this.renderUpdateGroup = this.renderUpdateGroup.bind(this);
    this.ismember = this.ismember.bind(this);
    this.renderJ = this.renderJ.bind(this);
    this.createMember= this.createMember.bind(this);
    this.deleteMember= this.deleteMember.bind(this);
    // this.amember = this.amember.bind(this);
    this.renderjoin = this.renderjoin.bind(this);
    this.renderdel = this.renderdel.bind(this);
    this.opmember = this.opmember.bind(this);
    this.eventsetter = this.eventsetter.bind(this);
    this.renderEventUpdate = this.renderEventUpdate.bind(this);
    this.checkrsvp = this.checkrsvp.bind(this);
  }
  getInitialState(){
    this.opmember();
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true}));
    // this.props.fetchGroup(this.props.match.params.groupId);

    // this.props.fetchEvents().then(() => this.setState({checking: true}));
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
      this.props.fetchEvent(this.props.match.params.eventId).then(()=>this.setState({checkt: true}));
      // setTimeout(this.renderUpdate, 500);

    // this.renderJ();
    // this.amember();
    this.opmember();
    this.eventsetter();
    // this.ismember();
  }

  componentWillMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true}));
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true, newz: true})).then(() => this.checkrsvp());

    // this.props.fetchGroup(this.props.match.params.groupId);
    // this.props.fetchEvents().then(() => this.eventsetter().then(this.fetchEventEnrollments()));
    this.props.fetchGroupEnrollments(this.props.match.params.groupId).then(() => this.opmember());
    this.props.fetchGroupNews(this.props.match.params.groupId).then(() => this.setState({newz: !this.state.newz}));

    // this.renderJ();
    // this.ismember();
    this.opmember();
    this.eventsetter();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.group !== this.props.group){
      this.props.fetchGroup(this.this.props.match.params.groupId);
      this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    }
  }

  componentWillUpdateProps(prevProps,nextProps){

  }


opmember(){
  if(this.props.memboz){
    if(this.props.currentUser){
    let x = false;
  const g = this.props.memboz;
  const og = Object.values(g);
  // const ot = Object.values(og);
  // console.log('og',og);

  for(var i=0; i < og.length; i++){
    if(og[i].id === this.props.currentUser.id){
      x = true;
    }
  }
  // return x;
  if (x){
    this.setState({member:true});
  }
  else {
    this.setState({member: false});
  }
  return;
}else{
  this.setState({member: false});

}
}
}

ismember(){
  const g = this.props.group.members;
  if (g){
    for(var i =0; i < g.length; i++){
      if(g[i].id === this.props.currentUser.id){
        this.setState({member: true});
        return true;
      }
      }
      this.setState({member: false});
      return false;
    }
}

createMember(){
  const m = this.props.currentUser.id;
  const o = this.props.groupId;
  const t = this.props.group.user.name;
  this.props.createGroupEnrollment({group_enrollment:{user_id: m, group_id: o}}).then(()=> this.setState({check: true}));
  this.setState({member: true, num: true});
  this.setState({newz: !this.state.newz});
  this.props.createGroupNew({group_news:{group_id: o, news: `${t} joined the group`}}).then(() =>this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));

    // console.log('dododo');
    // this.forceUpdate();
}

deleteMember(){
  const m = this.props.currentUser.id;
  const o = this.props.groupId;
  const t = this.props.group.user.name;

this.setState({check: true});
// console.log(this.props);
if (this.props.group_enrollments){
  let ok = this.props.group_enrollments[0];
  let arr = Object.keys(ok);
  if (arr.length > 0){
  for(var i=0; i < arr.length; i++){
    // if(ok[arr[i]])

    let x = ok[arr[i]];
    // console.log(ok[i]);
    // console.log(this.props.currentUser.id);
    if(x.user_id === this.props.currentUser.id){
      // console.log('ld');

      // this.props.deleteGroupEnrollment({group_enrollment:{id: x.id, user_id: x.user_id, group_id: x.group_id}, id: x.id}).then(() => this.props.fetchGroup(this.props.groupId)).then(()=>this.setState({check:false}));
      this.props.deleteGroupEnrollment({group_enrollment:{id: x.id, user_id: x.user_id, group_id: x.group_id}, id: x.id}).then(()=>this.setState({check:false}));

      this.setState({member: false, num: false});

      this.props.createGroupNew({group_news:{group_id: o, news: `${t} left the group`}}).then( () => this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));

        // console.log('huir');
        // this.opmember();
        break;
}

  }
}
}




}

checkrsvp (){
  // console.log('checkers');
  if(this.props.group.eventdos[this.props.eventId].rsvp){
    // console.log('checkedrs');
    // if(this.props.evento.rsvpph[this.props.currentUser.id]){
    //   var ok = this.props.eventId;
    //   this.setState({[this.props.eventId]: true});
    // }
    if(this.props.group.eventdos[this.props.eventId].rsvp[this.props.currentUser.id]){
      this.setState({[this.props.eventId]: true});
    }
  }
}
eventsetter(){
  if(this.props.group.events){
    if(this.props.currentUser){
    let v = this.props.currentUser.id;

    let t = this.props.group.events;
    for(var i=0; i < t.length; i++){
      if(t[i].rsvp){
      if(t[i].rsvp[v] && this.state.member){
        // console.log('i',t[i].rsvp[v]);
        // console.log('v', v);
        // console.log(this.state);
      this.setState({[t[i].id]: true });
      // console.log('fgjhkl', this.state);
    }else{
      this.setState({[t[i].id]: false});
    }
  }else{
    // this.setState({[t[i].id]: false});
  }
    }
  }}
}
//
renderJ(){
  if (this.state.member){
    return (
      <div>
        <div onClick={this.deleteMember}>Leave group!</div>
      </div>

    );
  }else{
    return (
      <div>
        <div onClick={this.createMember}>Join group!</div>
      </div>
    );
  }
}

componentWillReceiveProps(nextProps){
  // console.log(nextProps);
  this.setState({nextProps});
  // if(this.props.match.params.id !== nextProps.match.params.id){
  //   this.props.fetchGroup(nextProps.match.params.id);
  // }
}

renderdel(){
  return (
    <div>
      <div onClick={this.deleteMember}>Leave group!</div>
    </div>
  );
}

renderjoin(){
  return (
    <div>
      <div onClick={this.createMember}>Join group!</div>
    </div>
  );
}

renderEventUpdate(){
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


membergroups(){
  if(this.props.group){
    if(this.props.group.eventdos[this.props.eventId].rsvpa.length > 0){
      let arr = [];
      let o = this.props.group.eventdos[this.props.eventId].rsvpa;
    let too = o.length;
    for(var i=0; i < too; i++){
      var linker = `/groups/${this.props.groupId}/users/${o[i].id}`;

    arr.push(
      <Link to={linker} className='eventmembersglob' key={i}>
        <div className='membergroupsglobin'>

        <img className='membergroupspic' src={o[i].image_url}></img>
        <div className='membergroupname'>{o[i].name}</div>
        </div>
        <div className='joingroupdate'>RSVP'd on: {moment(o[i].eventenrollmentinfo[0].created_at).format('ddd MMM Do YYYY')}</div>

      </Link>
    );
  }

  return arr;
}else{
  return(<div>No rsvps yet!</div>);
}
}
}

renderUpdateGroup(){
  const show =`/groups/${this.props.group.id}/update`;
  if (this.props.currentUser){

  let g = this.props.currentUser.id;
  let v = this.props.group.user_id;
  if (v === g){
    return (
      <div className="gg">
        <Link to={show} className="upgroup">Update Group</Link>
      </div>
    );
  }}
}
  render() {
    // console.log(this.props);
    if(Object.keys(this.props.group).length === 0 || !this.props.evento.random || Object.keys(this.props.evento).length === 0){
      return (
        <div>Loading...</div>
      );
    }
    const idz = `/groups/${this.props.group.id}`;
    const members=`/groups/${this.props.group.id}/members`;
    const sponsors=`/groups/${this.props.group.id}/sponsors`;
    const photos=`/groups/${this.props.group.id}/photos`;
    const pages=`/groups/${this.props.group.id}/pages`;
    if(this.props.currentUser){
    var myprofile=`/groups/${this.props.group.id}/users/${this.props.currentUser.id}`;
    }else{
     myprofile=`/groups/${this.props.group.id}/members`;
    }
    // const created=this.props.group.created_at;
    const created=this.props.group.creator;

    const moddname = () => {
      if(this.props.group.mod){
        return (
          this.props.group.mod.name
        );
      }
    };
    const moddcontact = () => {
      if (this.props.group.mod){
        return (
          this.props.group.mod.email
        );
      }
    };
    // const newsList = (news = []) => (
    //
    //   news.reverse().map(newg => {
    //     return(
    //       <div className='yc' key={newg.id}>
    //         <div> {newg.news}</div>
    //       </div>
    //     );
    //   })
    // );
    const newsList = (news = []) => {
      var x = [];
      let p = this.props.groupId;
      // for(var i=news.length-1; i>= 0; i--){
      for(var i = 0; i < news.length; i++){
        let v = new Date(news[i].date).toString();
        let use = news[i].user_id;
        let lin = `/groups/${p}/users/${use}`;
        if(news[i].typo==='g'){
          var o = `/groups/${p}`;
      }else if(news[i].typo==='e'){
        o = `/groups/${p}/events/${news[i].oid}`;
      }
        // let pops = `/groups/${p}/events/${}`;
        x.push(
          <div className='newseach' key={i}>
            <Link to={lin}>
            <img className='groupnewspic' src={news[i].use.image_url}></img>
            </Link>
          <div className='yc'>
            <Link to={o} >{news[i].news} </Link>
            <TimeAgo className= 'ago' datetime={v}></TimeAgo>
          </div>
          </div>
        );
      }
      return x;
    };


const numbo = () => {
  let len = this.props.evento.rsvpp;
  if(len.length === 0 || len.length <= 5){
    return null;
  }else  {
    return(
      <div className='eventlistmore'> {`+ ${len.length - 8} more`}</div>);
  }
};

const randers = (ran=[]) => {
// console.log('randers');
  var arr = [];
  for(var i =0; i < ran.length; i++){
    var pj = `/groups/${this.props.groupId}/users/${ran[i].id}`;
    arr.push(<Link to={pj} key={i} className='soolo'> <img className='eventorg' src={ran[i].image_url}></img></Link>);
  }
  return arr;
};


const leave = () => {
  // console.log('hitttttleave', this.props);
  this.setState({[this.props.eventId]: false});
  // console.log('left', this.state);
// this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
  this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: this.props.eventId, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
};
const join =() => {
  // console.log('hit');
  this.setState({[this.props.eventId]: true});
  // console.log('join', this.state);

// this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
  this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: this.props.eventId, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
  // console.log('state',this.state);
  // console.log(this.props);
};

const timeChecker = () => {
  if(new Date(this.props.evento.start_time) > new Date() || new Date(this.props.evento.end_time) > new Date()){
    return false;
  }else {
    return true;
  }
};
const ot = () => {
// console.log(this.state);

  if(this.state[this.props.eventId] && this.state.member){
    return(
      <div className='joinerdos' onClick={leave}>
        Leave Event
      </div>
    );
  }else if (!this.state.member) {
    return(
      <div className= 'joinGrouptoRsvp'>
        Join group to RSVP
      </div>
    );
  }
  else if (this.state.member && !this.state[this.props.eventId]) {
    return(
      <div className='eventrsvp'>
        <div className='joinerdos' onClick={join}>RSVP</div>
      </div>
    );
  }
};
// console.log(this.state);
var ots = `/groups/${this.props.groupId}/users/${this.props.evento.organizer.id}`;
var ok = `/groups/${this.props.groupId}/events/${this.props.eventId}`;
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
          {this.renderUpdateGroup()}

        </div>

        <div className="bardos">
          {this.props.currentUser? <Link className="glink" to={myprofile} >My profile</Link> : null }
        </div>
      </div>
      </div>
      <div className="singlegroup" >

      <div className="singlegroupsidebar">
        <div className="gcreated">
          <img className="grouppico" src={this.props.group.image_url}></img>

          <div className="gcreated2">
            <div className="g11">{this.props.group.name}</div>
            <div className="g2">Established: {this.props.group.creator}</div>
              {this.state.num ? <div className='g2'>{this.props.group.number} members</div> : <div className='g2'>{this.props.group.number} members</div>}

            <div className="g66">
              <div className='g90'>Mod: {moddname()}</div>

              </div>
          </div>
        </div>
      </div>

        <div className="singlegroupmain">
          <div className='eventhomeinfo'>
            <Link to={ok} className="singlegroupeventname">{this.props.evento.name}</Link>
              {this.props.evento.image_url === 'https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' || this.props.evento.image_url ==='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' ? null : <img className="indexpic2" src={this.props.evento.image_url}></img> }
              <div className='hoppaa'>
                <div className='yoka3'>
                  <div className="groupeventlocation">Location: {this.props.evento.location}</div>
                    {this.props.evento.random.length > 0 ? <div className='yoka'>{randers(this.props.evento.random)} {numbo()}  </div> : null}
                    <div className="groupevenntdescription">{this.props.evento.description}</div>
                    </div>
                  <div className='yoka4'>
                    <div className='groupeventorganizer'>
                      <div className='org'>Organizer: </div>
                      <Link to={ots}><img className='eventorg' src={this.props.evento.organizer.image_url}></img></Link>
                    </div>
                    <div className='groupeventid'>Start time: {this.props.evento.start_time === 'tbd' ? 'tbd' : moment.utc(this.props.evento.start_time).format('ddd MMM Do YYYY hh:mm A')}</div>
                    <div className='groupeventid'>End time: {this.props.evento.end_time === 'tbd' ? 'tbd' : moment.utc(this.props.evento.end_time).format('ddd MMM Do YYYY hh:mm A')}</div>
                      {this.state[event.id] ? <div className='yoka2'>{this.props.evento.membersnum} members attending</div> :       <div className='yoka2'>{this.props.evento.membersnum} members attending</div> }
                      {timeChecker() ? null : ot()}
                      {this.renderEventUpdate()}
                    </div>
                  </div>
                </div>
                {this.membergroups()}
              </div>

              <div className="singlegroupnews">
                <div>Event news</div>
                {this.state.newz ? newsList(this.props.group.eventdos[this.props.eventId].news) : newsList(this.props.group.eventdos[this.props.eventId].news)}
              </div>

            </div>
          </div>


  );
}

}
export default EventShowDos;





// <div className="singlegroupeventname">{this.props.evento.name}</div>
// <div className="eventlocationo">Location: {this.props.evento.location}</div>
// {this.props.evento.random.length > 0 ? <div className='yokaz'>{randers(this.props.evento.random)} {numbo()}  </div> : null}
//
// <div className="eventend">{this.props.evento.start_time === 'tbd' ? 'start time: tbd' : 'start time: ' + moment(this.props.evento.start_time).format('ddd MMM Do YYYY hh:mm A') }</div>
// <div className="eventend">{this.props.evento.end_time === 'tbd' ? 'end time: tbd' : 'end time: ' +  moment(this.props.evento.end_time).format('ddd MMM Do YYYY hh:mm A')}</div>
// <div className="eventinfoo">{this.props.evento.description}</div>
//
// <div className="oo">{this.renderEventUpdate()}</div>
// {ot()}
// </div>
// </div>
//
// <div className="singlegroupnews">
// <div>What's new</div>
// {this.state.newz ? newsList(this.props.group.news) : newsList(this.props.group.news)}
// </div>
//
// </div>
// </div>



// const eventList= (events = []) => (
//   events.map(event => {
//     const x = () => {
//       if (this.props.currentUser){
//         let g = this.props.currentUser.id;
//         // let v = event.user_id;
//         let v = event.organizer.id;
//         const lin = `/groups/${event.group_id}/events/${event.id}/update`;
//         if (g===v){
//           return (
//             <div className="upLink">
//               <Link className= "uplink" to={lin}>Update Event</Link>
//             </div>
//           );
//         }
//       }
//     };
//     const leave = () => {
//       // console.log('hitttttleave', this.props);
//       this.setState({[event.id]: false});
//       // console.log('left', this.state);
//   // this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
//       this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: this.props.eventId, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
//     };
//     const join =() => {
//       // console.log('hit');
//       this.setState({[event.id]: true});
//
//   // this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
//       this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: this.props.eventId, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
//       // console.log('state',this.state);
//       // console.log(this.props);
//     };
//     const ot = () => {
//   // console.log(this.state);
//       if(this.state[event.id] && this.state.member){
//         return(
//           <div className='leaveevent' onClick={leave}>
//             Leave Event
//           </div>
//         );
//       }else if (!this.state.member) {
//         return(
//           <div>
//             Join group to RSVP
//           </div>
//         );
//       }
//       else if (this.state.member && !this.state[event.id]) {
//         return(
//           <div className='eventrsvp'>
//             <div className='joiner' onClick={join}>RSVP</div>
//           </div>
//         );
//       }
//     };
//     let g = this.props.groupId;
//     let e = event.id;
//     var ok = `/groups/${g}/events/${e}`;
//   return(
//     <div className="groupeventeach" key={event.id}>
//       <Link to={ok} className="groupeventname">{event.name}</Link>
//       <img className="indexpic" src={event.image_url}></img>
//       <div className="groupeventlocation">Event location: {event.location}</div>
//       <div className="groupeventid">Event# {event.id}</div>
//       <div className="groupeventorganizer">Event organizer: {event.organizer.name}</div>
//       <div className="groupevenntdescription">{event.description}</div>
//       <div className="uplinko">{x()}
//     </div>
//     <div>{event.rsvp.num} members attending</div>
//     <div>{ot()}</div>
//   </div>
//   );
// })
// );
