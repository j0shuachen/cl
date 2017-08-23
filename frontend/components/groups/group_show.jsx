import React from 'react';
import {Link} from 'react-router-dom';
// import GroupEnrollment from '../group_enrollments/group_enrollment_container';
// import GroupEnrollment from '../search/group_enrollment_container';


class GroupShow extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      // member: null
      loaded: false
    };
    // console.log(this.props);
    // this.renderEvents = this.renderEvents.bind(this);
    this.renderU = this.renderU.bind(this);
    this.ismember = this.ismember.bind(this);
    this.renderJ = this.renderJ.bind(this);
    this.createMember= this.createMember.bind(this);
    this.deleteMember= this.deleteMember.bind(this);
    // this.amember = this.amember.bind(this);
    this.enid = this.enid.bind(this);
    this.renderjoin = this.renderjoin.bind(this);
    this.renderdel = this.renderdel.bind(this);
    this.opmember = this.opmember.bind(this);
    // console.log(this.props);
    // this.allmembs = this.allmembs.bind(this);
    // console.log(this.state);
    // this.groupmembers= this.groupmembers.bind(this);
  }
  getInitialState(){
    this.opmember();
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId);
    this.props.fetchEvents();
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.renderJ();
    // this.amember();
    this.opmember();
    // this.ismember();
  }

  componentWillMount(){
    this.props.fetchGroup(this.props.match.params.groupId);
    this.props.fetchEvents();
    this.props.fetchGroupEnrollments(this.props.match.params.groupId).then(() => this.opmember());
    // this.renderJ();
    // this.ismember();
    this.opmember();
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.group !== this.props.group){
      this.props.fetchGroup(this.this.props.match.params.groupId);
      this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    }
  }

  componentWillUpdateProps(prevProps,nextProps){

  }
// ismember(){
//       const g = this.props.fetchGroupEnrollments(this.props.match.params.groupId);
//       if(g){
//         const v = Array.from(g);
//         for (var i=0; i < v.length; i++){
//           if(v[i].user_id === this.props.currentUser.id){
//             this.setState({
//               member: true,
//               enrollment_id: v[i].id
//             });
//             return true;
//           }else{
//             return false;
//           }
//         }
//       }
// }

opmember(){
  if(this.props.memboz){
    let x = false;
  const g = this.props.memboz;
  const og = Object.values(g);
  // const ot = Object.values(og);
  console.log('og',og);

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
  // if(this.props.group_enrollments){
  //   const g = this.props.group_enrollments[1];
  //   let ost = Object.keys(g);
  //   if(ost){
  //     for(var i=0; i < ost.length; i++){
  //       let op = g[ost[i]];
  //       if(op.user_id===this.props.currentUser.id){
  //         this.setState({member: true});
  //         return true;
  //       }
  //     }
  //     this.setState({member: false});
  //     return false;
  //   }
  // }
}

// amember(){
//   // console.log(this.props);
//   let y = this.props.group.members;
//   if (y){
//     // let x = false;
//     y.forEach((el) => {
//       // console.log(el);
//       // console.log(this.props);
//       if(el.id === this.props.currentUser.id){
//         this.setState({member: true});
//         // console.log('yooo');
//         // return true;
//       }
//     });
//     // return false;
//
//   }
//   // this.setState({member: x});
//
//
// }

createMember(){
  const m = this.props.currentUser.id;
  const o = this.props.groupId;
  if(this.props.createGroupEnrollment({group_enrollment:{user_id: m, group_id: o}})){
    console.log('dododo');
    // this.forceUpdate();
    // this.opmember();
    this.setState({member: true});

    // this.amember();
  }
}

enid(){
  let cur;
  this.props.group.members.forEach((x) => {
    if(x.user_id === this.props.currentUser.id){
      cur = x.id;
    }
  });
  return cur;
}

deleteMember(){
  const m = this.props.currentUser.id;
  const o = this.props.groupId;
  // console.log(m);
  // console.log(o);

//   if(this.props.group.members){
//     this.props.group.members.forEach((x) => {
//       console.log(x);
//       console.log(this.props);
//
//       // console.log(this.props.fetchGroupEnrollments({group_enrollment:{ group_id: this.props.groupId, user_id: this.props.currentUser.id}}));
//       // console.log(this.props.currentUser.id);
//     if(x.id === this.props.currentUser.id){
//       // console.log('need');
//       let cur = x.id;
//       console.log('deleted');
//
//       this.props.deleteGroupEnrollment({group_enrollment:{user_id: m, group_id: o}}).then(
//       this.setState({member: false}));
//     }
//   });
// }

  // if (this.props.group){
  //   this.props.group.enrollments.forEach( e => {
  //     console.log(e);
  //     if (e.user_id === this.props.currentUser.id){
  //       console.log('matched');
  //       console.log(e);
  //       if(this.props.deleteGroupEnrollment({group_enrollment:{id: e.id, user_id: e.user_id, group_id: e.group_id}, id: e.id})){
  //         console.log('hithithit', this.props);
  //       this.setState({member: false});
  //       this.forceUpdate();
  //       this.amember();
  //     }}
  //   }
  //
  //
  // );
  // }
//   if (this.props.group_enrollments){
//   let ok = this.props.group_enrollments[1];
//   console.log('ok', ok);
//   for(var i=0; i < ok.length; i++){
//     // console.log(ok[i]);
//     // console.log(this.props.currentUser.id);
//     if(ok[i].user_id === this.props.currentUser.id){
//       // console.log('ld');
//       this.props.deleteGroupEnrollment({group_enrollment:{id: ok[i].id, user_id: ok[i].user_id, group_id: ok[i].group_id}, id: ok[i].id});
//         // console.log('huir');
//         this.setState({member: false});
//         break;
// }
//
//   }
//
// }



// console.log(this.props);
if (this.props.group_enrollments){
  let ok = this.props.group_enrollments[1];
  let arr = Object.keys(ok);
  if (arr.length > 0){
  for(var i=0; i < arr.length; i++){
    // if(ok[arr[i]])

    let x = ok[arr[i]];
    // console.log(ok[i]);
    // console.log(this.props.currentUser.id);
    if(x.user_id === this.props.currentUser.id){
      // console.log('ld');

      this.props.deleteGroupEnrollment({group_enrollment:{id: x.id, user_id: x.user_id, group_id: x.group_id}, id: x.id});
        // console.log('huir');
        this.setState({member: false});
        // this.opmember();
        break;
}

  }
}
}




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
  console.log(nextProps);
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
    if(this.props.group.length === 0){
      return (
        <div>Loading...</div>
      );
    }

    // if(!this.state.member){
    //   return(
    //     <div>Loading...</div>
    //   );
    // }
    // console.log(this.opmember());
    // console.log(this.props);
    const idz = `/groups/${this.props.group.id}`;
    const members=`/groups/${this.props.group.id}/members`;
    const sponsors=`/groups/${this.props.group.id}/sponsors`;
    const photos=`/groups/${this.props.group.id}/photos`;
    const pages=`/groups/${this.props.group.id}/pages`;
    const myprofile="/users/1";
    const created=this.props.group.created_at;
    const moddname = () => {
      if(this.props.group.mod){
        return (
          this.props.group.mod.name
        );
      }
    };

  //   const meme = (me = []) => (
  //     me.map(o => {
  //     return (
  //       <div>{o.name}</div>
  //     );
  //   }
  // ));
  //
  //   console.log(this.props.group.members);
    const moddcontact = () => {
      if (this.props.group.mod){
        return (
          this.props.group.mod.email
        );
      }
    };

    const eventList= (events = []) => (
  events.map(event => {
    const x = () => {

  if (this.props.currentUser){
    let g = this.props.currentUser.id;
    let v = event.user_id;
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

    return(
    <div className="groupeventeach" key={event.id}>

        <div className="groupeventname">{event.name}</div>
          <img className="indexpic" src={event.image_url}></img>

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
            <img className="grouppico" src={this.props.group.image_url}></img>


            <div className="gcreated2">
              <div className="g11">{this.props.group.name}</div>
              <div className="g2">Created: {this.props.group.created_at}</div>
              <div className="g3"> Mod: {moddname()}</div>
              <div className="g4"> Contact Info: {moddcontact()}</div>
          </div>
              <div className="gcreated3">{this.renderU()}
              </div>
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
        </div>


    </div>
    </div>
  );
}

}
export default GroupShow;



    // console.log(this.props.group.mod);
    // const l = this.props.group.mod;
    // console.log(l);
    // if (l){
    //   console.log(l.name);
    // }

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

    // console.log(this.props.mod);

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

      // componentWillReceiveProps(nextProps){
      //   // if (nextProps.currentUser.id !== this.props.currentUser.id) {
      //
      //   }
      // }

      // console.log(this.props.group);

      //   ismember(){
      //
      //     const g = this.props.fetchGroupEnrollments(this.props.match.params.groupId);
      //     // console.log(g);
      //     if (g){
      //     Array.from(g).forEach((user) => {
      //       if(user.user_id === this.props.currentUser.id){
      //         this.setState({
      //           member: true,
      //           enrollment_id: g.id
      //         });
      //         return true;
      //       }
      //     });
      //     return false;
      //   }
      // }
      //
      //

      // groupmembers(){
      //   const g = this.props.fetchGroupEnrollments(this.props.match.params.groupId);
      //   if(g){
      //     console.log(g);
      //   }
      // }


      // allmembs(){
      //   const g = this.props.fetchGroupEnrollments(this.props.match.params.groupId).members;
      //   const g = this.props.membs;
      //   if(g){
      //     g.map(mem =>{
      //       return (
      //         <div>
      //           <div>{mem.name}</div>
      //
      //           </div>
      //       );
      //     });
      //   }
      // }
