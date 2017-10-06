import React from 'react';
import { Link, withRouter} from 'react-router-dom';


class Search extends React.Component {
  constructor(props){
    super(props);
    // console.log(this.props);
    this.state = {
      searchParams: ''
    };
    this.allGroups= this.allGroups.bind(this);
  }

  componentDidMount(){
    this.props.fetchGroups();

  }

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  allGroups(){
    const arr = [];
    if (this.state.searchParams){
    this.props.groups.forEach(g =>{
      if (g.name.toLowerCase().includes(this.state.searchParams)){
        arr.push(g);
      }}
    );
  }
  if (arr){
    let mappd = arr.map((group, idx)=>{
      const o =`/groups/${group.id}`;

      return (
        <div className= "res1" key={idx}>
        <Link className= "res" to={o} >{group.name}</Link>
      </div>);
    });
    return mappd;
  }else{
    return false;
  }

  }


showGroups(){
  if(this.allGroups().length ===0 ){
    return (
      <div></div>
    );
  }else{

      return(
      <div>
        <div className="formContainer">{this.allGroups()}</div>
        </div>
      );
  }
}



  render() {
    // console.log(this.props);
    return (
    <div className="searchbar">
      <form >
      <label  >
        <input className="search" onChange={this.update('searchParams')} value={this.searchParams} placeholder="Search all groups!">
        </input>
      </label>
      </form>
      {this.showGroups()}
    </div>
  );
}
}

export default Search;
