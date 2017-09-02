import React from 'react';
import {Link} from 'react-router-dom';
// import TimeAgo from 'react-timeago';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

class GroupShow extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      // member: null
      newz: true,
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
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true}));
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


renderU(){
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
    if(this.props.group.length === 0){
      return (
        <div>Loading...</div>
      );
    }

    const idz = `/groups/${this.props.group.id}`;
    const members=`/groups/${this.props.group.id}/members`;
    const sponsors=`/groups/${this.props.group.id}/sponsors`;
    const photos=`/groups/${this.props.group.id}/photos`;
    const pages=`/groups/${this.props.group.id}/pages`;
    const myprofile="/users/1";
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
      for(var i=news.length-1; i>= 0; i--){
        let v = new Date(news[i].date).toString();
        x.push(
          <div className='newseach' key={i}>
            <img className='groupnewspic' src={news[i].use.image_url}></img>
          <div className='yc'>
            <div >{news[i].news} </div>
            <TimeAgo className= 'ago' datetime={v}></TimeAgo>
          </div>
          </div>
        );
      }
      return x;
    };
  const eventList= (events = []) => (
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
            <div className='leaveevent' onClick={leave}>
              Leave Event
            </div>
          );
        }else if (!this.state.member) {
          return(
            <div>
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

    return(
      <div className="groupeventeach" key={event.id}>
        <div className="groupeventname">{event.name}</div>
        <img className="indexpic" src={event.image_url}></img>
        <div className="groupeventlocation">Event location: {event.location}</div>
        <div className="groupeventid">Event# {event.id}</div>
        <div className="groupeventorganizer">Event organizer: {event.organizer.name}</div>
        <div className="groupevenntdescription">{event.description}</div>
        <div className="uplinko">{x()}
      </div>
      <div>{event.rsvp.num} members attending</div>
      <div>{ot()}</div>
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
            <img className="grouppico" src={this.props.group.image_url}></img>

            <div className="gcreated2">
              <div className="g11">{this.props.group.name}</div>
              <div className="g2">Established: {this.props.group.creator}</div>
              <div className="g3"> Mod: {moddname()}</div>
              <div className="g4"> Contact Info: {moddcontact()}</div>
              {this.state.num ? <div className='g5'>{this.props.group.number} members</div> : <div className='g5'>{this.props.group.number} members</div>}
            </div>
            <div className="gcreated3">{this.renderU()}</div>
          </div>
        </div>

        <div className="singlegroupmain">
          <div className="grouphomeinfo">
            <div className="info">{this.props.group.info}</div>
            {this.state.member?  this.renderdel() : this.renderjoin()  }

              <Link className="createeventt" to={idz +"/create/event"}>Create a new event</Link>
          </div>
          <div className="groupevents">

              {eventList(this.props.group.events)}

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
export default GroupShow;
