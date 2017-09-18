import React from 'react';
import {Link} from 'react-router-dom';
// import TimeAgo from 'react-timeago';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import moment from 'moment';

class GroupShow extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      // member: null
      newz: false,
      loaded: false,
      num: true
    };

    this.renderU = this.renderU.bind(this);
    this.ismember = this.ismember.bind(this);
    this.renderJ = this.renderJ.bind(this);
    this.createMember= this.createMember.bind(this);
    this.deleteMember= this.deleteMember.bind(this);
    // this.amember = this.amember.bind(this);
    this.renderjoin = this.renderjoin.bind(this);
    this.renderdel = this.renderdel.bind(this);
    this.opmember = this.opmember.bind(this);
    this.eventsetter = this.eventsetter.bind(this);

  }
  getInitialState(){
    this.opmember();
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true, newz: true}));
    this.props.fetchEvents().then(() => this.setState({checking: true}));
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.renderJ();
    // this.amember();
    this.opmember();
    this.eventsetter();
    // this.ismember();
  }

  componentWillMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.opmember()).then(() => this.eventsetter());
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
  this.props.createGroupNew({group_news:{group_id: o, news: `${t} joined the group`, oid: o, typo: 'g'}}).then(() =>this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));

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

      this.props.createGroupNew({group_news:{group_id: o, news: `${t} left the group`, oid: o, typo: 'g'}}).then( () => this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));

        // console.log('huir');
        // this.opmember();
        break;
}

  }
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

renderJ (){
  if(this.props.group){
    if(this.props.currentUser && this.props.group.mod){
      if(this.props.group.mod.id !== this.props.currentUser.id && this.state.member){
        return (
          <div className='jer'
           onClick={this.deleteMember}>Leave group!
          </div>

        );
      }else if (this.props.group.mod.id === this.props.currentUser.id) {
        return(null);
      }else if (this.props.group.mod.id!==this.props.currentUser.id && !this.state.member) {
        return (
          <div className='jer'
            onClick={this.createMember}>Join group!
          </div>
        );
      }

    }else if (!this.props.currentUser) {
      return(
        <div className='createeventto'
          >Log in to join group!
        </div>
      );
    }
  }
}
// renderJ(){
//
//   if (this.state.member ){
//     return (
//       <div className='jer'
//        onClick={this.deleteMember}>Leave group!
//       </div>
//
//     );
//   }else if(!this.state.member && this.props.currentUser){
//     return (
//       <div className='jer'
//         onClick={this.createMember}>Join group!
//       </div>
//     );
//   }else if(!this.props.currentUser){
//     return(
//       <div className='jer'
//         >Create an account or log in to join group!
//       </div>
//     );
//   }
// }

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




renderU(){
  const show =`/groups/${this.props.group.id}/update`;
  if (this.props.currentUser){

  let g = this.props.currentUser.id;
  let v = this.props.group.user_id;
  if (v === g){
    return (
      <div className="jer">
        <Link to={show} className="upgroup">Update Group</Link>
      </div>
    );
  }}
}
  render() {
    console.log(this.props);
    if(Object.keys(this.props.group).length === 0){
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
    }    // const created=this.props.group.created_at;
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
      if(this.props.group){
        if(this.props.group.news){
      var x = [];
      var t = news.length;
      var o = this.props.groupId;
      for(var i=0; i< t; i++){
        let v = new Date(news[i].date).toString();
          var user = `/groups/${o}/users/${news[i].user_id}`;
          if(news[i].typo==='g'){
            var ol = `/groups/${o}`;
        }else if(news[i].typo==='e'){
          ol = `/groups/${o}/events/${news[i].oid}`;
        }
        x.push(
          <div className='newseach' key={i}>
            <Link to={user}>
            <img className='groupnewspic' src={news[i].use.image_url}></img>
            </Link>
          <div className='yc'>
            <Link to={ol} >{news[i].news} </Link>
            <TimeAgo className= 'ago' datetime={v}></TimeAgo>
          </div>
          </div>
        );
      }
      return x;
    }
  }
    };
//   const eventList= (events = []) => (
//
//     events.map(event => {
//       const x = () => {
//         if (this.props.currentUser){
//           let g = this.props.currentUser.id;
//           // let v = event.user_id;
//           let v = event.organizer.id;
//           const lin = `/groups/${event.group_id}/events/${event.id}/update`;
//           if (g===v){
//             return (
//               <div className="upLink">
//                 <Link className= "uplink" to={lin}>Update Event</Link>
//               </div>
//             );
//           }
//         }
//       };
//       const leave = () => {
//         // console.log('hitttttleave', this.props);
//         this.setState({[event.id]: false});
//         // console.log('left', this.state);
//     // this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
//         this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
//
//       };
//       const join =() => {
//         // console.log('hit');
//         this.setState({[event.id]: true});
//     // this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
//         this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
//         // console.log('state',this.state);
//         // console.log(this.props);
//       };
//       const ot = () => {
//     // console.log(this.state);
//         if(this.state[event.id] && this.state.member){
//           return(
//             <div className='joiner' onClick={leave}>
//               Leave Event
//             </div>
//           );
//         }else if (!this.state.member) {
//           return(
//             <div>
//               Join group to RSVP
//             </div>
//           );
//         }
//         else if (this.state.member && !this.state[event.id]) {
//           return(
//             <div className='eventrsvp'>
//               <div className='joiner' onClick={join}>RSVP</div>
//             </div>
//           );
//         }
//       };
//       let g = this.props.groupId;
//       let e = event.id;
//       var ok = `/groups/${g}/events/${e}`;
//
//     return(
//       <div className="groupeventeach" key={event.id}>
//         <Link to={ok} className="groupeventname">{event.name}</Link>
//         <img className="indexpic" src={event.image_url}></img>
//         <div className="groupeventlocation">Event location: {event.location}</div>
//         <div className="groupeventid">Event# {event.id}</div>
//         <div className="groupeventorganizer">Event organizer: {event.organizer.name}</div>
//         <div className="groupevenntdescription">{event.description}</div>
//         <div className="uplinko">{x()}
//       </div>
//       {this.state[event.id] ? <div className='yoka'>{event.rsvp.num} members attending</div> :       <div className='yoka'>{event.rsvp.num} members attending</div> }
//       <div>{ot()}</div>
//     </div>
//     );
//   })
// );

const choppa = () => {
  if(!this.props.group.eventnot && !this.props.group.eventboth && !this.props.group.eventeither){
    return <div> No events so far, why not create one? </div>;

  }
};

const eventList= (events = []) => {
if(events.length === 0){
  return null;
}else{
  // let toko = events.reverse();
  return(
  events.map(event => {
    const x = () => {
      if (this.props.currentUser){
        let g = this.props.currentUser.id;
        // let v = event.user_id;
        let v = event.organizer.id;
        const lin = `/groups/${event.group_id}/events/${event.id}/update`;
        if (g===v){
          return (
            <div className="upLink">
              <Link className= "uplink" to={lin}>Update Event</Link>
            </div>
          );
        }
      }
    };
    const leave = () => {
      // console.log('hitttttleave', this.props);
      this.setState({[event.id]: false});
      // console.log('left', this.state);
  // this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
      this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));

    };
    const join =() => {
      // console.log('hit');
      this.setState({[event.id]: true});
  // this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(this.eventsetter()));
      this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(ot()));
      // console.log('state',this.state);
      // console.log(this.props);
    };
    const ot = () => {
  // console.log(this.state);
      if(this.state[event.id] && this.state.member){
        return(
          <div className='joiner' onClick={leave}>
            Leave Event
          </div>
        );
      }else if (!this.state.member) {
        return(
          <div className='jjjj'>
            Join group to RSVP
          </div>
        );
      }
      else if (this.state.member && !this.state[event.id]) {
        return(
          <div className='eventrsvp'>
            <div className='joiner' onClick={join}>RSVP</div>
          </div>
        );
      }
    };
    let g = this.props.groupId;
    let e = event.id;
    var ok = `/groups/${g}/events/${e}`;

    let ots = `/groups/${g}/users/${event.organizer.id}`;
    const randers = (ran=[]) => {
      var arr = [];
      for(var i =0; i < ran.length; i++){
        var pj = `/groups/${this.props.groupId}/users/${ran[i].id}`;
        arr.push(<Link to={pj} key={i} className='soolo'> <img className='eventorg' src={ran[i].image_url}></img></Link>);
      }
      return arr;
    };
  return(
    <div className="groupeventeach" key={event.id}>
      <Link to={ok} className="groupeventname">{event.name}</Link>
      <img className="indexpic" src={event.image_url}></img>
      <div className="groupeventlocation">Location: {event.location}</div>
      <div className='groupeventorganizer'>
        <div className='org'>Organizer: </div>
<Link to={ots}><img className='eventorg' src={event.organizer.image_url}></img></Link>
</div>
      <div className='groupeventid'>Start time: {event.start_time === 'tbd' ? 'tbd' : moment(event.start_time).format('dddd MMM Do YYYY hh:mm A')}</div>
      <div className='groupeventid'>End time: {event.end_time === 'tbd' ? 'tbd' : moment(event.end_time).format('dddd MMM Do YYYY hh:mm A')}</div>
      <div className="groupevenntdescription">{event.description}</div>
      <div className="uplinko">{x()}
    </div>
    <div className='yoka'>{randers(event.rsvp.rando)}  + {event.rsvp.num - 5} more</div>
    {this.state[event.id] ? <div className='yoka'>{event.rsvp.num} members attending</div> :       <div className='yoka'>{event.rsvp.num} members attending</div> }
    <div>{ot()}</div>
  </div>
  );
}));
}
};
const tripz = () => {
if(this.props.group && this.props.currentUser){
  if(this.props.group.mod){
  if(this.props.group.mod.id === this.props.currentUser.id){
    var go = `/groups/${this.props.group.id}/update`;
    return(<Link to={go} className='glink'>Update Group</Link>);
  }else{
    return (null);
  }
}
}else{
  return null;
}
};

const createEven = () => {
  if(this.state.member){
      return(  <Link className="createeventt2" to={idz +"/create/event"}>Create a new event</Link>);
}else{
  return( <div className='createeventt'> Join group to create an event! </div>);
}

  };


const randomem = () => {
  var ar = [];
  if(this.props.group.randos){
    var k = this.props.group.randos;
    for(var i =0; i < k.length; i++ ){
      let li = `/groups/${this.props.groupId}/users/${k[i].id}`;
      ar.push(
      <Link key={i} to={li}>
        <img className='groupnewspic2'src={k[i].image_url}></img>
      </Link>
    );
    }
    return ar;
  }
};

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
          {tripz()}
        </div>

        <div className="bardos">
          {this.props.currentUser? <Link className="glink" to={myprofile} >My profile</Link> : null }
        </div>
      </div>
      </div>

      <div className="singlegroup">
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
          <div className="grouphomeinfo">
            <div className="info">{this.props.group.info}</div>
            <div className='roze'>
              <div className='toze' >Contact Info: {moddcontact()}</div>

          {createEven()}
          </div>

        </div>
        <div>
          {this.state.num ? <div className='ole'>We're {this.props.group.number} members</div> : <div className='ole'>We're {this.props.group.number} members</div>}

        <div className='roz'>

        <div className='rmem'>
          {randomem()}
          {this.state.member?  this.renderJ() : this.renderJ()}
        </div>

        </div>
        </div>
          <div className="groupevents">
            {choppa()}
            {eventList(this.props.group.eventboth)}
            {eventList(this.props.group.eventeither)}
              {eventList(this.props.group.eventnot)}

            </div>
      </div>

        <div className="singlegroupnews">
          <div>What's new</div>
          {this.state.newz ? newsList(this.props.group.news) : newsList(this.props.group.news)}
        </div>


    </div>
    </div>
  );
}

}


// <div className="g4">{this.renderU()}</div>

export default GroupShow;
