import React from 'react';
import GroupShow from './group_show';
import Search from '../search/search_container';


import { Link, Route} from 'react-router-dom';

class GroupIndex extends React.Component {
  constructor(props){
    super(props);

  }

  componentDidMount(){
    this.props.fetchGroups();

  }

  render(){
    const { groups} = this.props;

    const groupItems = this.props.groups.map((group, idx) => {
      let showz = `/groups/${group.id}`;
      // let v = `/assets/defaultbanner${idx}.jpg` ;
      // if (!v){
      //   v="/assets/defaultbanner1.jpg";
      // }
      let v="/assets/defaultbanner1.jpg";

      let t = {
        backgroundImage: `url(${v})`,
        height: '300px',
        width: '300px'
      };
        return (
          <div className="g1" key={idx}>

            <Link style={t} className="indexlink" to={showz}>
              {group.name}</Link>
          </div>
        );
    });



    return (
      <div className="x">
        <div className="groupindexheader"> Find a MeetUp! </div>
        <div className="searchbarz">

          <div className="searchwhite"><Search/>

          </div>

        </div>
        <ul className="grouplist">{groupItems}</ul>

      </div>
    );


  }

}

export default GroupIndex;
