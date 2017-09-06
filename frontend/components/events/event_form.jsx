import React from 'react';
import 'flatpickr/dist/themes/dark.css';

// import '!style!css!MeetUp/MeetUp/nodemodules/flatpickr/dist/themes/dark.css';
import Flatpickr from 'react-flatpickr';

class EventForm extends React.Component{
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state={
      group_id: "",
      user_id: "",
      name: "",
      description: "",
      location: "",
      image_url: null,
      start_time:'',
      end_time:''

    };

    this.createEvent = this.createEvent.bind(this);
    this.createName = this.createName.bind(this);
    this.createDescription = this.createDescription.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.setImage = this.setImage.bind(this);
    this.uploadButton = this.uploadButton.bind(this);
    this.setStart = this.setStart.bind(this);
    this.setEnd= this.setEnd.bind(this);
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
    if(this.state.start_time ===''){
      var starter = 'tbd';
    }else{
      starter = this.state.start_time.toString();
    }

    if(this.state.end_time === ''){
      var ender = 'tbd';
    }else{
      ender = this.state.end_time.toString();
    }
    if(this.state.image_url===null){
      var image = 'http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif';
    }else{
      image = this.state.image_url;
    }    const evente = {group_id: groupId, user_id: userId, name: name,
      description: description, location: location, image_url: image, start_time: starter, end_time: ender};
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

  setStart(t){
    console.log(t);

    this.setState({start_time:t});
  }

  setEnd(t){
    console.log(t);

    this.setState({end_time:t});
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
    // const oj = new flatpickr('jer',{});
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

          <label className="eventnameo">

          <div className="eventqueso"> When is your event going down?</div>
          </label>
          <div className='holden'>
            <div className='holdendos'>
              <div className= 'loth'>Start Time</div>
            <Flatpickr onChange={this.setStart} data-enable-time options={{inline:'true'}} className='lothar'></Flatpickr>
            </div>
              <div className='holdentres'>
                <div className='loth'>End Time</div>

          <Flatpickr onChange={this.setEnd} data-enable-time options={{inline:'true'}} className='lothar'></Flatpickr>
          </div>
        </div>

          <label className="eventlocation">
            <div className="eventques"> Where is your event going down?</div>
            <input className="einput" type="text" ref="location"
              value={this.state.location} placeholder="Your event's location here"
              onChange={this.createLocation}/>
          </label>

          <label className="eventpic">
            <div className="eventques"> Upload a picture for your event!</div>
              {this.state.image_url ? <img className='groupformpic' src={this.state.image_url}></img> :<img className='groupformpic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260585/default_group_normal_ymyl3t.png'></img> }
              <div className='uplob' onClick={this.uploadButton}>Upload</div>

          </label>

        <input className="creategroupsub" type="submit"></input>

        </form>
      </div>
    </div>
  );
  }

}


export default EventForm;
