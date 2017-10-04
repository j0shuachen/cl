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
      // console.log(group);
        return (
          <div className="g1" key={idx}>
            <Link to={showz}>    <img className="eo" src={group.image_url}></img>
</Link>
<div className='g999'>{group.name}</div>

          </div>
        );
    });



    return (
      <div className="x">
        <div className="backgroundgif">
        <div className="dummyp">What do you love?</div>
        <div className="dummypdos">Do more of it with Clique</div>
        </div>

        <div className="groupindexheader"> Find a Clique! </div>
        <div className="searchbarz">
          <div className="searchwhite"><Search/></div>
        </div>
        <ul className="grouplist">{groupItems}</ul>

      </div>

    );


  }

}

export default GroupIndex;
