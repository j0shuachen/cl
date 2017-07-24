import React from 'react';
import {Link} from 'react-router-dom';


class GroupShow extends React.Component{

  constructor (props) {
    super(props);
    console.log(this.props);

    this.state= {

    };
  }


  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId);
  }




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
    console.log(created);
    // const year=created.getUTCFullYear();
    // console.log(year);
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
              <div className="g1">{this.props.group.name}</div>
              <div className="g2">Created: {this.props.group.created_at}</div>
              </div>
            </div>
          </div>

        <div className="singlegroupmain">

          <div className="groupinfo">{this.props.group.info}</div>
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
