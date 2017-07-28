import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class GroupEnrollment extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: "",
      group_id: ""
    };
    this.joingroup= this.joingroup.bind(this);
    this.leavegroup = this.leavegroup.bind(this);
    this.checkuser= this.checkuser.bind(this);
    // this.tt= this.tt.bind(this);
  }

  componentDidMount(){

  }

  // joinGroup(){
  //   if(this.props.currentUser){
  //     this.setState({user_id: this.props.currentUser.id});
  //   }
  // }
  checkuser(){


  const currentUser = () => {
    if(this.props.group.currentUser){
      return (
        this.props.group.currentUser.id
      );
    }
  };

  const groupId = () => {
    if (this.props.groups){
      // console.log(this.props.groups);
      return (
        this.props.groups.id
      );
    }
  };

  if(this.props.fetchGroupEnrollment(currentUser)){
    return true;
  }else{
    return false;
  }
}

  checkuser(){
    if(this.props.groups){
      const groupId = () => {
        if (this.props.groups){
          // console.log(this.props.groups);
          return (
            this.props.groups.id
          );
        }
      };
      const u = this.props.currentUser.id;
      // const v = this.props.groups.first.id;
      const v = groupId;
      if (this.props.fetchGroupEnrollment(v)){
        return true;
      }else{
        return false;
      }
      }
    }



  joingroup(){
    if(this.props){
      const groupId = () => {
        if (this.props.groups){
          // console.log(this.props.groups);
          return (
            this.props.groups.id
          );
        }
      };
      const u = this.props.currentUser.id;
      const v = groupId;

    const n = {user_id: u, group_id: v};
    this.props.createGroupEnrollment(n);
  }
  }

  leavegroup(){
    if(this.props){
      const groupId = () => {
        if (this.props.groups){
          // console.log(this.props.groups);
          return (
            this.props.groups.id
          );
        }
      };

      const u = this.props.currentUser.id;
      const v = groupId;

    const n = {user_id: u, group_id: v};
    this.props.deleteGroupEnrollment(n);
  }
}

render(){
  if (this.checkuser()){
    return (
      <div onClick={this.leavegroup()}> Leave group</div>
    );
  }else {
  return (
  <div onClick={this.joingroup()}>Join group</div>);
}
}
}

export default GroupEnrollment;
