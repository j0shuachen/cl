import React from 'react';
import { SketchPicker } from 'react-color';
import {Link} from 'react-router-dom';


class UpdateGroup extends React.Component {
  constructor(props){
    super(props);
// console.log(props);
    this.state= {
      name: "",
      info: "",
      location: "",
      user_id: "",
      errors: "",
      id: this.props.groupId,
      image_url: '',
      banner_url: '',
      color:''
    };
    this.uploadBannerButton = this.uploadBannerButton.bind(this);
    this.defaultButton = this.defaultButton.bind(this);
    this.colorChanger = this.colorChanger.bind(this);
    this.createGroup = this.createGroup.bind(this);
    this.createName = this.createName.bind(this);
    this.createInfo = this.createInfo.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.prev = this.prev.bind(this);
    this.uploadButton = this.uploadButton.bind(this);
    this.setImage = this.setImage.bind(this);
    this.setBanner = this.setBanner.bind(this);
  }

  componentDidMount(){
    this.props.fetchGroup(this.props.groupId).then(()=> this.prev());
    // setTimeout(this.prev, 500);
  }

  createGroup(){
    const groupId = this.props.groupId;
    const name = this.state.name;
    const info = this.state.info;
    const location = this.state.location;
    const user = this.props.currentUser;
    const color = this.state.color;
    const banner_url=this.state.banner_url;
    if(this.state.image_url===null){
      var image = 'http://res.cloudinary.com/dxeyfggji/image/upload/v1501260586/default-event-image_twehlf.gif';
    }else{
      image = this.state.image_url;
    }
    const groupe = {name: name, info: info, location: location, user_id: this.props.currentUser, id: this.props.groupId, image_url: image, color: color, banner_url: banner_url};
    // console.log(groupe);
    this.props.updateGroup({group: groupe}).then(()=>this.props.history.push(`/groups/${groupId}`));
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

  prev() {

    // this.props.group.background_url === 'default' ? this.setState({background_url: null}) : this.setState({background_url: this.props.group.background_url});
    this.setState({name:this.props.group.name});
    this.setState({banner_url: this.props.group.banner_url});
    this.setState({info: this.props.group.info});
    this.setState({location: this.props.group.location});
    this.setState({image_url: this.props.group.image_url});
    this.setState({color: this.props.group.color});
    // console.log(this.state);
  }


  setImage(url){
   if (url ){
     this.setState({image_url: url});
    //  console.log(this.state);

  }
   //  console.log(this.state);
 }
 setBanner(url){
   if(url){
     this.setState({banner_url: url});
    //  console.log(this.state);
   }
 }
defaultButton(){
  this.setState({banner_url: 'default'});
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

  uploadBannerButton(){
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS, (errors, images) => {
        if(errors === null){
          // console.log(images[0].url);
         this.setBanner(images[0].url);

       }
      }
    );
  }

  colorChanger(color, e){

    let c = color.rgb;
    let col = `rgba(${c.r}, ${c.g}, ${c.b}, ${c.a})`;
    this.setState({color: col});
    // console.log(this.state.color);
    // console.log(this.state);
  }

  render(){
console.log(this.props);
var cancel = `/groups/${this.props.group.id}`;
    return (
      <div className="groupformcontainer">
        <div className="creategroupgif" style={{backgroundColor: this.state.color}}>
          <img className='creategroupbanner' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507339343/f628524ed09d7bd7982e00b6804cd4c6_yrmycz.jpg'/>
          <div className='bannertext'>
            Update your clique
          </div>

        </div>
        <div className= 'formupdater'style={{backgroundColor: this.state.color}}>
        <form className="groupform" onSubmit={this.createGroup} >
          <input type="hidden" ref="id" value={this.state.id}/>

          <label className="groupname">
            <div className="steps">Step 1 of 4</div>
            <div className="ques">Update your group's name here!</div>
          <input className="ginput" type="text" ref="name"
            value={this.state.name} placeholder="Your group's name here!"
            onChange={this.createName}/>
          </label>

          <label className="groupinfo">
            <div className="steps">Step 2 of 4</div>
            <div className="ques">Change your group's description here!</div>
            <textarea className="ginput2" type="text" ref="location"
              cols="30" rows='10' value={this.state.info}
              placeholder="Description of your group!"
            onChange={this.createInfo}/>
          </label>

          <label className="grouplocation">
            <div className="steps">Step 3 of 4</div>
            <div className="ques">Moving your group's home base?</div>
            <input className="ginput" type="text" ref="location"
            value={this.state.location} placeholder="Your group's location here!"
            onChange={this.createLocation}/>
          </label>

          <label className="grouppic">
            <div className="steps">Step 4 of 4</div>
            <div className='pickers'>
              <div className='picturepicker'>
            <div className="ques2">Update your clique's picture</div>
            {this.state.image_url ? <img className='groupformpic' src={this.state.image_url}></img> :<img className='groupformpic' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1501260585/default_group_normal_ymyl3t.png'></img> }
            <div className='uplob' onClick={this.uploadButton}>Upload</div>
            </div>

            <div className='colorpicker'>
              <div className='ques2'>Update background color</div>
            <SketchPicker onChange={this.colorChanger} onChangeComplete={this.colorChanger}  disableAlpha={false} color={this.state.color}/>
            </div>
            </div>
          </label>

          <label className="grouppic">
            <div className="steps">Step 5 of 5</div>
            <div className='pickers'>
              <div className='picturepickerdos'>
            <div className="ques2">Update your group's banner!</div>
            {this.state.banner_url === 'default' ? <div className='groupformpico' style={{backgroundColor: this.state.color}}></div> : <img className='groupformpico' src={this.state.banner_url}></img> }
            <div className='buttonrow'>
            <div className='uplob' onClick={this.uploadBannerButton}>Upload</div>
            <div className='uplobdos' onClick={this.defaultButton}>Remove</div>
            </div>
            </div>
          </div>

      </label>
          <div className='submittingblock'>
          <input className="formos" type="submit"></input>
          <div className='formos2'>
              <Link className='formostext' to={cancel}>Cancel</Link>
          </div>
          </div>
      </form>

</div>
<div className="creategroupgif2" style={{backgroundColor: this.state.color}}>
  {this.state.banner_url ==='default'  ?  <img className='backer' src='http://res.cloudinary.com/dxeyfggji/image/upload/v1507339343/f628524ed09d7bd7982e00b6804cd4c6_yrmycz.jpg'/>
 : <img className='backer' src= {this.state.banner_url}></img> }
  <div className="bannertextupdate" >Preview your banner here</div>
</div>
      </div>
    );
  }
}

export default UpdateGroup;


// {this.state.banner_url ==='default'?  <div className="c1" >Update your group</div> : <img className='backer' src= {this.state.banner_url}/>}


// <div className="c1" >Update your group</div>
//
// src='http://res.cloudinary.com/dxeyfggji/image/upload/v1504262249/pexels-photo-358482_wlqvz6.jpg'
