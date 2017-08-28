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
      location: "",
      // image_url: ""

    };

    this.createEvent = this.createEvent.bind(this);
    this.createName = this.createName.bind(this);
    this.createDescription = this.createDescription.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.setImage = this.setImage.bind(this);
    this.uploadButton = this.uploadButton.bind(this);

  }


// this.props.match.params.groupId
  componentDidMount(){
    this.props.fetchGroup(this.props.groupId).then(this.setState({check: true}));

    this.props.fetchEvents();
    // setTimeout(this.createEvent, 500);
  }
  componentWillMount(){
    this.props.fetchGroup(this.props.groupId);
    // this.props.fetchGroup(this.props.match.params.groupId).then(() => this.setState({check: true}));

  }


  createEvent(){
    if(this.props){
      const groupId = this.props.groupId;
    const userId = this.props.currentUser;
    const name = this.state.name;
    const description = this.state.description;
    const location = this.state.location;
    const image = this.state.image_url;
    const evente = {group_id: groupId, user_id: userId, name: name,
      description: description, location: location, image_url: image};
      this.props.createEvent({event: evente}).then(()=>this.props.history.push(`/groups/${groupId}`));
      // this.props.createGroupNew({group_news: {group_id: this.props.groupId, news: `${this.props.group.user.name} created the event ${name}`}});
    }
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

  setImage(url){
    this.setState({image_url: url});
    // console.log(this.state);
  }


  uploadButton () {
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS, (errors, images) => {
        if(errors === null){
         this.setImage(images[0].url);
        }
      }
    );

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

          <label className="eventpic">
            <div className="eventques"> Upload a picture for your event!</div>
            <div className="uploadeventbut" onClick={this.uploadButton}>Upload!</div>
          </label>

          <input className="createeventsub" type="submit"></input>

        </form>
      </div>
    </div>
  );
  }

}


export default EventForm;
