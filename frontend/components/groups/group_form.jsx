import React from 'react';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
// console.log(props);
    this.state= {
      name: "",
      info: "",
      location: "",
      user_id: "",
      errors: "",

      image_url: null

    };
    this.createGroup = this.createGroup.bind(this);
    this.createName = this.createName.bind(this);
    this.createInfo = this.createInfo.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.uploadButton = this.uploadButton.bind(this);
    this.setImage = this.setImage.bind(this);
  }

  componentDidMount(){
    this.props.fetchGroups();
  }



  createGroup(){
    const name = this.state.name;
    const info = this.state.info;
    const location = this.state.location;
    const user = this.props.currentUser;
    if(this.state.image_url===null){
      var image = 'http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif';
    }else{
      image = this.state.image_url;
    }
    const groupe = {name: name, info: info, location: location, user_id: user, image_url: image};
    this.props.createGroup({group: groupe}).then(()=>this.props.history.push("/groups"));
  }

  createName(e){
    const name = e.target.value ? e.target.value : "";
    this.setState({name});
  }

  createInfo(e){
    const info = e.target.value ? e.target.value : "";
    this.setState({info});
  }

  createLocation(e){
    const location = e.target.value ? e.target.value : "";
    this.setState({location});
  }

  renderErrors(){
    if(this.props.errors){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  }

 setImage(url){
  if (url ){
    this.setState({image_url: url});

 }
  //  console.log(this.state);
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
      <div className="groupformcontainer">
        <div className="creategroupgif">
          <img className='creategroupbanner' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507336184/41cf6d39d0ad0f0e07317e26d1602076_g6caa6.jpg'></img>
          <div className='bannertext'>
        <div className="c1" >Start a new group</div>
          <div className="c2">We'll help you find the right people!</div>
          </div>
      </div>
        <form className="groupform" onSubmit={this.createGroup}>

          <label className="groupname">
            <div className="steps">Step 1 of 4</div>
            <div className="ques">What will your group be called?</div>
          <input className="ginput" type="text" ref="name"
            value={this.state.name} placeholder="example: New York Hiking Clique"
            onChange={this.createName}/>
          </label>

          <label className="groupinfo">
            <div className="steps">Step 2 of 4</div>
            <div className="ques">What will your clique be about?</div>
            <textarea className="ginput2" type="text" ref="location"
              cols="30" rows='10' value={this.state.info}
              placeholder="example: We're a group of hikers who love the outdoors! Join us as we explore the beauty of nature around New York!"
            onChange={this.createInfo}/>
          </label>

          <label className="grouplocation">
            <div className="steps">Step 3 of 4</div>
            <div className="ques">{"What's your new clique's" } hometown?</div>
            <input className="ginput" type="text" ref="location"
            value={this.state.location} placeholder="Enter your clique's location!"
            onChange={this.createLocation}/>
          </label>


          <label className="grouppic">
            <div className="steps">Step 4 of 4</div>
            <div className="ques">Upload a picture for your group!</div>
            {this.state.image_url ? <img className='groupformpic' src={this.state.image_url}></img> :<img className='groupformpic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260585/default_group_normal_ymyl3t.png'></img> }
            <div className='uplob' onClick={this.uploadButton}>Upload</div>


          </label>

          <span className="errors">{this.renderErrors()}</span>

          <input className="formos" type="submit"></input>

      </form>





      </div>
    );
  }
}

export default GroupForm;
