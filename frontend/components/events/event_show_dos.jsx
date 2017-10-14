import React from 'react';
import {Link} from 'react-router-dom';
import TimeAgo from 'timeago-react';
import moment from 'moment';
import ReactLoading from 'react-loading';

class EventShowDos extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      newz: true,
      loaded: false,
      num: true,
    };
    this.backgroundSetter = this.backgroundSetter.bind(this);
    this.newsClicker = this.newsClicker.bind(this);

    this.membergroups = this.membergroups.bind(this);
    this.renderUpdateGroup = this.renderUpdateGroup.bind(this);
    this.ismember = this.ismember.bind(this);
    this.renderJ = this.renderJ.bind(this);
    this.createMember= this.createMember.bind(this);
    this.deleteMember= this.deleteMember.bind(this);
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
    this.props.fetchGroup(this.props.match.params.groupId).then(() => this.backgroundSetter());
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    this.props.fetchEvent(this.props.match.params.eventId).then(()=>this.setState({checkt: true}));
    this.opmember();
    this.eventsetter();
  }

  componentWillMount(){
    // this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true}));
    // this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true, newz: true})).then(() => this.checkrsvp());
    // this.props.fetchGroupEnrollments(this.props.match.params.groupId).then(() => this.opmember());
    // this.props.fetchGroupNews(this.props.match.params.groupId).then(() => this.setState({newz: !this.state.newz}));
    // this.opmember();
    // this.eventsetter();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.group !== this.props.group){
      this.props.fetchGroup(this.this.props.match.params.groupId);
      this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    }
  }

  componentWillUpdateProps(prevProps,nextProps){

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

  backgroundSetter(){
     var o = this.props.group.news.length;
     if(o > 9){
       var newsheight = 9;
       var newsmore = true;
     }else{
       newsheight = o;
       newsmore = false;
     }
     if(new Date(this.props.evento.start_time) > new Date() || new Date(this.props.evento.end_time) > new Date()){
       // return false;
       var timing = true;
     }else {
       // return true;
       timing = false;
      //  this.setState({timing: true});
     }
    this.setState({check: true, newz: true, lengther: this.props.group.news.length, banner: this.props.group.banner_url, color: this.props.group.color, newsmore: newsmore, newsheight: newsheight, timing: timing });
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
    this.props.createGroupNew({group_news:{group_id: o, news: `${t} joined the group`}}).then(() =>this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));
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
            this.props.createGroupNew({group_news:{group_id: o, news: `${t} left the group`}}).then( () => this.props.fetchGroup(this.props.groupId).then(()=> this.setState({newz: !this.state.newz})));
            break;
          }
        }
      }
    }
  }

  checkrsvp (){
    if(this.props.group.eventdos[this.props.eventId].rsvp){
      if(this.props.currentUser){
        if(this.props.group.eventdos[this.props.eventId].rsvp[this.props.currentUser.id]){
          this.setState({[this.props.eventId]: true});
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
            } else{
              this.setState({[t[i].id]: false});
              }
            }
          }
        }
      }
    }

  renderJ(){
    if (this.state.member){
      return (
        <div>
          <div onClick={this.deleteMember}>Leave group!</div>
        </div>
      );
    } else{
      return (
        <div>
          <div onClick={this.createMember}>Join group!</div>
        </div>
      );
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({nextProps});
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
    let showz = `/groups/${this.props.groupId}/events/${this.props.eventId}/update`;
    if(this.props.currentUser){
      let g = this.props.currentUser;
      let v = this.props.evento.user_id;

      if (v ===g.id){
        return (
          <div className="eventup">
            <Link className="eventup" to={showz}>Update Event</Link>
          </div>
        );
      }
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
            <div className='membergroupsglobin' key={i}>

              <Link to={linker} className='groupmemberpage'>
                <img className='membergroupspic' src={o[i].image_url}></img>
                <div className='membergroupname'>{o[i].name}</div>
              </Link>

              <div className='rsvpdate'>RSVPed: {moment(o[i].eventenrollmentinfo[0].created_at).format('MMM Do YYYY')}</div>

            </div>
          );
        }
        return arr;
      } else{

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
      }
    }
  }
  render() {

    if(Object.keys(this.props.group).length === 0 || !this.props.evento || !this.state.color){
      return (
        <div className='loadgroupcontainer'>
          <div className='loadgroupmain'>
            <ReactLoading type='spin' color='#ed1c40' height='100px' width='100px'/>
          </div>
        </div>
      );
    }


    if(this.props.group.color === "#FFFFFF"){
      var xo = '#ed1c40';
    }else{
      xo = this.props.group.color;
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

    const newsList = (news = []) => {

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

    const numbo = () => {
      let len = this.props.evento.rsvpp;

      if(len.length === 0 || len.length <= 5){
        return null;
      }else  {
        return(
          <div className='eventlistmore'> {` +${len.length - 5} more`}</div>);
      }
    };

    const randers = (ran=[]) => {
      var arr = [];
      for(var i =0; i < ran.length; i++){
        var pj = `/groups/${this.props.groupId}/users/${ran[i].id}`;
        arr.push(<Link to={pj} key={i} className='soolo'> <img className='eventorg' src={ran[i].image_url}></img></Link>);
      }
      return arr;
    };


    const randeros = () => {
      if(this.props.evento.random){
        if(this.props.evento.random.length > 0){
          return (
              <div className='eventmembersholder'>{randers(this.props.evento.random)} {numbo()}  </div>
          );
        }
      } else{
          return(
            null
        );
      }
    };


    const leave = () => {
      this.setState({[this.props.eventId]: false});
      this.props.deleteEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: this.props.eventId, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(eventjoin()));
    };

    const join =() => {
      this.setState({[this.props.eventId]: true});
      this.props.createEventEnrollment({event_enrollment:{user_id: this.props.currentUser.id, event_id: this.props.eventId, group_id: this.props.groupId}}).then(this.props.fetchGroup(this.props.groupId).then(eventjoin()));
    };

    const timeChecker = () => {
      if(new Date(this.props.evento.start_time) > new Date() || new Date(this.props.evento.end_time) > new Date()){
        return false;
      }else {
        return true;
      }
    };



    const eventjoin = () => {

      if(this.state[this.props.eventId] && this.state.member){
        return(
          <div className='joiner' onClick={leave}>
            Leave Event
          </div>
        );
      }else if (!this.state.member) {
        return(
          <div className= 'jjjj'>
            Join group to RSVP
          </div>
        );
      }
      else if (this.state.member && !this.state[this.props.eventId]) {
        return(
            <div className='joiner' onClick={join}>RSVP</div>
        );
      }
    };

    var ots = `/groups/${this.props.groupId}/users/${this.props.evento.organizer.id}`;
    var ok = `/groups/${this.props.groupId}/events/${this.props.eventId}`;

    return (
      <div className="singlegroupcontainer" style={{backgroundColor: this.state.color}}>

        <div className='groupheader'>
          <div className="grouphead">
            <div className="singlegroupbanner" style={{backgroundColor:xo}}>
              { this.props.group.banner_url ==='default' ? null : <img className='banner' src={this.props.group.banner_url}></img>}
              <div className="singlegroupheader">{this.props.group.name}</div>
            </div>

            <div className="singlegroupbar">
              <Link to={idz} className="glink">Home</Link>
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

      <div className="singlegroup" >

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

        <div className="singlegroupmain">
          <div className='eventhomeinfo'>
            <Link to={ok} className="singlegroupeventname">{this.props.evento.name}</Link>
            {this.props.evento.image_url === 'https://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' || this.props.evento.image_url ==='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif' ? null : <img className="indexpic2" src={this.props.evento.image_url}></img> }
            <div className='groupeventbody'>
              <div className="groupeventlocation">Location: {this.props.evento.location}</div>
              <div className='groupeventtime'>Start time: {this.props.evento.start_time === 'tbd' ? 'tbd' : moment(this.props.evento.start_time).format('ddd MMM Do YYYY hh:mm A')}</div>
              <div className='groupeventtime'>End time: {this.props.evento.end_time === 'tbd' ? 'tbd' : moment(this.props.evento.end_time).format('ddd MMM Do YYYY hh:mm A')}</div>

              <div className='groupeventdivider'>
                <div className='groupeventbodyleft'>
                  {randeros()}
                  <div className="groupeventdescription">{this.props.evento.description}</div>
                </div>

                <div className='groupeventorgbody'>
                  <div className='groupeventorganizer'>
                    <div className='org'> Organizer:</div>
                    <Link to={ots}>
                      <img className='eventorg' src={this.props.evento.organizer.image_url}></img>
                    </Link>
                  </div>

                  {this.state.timing ? <div className='groupeventmemberswent'>{this.props.evento.membersnum} RSVPs</div> :       <div className='groupeventmemberswent'>{this.props.evento.membersnum} Went</div> }
                  {this.state.timing ? eventjoin() : null }
                  {this.renderEventUpdate()}
                </div>

              </div>
            </div>
          </div>
          <div className='usersingroup'>{this.membergroups()}</div>
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

export default EventShowDos;








//ge778
//ee2043
//gn3093
