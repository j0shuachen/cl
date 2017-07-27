import React from 'react';

class GroupForm extends React.Component {
  constructor(props){
    super(props);
console.log(props);
    this.state= {
      name: "",
      info: "",
      location: "",
      user_id: "",
      errors: ""

    };
    this.createGroup = this.createGroup.bind(this);
    this.createName = this.createName.bind(this);
    this.createInfo = this.createInfo.bind(this);
    this.createLocation = this.createLocation.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount(){
    this.props.fetchGroups();
  }

  createGroup(){
    const name = this.state.name;
    const info = this.state.info;
    const location = this.state.location;
    const user = this.props.currentUser;

    const groupe = {name: name, info: info, location: location, user_id: user};
    this.props.createGroup({group: groupe}).then(()=>this.props.history.push(`/groups/${this.props.groups.length}`));
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


  render(){

    return (
      <div className="groupformcontainer">
        <div className="creategroupgif">
          <div className="c1" >Start a new group</div>
          <div className="c2">We'll help you find the right people!</div>
        </div>
        <form className="groupform" onSubmit={this.createGroup}>

          <label className="groupname">
            <div className="steps">Step 1 of 4</div>
            <div className="ques">What will your group be called?</div>
          <input className="ginput" type="text" ref="name"
            value={this.state.name} placeholder="Your group's name here!"
            onChange={this.createName}/>
          </label>

          <label className="groupinfo">
            <div className="steps">Step 2 of 4</div>
            <div className="ques">How would you describe your group?</div>
            <textarea className="ginput2" type="text" ref="location"
              cols="30" rows='10' value={this.state.info}
              placeholder="Description of your group!"
            onChange={this.createInfo}/>
          </label>

          <label className="grouplocation">
            <div className="steps">Step 3 of 4</div>
            <div className="ques">Where is your group's home base?</div>
            <input className="ginput" type="text" ref="location"
            value={this.state.location} placeholder="Your group's location here!"
            onChange={this.createLocation}/>
          </label>
          <span className="errors">{this.renderErrors()}</span>

          <input className="creategroupsub" type="submit"></input>

      </form>





      </div>
    );
  }
}

export default GroupForm;
