import React from 'react';
import {Link} from 'react-router-dom';
import ReactLoading from 'react-loading';
import moment from 'moment';


import TimeAgo from 'timeago-react';

class GroupMembers extends React.Component{

  constructor (props) {
    super(props);
    this.state= {
      enrollment_id: null,
      loaded: false,
      newz: true,
      heightning: 1395,
      heighter: '1395px'
    };
    this.renderUpdateGroup = this.renderUpdateGroup.bind(this);
    this.newsClicker = this.newsClicker.bind(this);

    this.ops = this.ops.bind(this);
    this.newsheightclicker = this.newsheightclicker.bind(this);
    this.backgroundSetter = this.backgroundSetter.bind(this);

  }

  componentWillReceiveProps(nextProps){

    this.setState({nextProps});
  }

  componentWillMount(){
    // this.props.fetchEvents();
    // this.props.fetchGroup(this.props.match.params.groupId).then(()=>this.setState({loaded: true, lengther: this.props.group.news.length})).then(()=> this.ops());

    // this.props.fetchGroupEnrollments(this.props.match.params.groupId);

  }
  componentDidMount(){
    this.props.fetchGroup(this.props.match.params.groupId).then(()=>this.backgroundSetter());

    this.props.fetchGroupEnrollments(this.props.match.params.groupId);

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

       this.setState({check: true, newz: true, lengther: this.props.group.news.length, banner: this.props.group.banner_url, color: this.props.group.color, newsmore: newsmore, newsheight: newsheight });
    }


  newsheightclicker() {
    var newheight = this.state.heightning+1395;
    var newheighter = newheight.toString() + 'px';
      this.setState({heighter: newheighter, heightning: newheight, newz: true});
  }

  ops(){
    if(this.props.group){
      let arr = [];
      if(this.props.group.memberino){
        let o = this.props.group.memberino;
        let v = this.props.groupId;
        for (var i=0; i < o.length; i++){
          let p = o[i].id;
          let user = `/groups/${v}/users/${p}`;
          arr.push(
            <Link  key={i} className= 'memrow' to={user}>
              <img className='groupmemberspic' src={o[i].image_url}></img>
              <div className='membersubholder'>
                <div className='memname'>{o[i].name}</div>
                <div className='memberjoindate'>Joined: {moment(o[i].enrollinfo[0].created_at).format('MMM Do YYYY')}</div>
              </div>
            </Link>
          );
        }
      }
    return arr;
    }
  }

  render() {
    if(Object.keys(this.props.group).length === 0  || !this.state.color){
      return (
        <div className='loadgroupcontainer'>
          <div className='loadgroupmain'>
            <ReactLoading type='spin' color='#ed1c40' height='100px' width='100px'/>
          </div>
        </div>
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

    const moddcontact = () => {
      if (this.props.group.mod){
        return (
          this.props.group.mod.email
        );
      }
    };

    const newsList = (news = []) => {
      let g = news.length;
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
              { this.props.group.banner_url ==='default' ? null : <img className='banner' src={this.props.group.banner_url}></img>}
              <div className="singlegroupheader">{this.props.group.name}</div>
            </div>
            <div className="singlegroupbar">
              <Link to={idz} className="glink">Home</Link>
              <Link to={members} className="glinkon">Members</Link>
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
        <div className="singlegroupmain">
          <div className="grouphomememinfo">
            <div className="membershead"> Group Members </div>
            <div className='yo'>{this.state.loaded? this.ops() : this.ops()}</div>
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
export default GroupMembers;
