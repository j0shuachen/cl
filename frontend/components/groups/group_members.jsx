import React from 'react';
import {Link} from 'react-router-dom';
// import GroupEnrollment from '../group_enrollments/group_enrollment_container';
// import GroupEnrollment from '../search/group_enrollment_container';


class GroupMembers extends React.Component{

  constructor (props) {
    super(props);
    // console.log(this.props)
    this.state= {

      enrollment_id: null


    };
    this.props.fetchGroup(this.props.match.params.groupId);
    this.ops = this.ops.bind(this);
    // this.renderEvents = this.renderEvents.bind(this);

    // this.allmembs = this.allmembs.bind(this);
    // console.log(this.state);
    // this.groupmembers= this.groupmembers.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(this.props.match.params.id !== nextProps.match.params.id){
      this.props.fetchGroup(nextProps.match.params.id);
    }
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId);
    this.props.fetchEvents();
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    this.ops();
    // this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.renderJ();
  }

  // propsWillUpdate(){
  //   this.props.fetchGroup(this.props.match.params.groupId);
  //
  // }

  ops(){
    if(this.props.memboz){
      let o = this.props.memboz;
      let ob = Object.values(o);
      console.log(o);
      let v = Object.values(ob);
      console.log('v', v);
      return(
      v.map((org, idx) => {
        return (
          <div key={idx}>{org.name}</div>
        );
      })
    );

    }

  }

  render() {
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

    const meme = (me = []) => (
      me.map((o,idx) => {
      return (
        <div key={idx}>{o.name}</div>
      );
    }
  ));


  // const ops = () => {
  //   let o = this.props.memboz;
  //   let ob = Object.values(o);
  //   console.log(o);
  //   let v = Object.values(ob);
  //   console.log('v', v);
  //   return (
  //     v.map((org, idx) => {
  //       return (
  //         <div key={idx}>{org.name}</div>
  //       );
  //     })
  //   )
  // }
  //
  //
  //
  //
  //
  //   }
  //
  // }

    // console.log(this.props.group.members);
    const moddcontact = () => {
      if (this.props.group.mod){
        return (
          this.props.group.mod.email
        );
      }
    };
    // console.log('hwifhaowfh', this.props);
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

            </div>
          </div>

        <div className="singlegroupmain">

          <div className="grouphomeinfo">
            <div className="membershead"> Group Members </div>
            <div className='yo'>{this.ops()}</div>
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
export default GroupMembers;
