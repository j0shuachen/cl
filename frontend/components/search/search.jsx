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
        <Link className= "res"  key={idx} to={o} >{group.name}</Link>
      );
    });
    return mappd;
  }else{
    return false;
  }

  }


showGroups(){
  if(this.allGroups().length ===0 ){
    return (
null    );
  }else{

      return(
        <div className="formContainer">{this.allGroups()}</div>
      );
  }
}



  render() {
    // console.log(this.props);
    return (
      <div className='groupindexheader'>

        <div className='searchblock'>
        <input className="search" onChange={this.update('searchParams')} value={this.searchParams} placeholder="Search all cliques!"></input>
          <div className='findaclique'>Find a Clique!</div>
          </div>
            {this.showGroups()}

      </div>
  );
}
}

export default Search;
