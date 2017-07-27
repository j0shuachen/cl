import React from 'react';
import {Link} from 'react-router-dom';

class GroupEnrollment extends React.Component {
  constructor(props){
    super(props);

    // console.log(this.props);
    this.state ={
      member: false
    };
    this.createGroupEnrollment=this.createGroupEnrollment.bind(this);
    this.deleteGroupEnrollment= this.deleteGroupEnrollment.bind(this);
  }

  componentDidMount(){
    this.props.fetchGroupEnrollment(this.props.match.params.session.currentUser.id);
    // setTimeout(this.renderUpdate, 500);
  }

  createGroupEnrollment (){
    const groupId = this.props.groupId;
    const userId = this.props.session.currentUser;
    const member = {user_id: userId, group_id: groupId};
    this.setState({member:true});
    this.props.createGroupEnrollment({member}).then(() => this.props.history.push(`/groups/${groupId}`));

  }

  deleteGroupEnrollment () {
    const groupId = this.props.groupId;
    const userId = this.props.session.currentUser;
    const member = {user_id: userId, group_id: groupId};
    this.setState({member:true});
    this.props.removeGroupEnrollment({member}).then(() => this.props.history.push(`/groups/${groupId}`));
  }

  render(){

    return (
      this.props.member? "haha" :"boo"

    );

  }
}

export default GroupEnrollment;
