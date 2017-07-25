import React from 'react';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
    this.state={
      group_id: "",
      user_id: "",
      name: "",
      description: "",
      location: ""

    };

    this.createEvent = this.createEvent.bind(this);
    this.createName = this.createName.bind(this);
    this.createDescription = this.createDescription.bind(this);
    this.createLocation = this.createLocation.bind(this);
  }


// this.props.match.params.groupId
  componentDidMount(){
    this.props.fetchEvents();
  }


  createEvent(){
    const groupId = this.props.groupId;
    const userId = this.props.currentUser;
    const name = this.state.name;
    const description = this.state.description;
    const location = this.state.location;
    const evente = {group_id: groupId, user_id: userId, name: name,
      description: description, location: location};
      this.props.createEvent({event: evente}).then(()=>this.props.history.push(`/groups/${groupId}`))
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

  render(){
    return (
    <div className="eventformcontainer">
      <div className="createevent">
        <form className="eventform" onSubmit={this.createEvent}>


          <label className="eventname">
            <div className="eventques"> What will your event be called?</div>
            <input className="einput" type="text" ref="name"
              value={this.state.name} placeholder="Your event's name here"
              onChange={this.createName}/>
          </label>






          <label className="eventdescription">
            <div className="eventques"> What is your event all about?</div>
            <input className="einput" type="text" ref="description"
              value={this.state.description} placeholder="Your event's description here"
              onChange={this.createDescription}/>
          </label>


          <label className="eventlocation">
            <div className="eventques"> Where is your event going down?</div>
            <input className="einput" type="text" ref="location"
              value={this.state.location} placeholder="Your event's location here"
              onChange={this.createLocation}/>
          </label>

          <input className="createeventsub" type="submit"></input>

        </form>
      </div>
    </div>
  );
  }

}


export default EventForm;
