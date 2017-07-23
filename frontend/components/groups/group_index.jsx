import React from 'react';
import GroupShow from './group_show';

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
        return (
          <li key={idx}>
            <Link to={showz}>{group.name}</Link>
          </li>
        );
    });



    return (
      <div>
        <div> Groups </div>
        <ul className="grouplist">{groupItems}</ul>
      </div>
    );


  }

}

export default GroupIndex;
