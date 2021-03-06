import React from 'react';

class UpdateEvent extends React.Component{


  constructor(props){
    super(props);
    // console.log(this.props);
    // console.log(this.props.match.params.eventId);
    // console.log(this.props);
    this.state={
      group_id: "",
      user_id: "",
      name: "",
      description: "",
      location: "",
      id: this.props.eventId

    };

    this.createEvent = this.createEvent.bind(this);
    this.createName = this.createName.bind(this);
    this.createDescription = this.createDescription.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.prev = this.prev.bind(this);
  }


  // this.props.match.params.groupId
  componentDidMount(){
    this.props.fetchEvent(this.props.eventId);
    this.props.fetchGroup(this.props.groupId).then( ()=>this.prev());
    // setTimeout(this.prev, 500);
  }

componentWillMount(){
  this.props.fetchGroup(this.props.groupId).then(this.setState({check: true}));

}

  createEvent(){
    const groupId = this.props.groupId;
    const userId = this.props.currentUser;
    const name = this.state.name;
    const description = this.state.description;
    const location = this.state.location;
    const evente = {group_id: groupId, user_id: userId, name: name,
      description: description, location: location, id: this.props.eventId };
      this.props.updateEvent(evente).then(()=>this.props.history.push(`/groups/${groupId}`));
      this.props.createGroupNew({group_news: {group_id: this.props.groupId, news: `${this.props.group.user.name} updated the event ${name}`}});

  }

  createName(e){
    const name = e.target.value ? e.target.value :"";
    this.setState({name});
  }

  createDescription(e){
    const description = e.target.value ? e.target.value : "";
    this.setState({description});
  }

  createLocation(e){
    const location = e.target.value ? e.target.value : "";
    this.setState({location});
  }

  prev (){
    this.setState({name: this.props.events.name});
    this.setState({description: this.props.events.description});
    this.setState({location: this.props.events.location});

  }

  render(){
    return (
    <div className="eventformcontainer">
      <div className="createevent">
        <form className="eventform" onSubmit={this.createEvent}>
          <input type="hidden" ref="id" value={this.state.id}/>


          <label className="eventname">
            <div className="eventques"> Switch up your event's name here!</div>
            <input className="einput" type="text" ref="name"
              value={this.state.name}
              onChange={this.createName}/>
          </label>






          <label className="eventdescription">
            <div className="eventques"> Your event not where it used to be?</div>
            <input className="einput" type="text" ref="description"
              value={this.state.description}
              onChange={this.createDescription}/>
          </label>


          <label className="eventlocation">
            <div className="eventques"> Change up the event location!</div>
            <input className="einput" type="text" ref="location"
              value={this.state.location}
              onChange={this.createLocation}/>
          </label>

          <input className="createeventsub" type="submit"></input>

        </form>
      </div>
    </div>
  );
  }


}

export default UpdateEvent;
