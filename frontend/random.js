GroupShow


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





deleteMember
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
dskalfjlsk


      // console.log(this.props);
      // console.log(this.state);
      // if(!this.state.member){
      //   return(
      //     <div>Loading...</div>
      //   );
      // }
      // console.log(this.opmember());
      // console.log(this.props);


      //   const meme = (me = []) => (
      //     me.map(o => {
      //     return (
      //       <div>{o.name}</div>
      //     );
      //   }
      // ));
      //
      //   console.log(this.props.group.members);






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


enid

enid(){
  let cur;
  this.props.group.members.forEach((x) => {
    if(x.user_id === this.props.currentUser.id){
      cur = x.id;
    }
  });
  return cur;
}

this.enid = this.enid.bind(this);







y





const y = () => {
  if (this.state.member){
    if (event.rsvp){
      if(event.rsvp[this.props.currentUser.id]){
        this.setState({[event.id]: true});
      }else {
        this.setState({[event.id]: false});
      }
    }else{
      this.setState({[event.id]: false});
    }
  }
};




v




const v = () => {
  let g = this.props.currentUser.id;
  const og = `/groups/${event.group_id}/events/${event.id}`;
  if(this.state.member){
    if(event.rsvp){
      // console.log(event);
    if (event.rsvp[this.props.currentUser.id]){
    return (
      <div className='leaveevent' onClick={leave}>
        Leave Event
      </div>

    );
  }else  {
    return(
      <div className='eventrsvp'>
        <div className='joiner' onClick={join}>RSVP</div>
      </div>
    );
  }
  }else  {
    return(
      <div className='eventrsvp'>
        <div className='joiner' onClick={join} to={og}>RSVP</div>
      </div>
    );
  }
  }
};

      // import GroupEnrollment from '../group_enrollments/group_enrollment_container';
      // import GroupEnrollment from '../search/group_enrollment_container';

      // console.log(this.props);
      // this.renderEvents = this.renderEvents.bind(this);

      // console.log(this.props);
      // this.allmembs = this.allmembs.bind(this);
      // console.log(this.state);
      // this.groupmembers= this.groupmembers.bind(this);


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

ismember
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
