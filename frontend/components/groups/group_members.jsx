import React from 'react';
import {Link} from 'react-router-dom';
// import GroupEnrollment from '../group_enrollments/group_enrollment_container';
// import GroupEnrollment from '../search/group_enrollment_container';

import TimeAgo from 'timeago-react'; // var TimeAgo = require('timeago-react');

class GroupMembers extends React.Component{

  constructor (props) {
    super(props);
    // console.log(this.props);
    this.state= {

      enrollment_id: null,
      loaded: false,
      newz: true,
      heightning: 1215,
      heighter: '1215px'


    };
    // this.props.fetchGroup(this.props.match.params.groupId);
    this.ops = this.ops.bind(this);
    this.newsheightclicker = this.newsheightclicker.bind(this);
    // this.renderEvents = this.renderEvents.bind(this);

    // this.allmembs = this.allmembs.bind(this);
    // console.log(this.state);
    // this.groupmembers= this.groupmembers.bind(this);
  }

  componentWillReceiveProps(nextProps){
    // if(this.props.match.params.id !== nextProps.match.params.id){
    //   this.props.fetchGroup(nextProps.match.params.id);
    // }
    this.setState({nextProps});
  }

  componentWillMount(){
    // this.props.fetchGroup(this.props.match.params.groupId).then(()=> this.ops()).then( () => this.setState({loaded: true}));
    this.props.fetchEvents();
    this.props.fetchGroup(this.props.match.params.groupId).then(()=>this.setState({loaded: true, lengther: this.props.group.news.length})).then(()=> this.ops());

    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.ops();
    // this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.renderJ();
  }
  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(()=>this.setState({loaded: true}));
    // this.props.fetchGroup(this.props.match.params.groupId).then(()=> this.ops()).then( () => this.setState({loaded: true}));
    // this.props.fetchGroup(this.props.match.params.groupId).then(()=> this.ops()).then( () => this.setState({loaded: true}));

    this.props.fetchEvents();
    this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.ops();
    // this.props.fetchGroupEnrollments(this.props.match.params.groupId);
    // this.renderJ();
  }

  // propsWillUpdate(){
  //   this.props.fetchGroup(this.props.match.params.groupId);
  //
  // }

  // ops(){
  //   if(this.props.memboz){
  //     let o = this.props.memboz;
  //     let ob = Object.values(o);
  //     console.log(o);
  //     let v = Object.values(ob);
  //     console.log('v', v);
  //     return(
  //     v.map((org, idx) => {
  //       return (
  //         <div key={idx}>{org.name}</div>
  //       );
  //     })
  //   );
  //
  //   }
  //
  // }

  newsheightclicker() {
    console.log('hitt');
    var newheight = this.state.heightning+1215;

    var newheighter = newheight.toString() + 'px';
    console.log(newheight);
      this.setState({heighter: newheighter, heightning: newheight, newz: true});

  }
  ops(){
    if(this.props.group){
    // if(this.state.loaded){
    let arr = [];
      if(this.props.group.members){
      let o = this.props.group.members;
      let v = this.props.groupId;

      for (var i=0; i < o.length; i++){
        let p = o[i].id;
        let user = `/groups/${v}/users/${p}`;
      arr.push(
            <Link  key={o[i].id} className= 'memrow' to={user}>
            <img className='groupnewspic' src={o[i].image_url}></img>
          <div className='memname'>{o[i].name}</div>
          </Link>
        );
      }
    }
    return arr;
    }
  }

  render() {
    // console.log(this.props);
    // if(!this.state.group){
    //   return(<div>loading...</div>);
    // }

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
    if(this.props.currentUser){
    var myprofile=`/groups/${this.props.group.id}/users/${this.props.currentUser.id}`;
    }else{
     myprofile=`/groups/${this.props.group.id}/members`;
    }
        const created=this.props.group.created_at;
    const moddname = () => {
      if(this.props.group.mod){
        return (
          this.props.group.mod.name
        );
      }
    };

  //   const meme = (me = []) => (
  //     me.map((o,idx) => {
  //     return (
  //       <div className='memlist' key={idx}>{o.name}</div>
  //     );
  //   }
  // ));


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

    const newsList = (news = []) => {
      if(this.props.group){
        if(this.props.group.news){
          let g = this.props.group.news.length;
      var x = [];
      var o = this.props.groupId;
      for(var i=0; i< g; i++){
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
            <Link className='membersnews' to={ol} >{news[i].news} </Link>
            <TimeAgo className= 'ago' datetime={v}></TimeAgo>
          </div>
          </div>
        );
      }
      return x;
    }
  }
    };
    console.log(this.state);
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
        <Link to={members} className="glinkon">Members</Link>
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
              {this.state.num ? <div className='g2'>{this.props.group.number} members</div> : <div className='g2'>{this.props.group.number} members</div>}

            <div className="g66">
              <div className='g90'>Mod: {moddname()}</div>

              </div>
          </div>
        </div>
      </div>

        <div className="singlegroupmain">

          <div className="grouphomememinfo">
            <div className="membershead"> Group Members </div>
            <div className='yo'>{this.state.loaded? this.ops() : this.ops()}</div>
          </div>

      </div>
        <div className="singlegroupnews"  >

          <div className='whatsnew'>What's new</div>
            <div style={{height: this.state.heighter, overflow: 'hidden'}}>
            {this.state.newz ? newsList(this.props.group.news) : newsList(this.props.group.news)}
            </div>
          {this.state.heightning <= this.state.lengther* 135 ? <div className='newsclicker' onClick={this.newsheightclicker}>More news!</div> : null }

            </div>



    </div>
    </div>
  );
}

}
export default GroupMembers;
