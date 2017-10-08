import React from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');
import moment from 'moment';
import ReactLoading from 'react-loading';

class GroupShowDos extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      // member: null

      newz: false,
      loaded: false,
      num: true,
      heightning: 1035,
      heighter: '1035px'
    };
    this.newsheightclicker = this.newsheightclicker.bind(this);
    this.newsClicker = this.newsClicker.bind(this);
    this.renderU = this.renderU.bind(this);
    this.ismember = this.ismember.bind(this);
    this.renderJ = this.renderJ.bind(this);
    this.createMember= this.createMember.bind(this);
    this.deleteMember= this.deleteMember.bind(this);
    this.opmember = this.opmember.bind(this);
    this.eventsetter = this.eventsetter.bind(this);
    this.randomGroupMembers = this.randomGroupMembers.bind(this);
    this.noEventsMessage = this.noEventsMessage.bind(this);
    this.renderUpdateGroup = this.renderUpdateGroup.bind(this);
    // this.leaveEvent = this.leaveEvent.bind(this);
    // this.joinEvent = this.joinEvent.bind(this);
    // this.renderEventRsvp = this.renderEventRsvp.bind(this);
    this.eventList = this.eventList.bind(this);
    this.pastEventsList= this.pastEventsList.bind(this);
    this.backgroundSetter = this.backgroundSetter.bind(this);
    }
  getInitialState(){
    this.opmember();
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.backgroundSetter());
    this.props.fetchEvents().then(() => this.setState({checking: true}));
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.renderJ();
    // this.amember();
    this.opmember();
    this.eventsetter();
    // this.ismember();
  }

  componentWillMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.opmember()).then(() => this.eventsetter()).then(()=> this.setState({check: true, newz: true, lengther: this.props.group.news.length}));
    // this.props.fetchEvents().then(() => this.eventsetter().then(this.fetchEventEnrollments()));
    this.props.fetchGroupEnrollments(this.props.match.params.groupId).then(() => this.opmember());
    this.props.fetchGroupNews(this.props.match.params.groupId).then(() => this.setState({newz: !this.state.newz}));


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


  newsheightclicker() {
    // console.log('hitt');
    // var newheight = this.state.heightning+1215;
    var newheight = this.state.heightning+1035;


    var newheighter = newheight.toString() + 'px';
    // console.log(newheight);
      this.setState({heighter: newheighter, heightning: newheight, newz: true});

  }

  newsClicker(){
    var o = this.props.group.news.length;
    var adder = o - 9;
    if(adder > 9){
      this.setState({newsheight: this.state.newsheight+ 9, newsmore: true});
    }else{
      var newnewheight = this.state.newsheight + adder;
      this.setState({newsheight: newnewheight, newsmore: false});
    }

  }

opmember(){
  if(this.props.memboz){
    if(this.props.currentUser){
      let x = false;
      const g = this.props.memboz;
      const og = Object.values(g);
      for(var i=0; i < og.length; i++){
        if(og[i].id === this.props.currentUser.id){
          x = true;
        }
      }
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
  }

deleteMember(){
  const m = this.props.currentUser.id;
  const o = this.props.groupId;
  const t = this.props.group.user.name;

  this.setState({check: true});
  if (this.props.group_enrollments){
    let ok = this.props.group_enrollments[0];
    let arr = Object.keys(ok);
    if (arr.length > 0){
      for(var i=0; i < arr.length; i++){
        let x = ok[arr[i]];
        if(x.user_id === this.props.currentUser.id){
          this.props.deleteGroupEnrollment({group_enrollment:{id: x.id, user_id: x.user_id, group_id: x.group_id}, id: x.id}).then(()=>this.setState({check:false}));
          this.setState({member: false, num: false});
          this.props.createGroupNew({group_news:{group_id: o, news: `${t} left the group`, oid: o, typo: 'g'}}).then( () => this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));
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
      this.setState({[t[i].id]: true });
    }else{
      this.setState({[t[i].id]: false});
    }
  }else{
    // this.setState({[t[i].id]: false});
  }
    }
  }}
}

noEventsMessage (){
  if(!this.props.group.eventnot && !this.props.group.eventboth && !this.props.group.eventeither){
    return <div> No events so far, why not create one? </div>;
  }
}

renderJ (){
  if(this.props.group){
    if(this.props.currentUser && this.props.group.mod){
      if(this.props.group.mod.id !== this.props.currentUser.id && this.state.member){
        return (
          <div className='createeventt23'
           onClick={this.deleteMember}>Leave group!
          </div>

        );
      }else if (this.props.group.mod.id === this.props.currentUser.id) {
        return(null);
      }else if (this.props.group.mod.id!==this.props.currentUser.id && !this.state.member) {
        return (
          <div className='createeventt23'
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


componentWillReceiveProps(nextProps){
  this.setState({nextProps});
}





randomGroupMembers (){
  var ar = [];
  if(this.props.group.randos){
    var k = this.props.group.randos;
    for(var i =0; i < k.length; i++ ){
      let li = `/groups/${this.props.groupId}/users/${k[i].id}`;
      ar.push(
      <Link className= 'opos' key={i} to={li}>
        <img className='rmemrowpic'src={k[i].image_url}></img>
      </Link>
    );
    }
    return ar;
  }
}


renderU(){
  const show =`/groups/${this.props.group.id}/update`;
  if (this.props.currentUser){
    let g = this.props.currentUser.id;
    let v = this.props.group.user_id;
    if (v === g){
      return (
        <div className="jer">
          <Link to={show} className="upgroup">Update</Link>
        </div>
      );
    }}
  }


  pastEventsList(events = [])  {
  if(events.length === 0){
    return null;
  }else{
    return(
      events.map(event => {
        let g = this.props.groupId;
        let e = event.id;
        var ok = `/groups/${g}/events/${e}`;


        const numbo = () => {
          if(event.rsvp.num === 0 || event.rsvp.num <= 5){
            return null;
          }else  {
            return(
          <div className='eventlistmore'>    {`+ ${event.rsvp.num - 5} more`} </div> );
            }
          };
          let ots = `/groups/${g}/users/${event.organizer.id}`;

        const randers = (ran=[]) => {
          var arr = [];
          for(var i =0; i < ran.length; i++){
            var pj = `/groups/${this.props.groupId}/users/${ran[i].id}`;
            arr.push(<Link to={pj} key={i} className='eventmembertile'> <img className='eventorg' src={ran[i].image_url}></img></Link>);
          }
          return arr;
        };

        return(
          <div className="groupeventeach" key={event.id}>
            <Link to={ok} className="groupeventname">{event.name}</Link>


              <div className='groupeventbody'>
                <div className='groupeventtime'>Ended: {moment(event.end_time).format('ddd MMM Do YYYY hh:mm A')}</div>

                <div className="groupeventlocation">Location: {event.location}</div>
                <div className='groupeventdivider'>
                  <div className='groupeventbodyleft'>
                    {event.image_url === 'https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' || event.image_url ==='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' ? null : <img className="indexpic2" src={event.image_url}></img> }
                    {event.rsvp.rando.length > 0 ? <div className='eventmembersholder'>{randers(event.rsvp.rando)} {numbo()}  </div> : null}
                    <div className="groupeventdescription">{event.description}</div>


                  </div>
                  <div className='groupeventorgbody'>
                    <div className='groupeventorganizer'>
                      <div className='org'>Organizer: </div>
                      <Link to={ots}><img className='eventorg' src={event.organizer.image_url}></img></Link>
                    </div>

                    {this.state[event.id] ? <div className='groupeventmemberswent'>{event.rsvp.num} members went </div> : <div className='groupeventmemberswent'>{event.rsvp.num} members went</div> }
                  </div>
                </div>



              </div>



        </div>
        );
      }));
    }
  }

  eventList(events = [])  {
  if(events.length === 0){
    return null;
  }else{
    return(
      events.map(event => {

        const x = () => {
          if (this.props.currentUser){
            let g = this.props.currentUser.id;
            let v = event.organizer.id;
            const lin = `/groups/${event.group_id}/events/${event.id}/update`;
            if (g===v){
              return (
                <Link className= "joiner" to={lin}>Update Event</Link>
            );
          }
        }
      };


      const  leaveEvent= () =>{
          this.setState({[event.id]: false});
          this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, groupId: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(renderEventRsvp()));
        };

      const  joinEvent = () => {
          this.setState({[event.id]: true});
          this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: event.id, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(renderEventRsvp()));
        };

        const renderEventRsvp = ()=> {
          if(this.state[event.id] && this.state.member){
            return(
              <div className='joiner' onClick={leaveEvent}>
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

                <div className='joiner' onClick={joinEvent}>RSVP</div>
            );
          }
        };


        let g = this.props.groupId;
        let e = event.id;
        var ok = `/groups/${g}/events/${e}`;
      const numbo = () => {
        if(event.rsvp.num === 0 || event.rsvp.num <= 5){
          return null;
        }else  {
          return(
            <div className='eventlistmore'>   {`+ ${event.rsvp.num - 5} more`}</div>

          );
        }
      };
      let ots = `/groups/${g}/users/${event.organizer.id}`;
      const randers = (ran=[]) => {

        var arr = [];
        for(var i =0; i < ran.length; i++){
          var pj = `/groups/${this.props.groupId}/users/${ran[i].id}`;
          arr.push(<Link to={pj} key={i} className='eventmembertile'> <img className='eventorg' src={ran[i].image_url}></img></Link>);
        }
        return arr;
      };
    return(
      <div className="groupeventeach" key={event.id}>
        <Link to={ok} className="groupeventname">{event.name}</Link>
          {event.image_url === 'https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' || event.image_url ==='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' ? null : <img className="indexpic2" src={event.image_url}></img> }

          <div className='groupeventbody'>

            <div className="groupeventlocation">Location: {event.location}</div>
              <div className='groupeventtime'>Start time: {event.start_time === 'tbd' ? 'tbd' : moment(event.start_time).format('ddd MMM Do YYYY hh:mm A')}</div>
              <div className='groupeventtime'>End time: {event.end_time === 'tbd' ? 'tbd' : moment(event.end_time).format('ddd MMM Do YYYY hh:mm A')}</div>
              <div className='groupeventdivider'>
            <div className='groupeventbodyleft'>
          {event.rsvp.rando.length > 0 ? <div className='eventmembersholder'>{randers(event.rsvp.rando)} {numbo()}  </div> : null}
            <div className="groupeventdescription">{event.description}</div>
          </div>
        <div className='groupeventorgbody'>
          <div className='groupeventorganizer'>
            <div className='org'>Organizer: </div>
            <Link to={ots}><img className='eventorg' src={event.organizer.image_url}></img></Link>
          </div>
          {this.state[event.id] ? <div className='groupeventmemberswent'>{event.rsvp.num} RSVPS</div> :       <div className='groupeventmemberswent'>{event.rsvp.num} RSVPS</div> }
          {renderEventRsvp()}
          {x()}
        </div>
        </div>
        </div>
    </div>
    );
  }));
  }
  }

  renderUpdateGroup (){
  if(this.props.group && this.props.currentUser){
    if(this.props.group.mod){
      if(this.props.group.mod.id === this.props.currentUser.id){
        var go = `/groups/${this.props.group.id}/update`;
        return(<Link to={go} className='glink'>Update</Link>);
      }else{
        return (null);
      }
    }
  }else{
    return null;
    }
  }

  backgroundSetter(){
     var o = this.props.group.news.length;
     if(o > 9){
       var newsheight = 9;
       var newsmore = true;
     }else{
       newsheight = o;
       newsmore = false;
     }

this.setState({check: true, newz: true, lengther: this.props.group.news.length, banner: this.props.group.banner_url, color: this.props.group.color, newsmore: newsmore, newsheight: newsheight });
  }


  render() {
    console.log(this.props);
//     if(1+1 ===2){
//     return (
//       <div className='loadgroupcontainer'>
//       <div className='loadgroupmain'>
//
//         <ReactLoading type='spin' color='#ed1c40' height='100px' width='100px'/>
//       </div>
//     </div>);
// }

    // console.log(this.state);
    // console.log(this.props);
    if(Object.keys(this.props.group).length === 0 || !this.props.group.info || !this.state.color){
      return (
        <div className='loadgroupcontainer'>
        <div className='loadgroupmain'>

          <ReactLoading type='spin' color='#ed1c40' height='100px' width='100px'/>
        </div>
      </div>);
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

    const renderCreateEvent = () => {
        if(this.state.member){
          return(  <Link className="createeventt2" to={idz +"/create/event"}>Create event</Link>);
      }else{
        return( <div className='createevent'> Join group to create an event! </div>);
        }
      };

    const newsList = (news = []) => {
      // if(this.props.group){
      //   if(this.props.group.news){
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

          <div className='newsholder'>
            <div className='newsdivider'>
              <Link className='news' to={ol} >{news[i].news} </Link>

              <Link className='newspicholder' to={user}>
              <img className='groupnewspic' src={news[i].use.image_url}></img>
              </Link>
            </div>
            <TimeAgo className= 'ago' datetime={v}></TimeAgo>
          </div>
          </div>
        );
      }
      return x;
    };
  // }
  //   };


if(this.props.group.color === "#FFFFFF"){
  var xo = '#ed1c40';
}else{
  xo = this.props.group.color;
}


  return (
    <div className="singlegroupcontainer" style={{backgroundColor: this.state.color}}>

        <div className='groupheader'>
            <div className="grouphead">
        <div className="singlegroupbanner" style={{backgroundColor:xo}}>
        {  this.props.group.banner_url ==='default' ? null : <img className='banner' src={this.props.group.banner_url}></img>}
        <div className="singlegroupheader">
          {this.props.group.name}
        </div>
        </div>


        <div className="singlegroupbar">
          <Link to={idz} className="glinkon">Home</Link>
          <Link to={members} className="glink">Members</Link>
          <Link to={sponsors} className="glink">Sponsors</Link>
          <Link to={photos} className="glink">Photos</Link>
          <Link to={pages} className="glink">Pages</Link>
          {this.renderUpdateGroup()}
          <div className="bardos">
            {this.props.currentUser? <Link className="glink" to={myprofile} >My profile</Link> : null }

          </div>
        </div>



      </div>
      </div>

      <div className="singlegroup">
        <div className="singlegroupsidebar">
            <div className='photoplaceholder'>
            <img className='groupphoto' src={this.props.group.image_url}></img>
            </div>
            <div className="gcreated2">

              <div className="groupsidebarname">{this.props.group.name}</div>
              <div className='groupsidebarlocation'>{this.props.group.location}</div>
            <div className="groupsidebarestablished">Established: {this.props.group.creator}</div>
                {this.state.num ? <div className='membercount'>{this.props.group.number} members</div> : <div className='membercount'>{this.props.group.number} members</div>}

              <div className="moderatorcolumn">
                <div className='moderatedby'>Moderated by:</div>
                <div className='g90'>
                  <img className='eventorg' src={this.props.group.mod.image_url}/>
                  <div className='groupsidebarmod'>{moddname()}</div>
                  </div>
                </div>
            </div>
        </div>

        <div className="singlegroupmain" style={{backgroundColor: this.state.color}}>
          <div className="grouphomeinfo">
            <div className="info">{this.props.group.info}</div>
            <div className='roze'>
              <div className='contactinfo' >Contact Info: {moddcontact()}</div>

          {renderCreateEvent()}
          </div>

        </div>
        <div className='memberholder'>
          {this.state.num ? <div className='ole'>We're {this.props.group.number} members</div> : <div className='ole'>We're {this.props.group.number} members</div>}

        <div className='roz'>

        <div className='rmem'>
          {this.randomGroupMembers()}
        </div>
        {this.state.member?  this.renderJ() : this.renderJ()}

        </div>
        </div>
          <div className="groupevents">
            {this.noEventsMessage()}
            {this.eventList(this.props.group.eventboth)}
            {this.eventList(this.props.group.eventeither)}
            {this.eventList(this.props.group.upcomingevents)}
            {this.pastEventsList(this.props.group.pastevents)}

            </div>
      </div>

        <div className="singlegroupnews">
          <div className='whatsnew'>What's new</div>
          {newsList(this.props.group.news.slice(0, this.state.newsheight + 1))}
          {this.props.group.news.length <= this.state.newsheight ? null : <div className='newsclicker' onClick={this.newsClicker} >More News</div>}


        </div>


    </div>
    </div>
  );
}

}


export default GroupShowDos;
// <div style={{height: this.state.heighter, overflow: 'hidden'}}>
// {this.state.newz ? newsList(this.props.group.news) : newsList(this.props.group.news)}
// </div>
// {this.state.heightning <= this.state.lengther* 120 ? <div className='newsclicker' onClick={this.newsheightclicker}>More news!</div> : null }
