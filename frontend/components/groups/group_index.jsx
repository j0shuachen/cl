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
            <Link className='grouptile' key= {idx} to={showz}>
               <img className="groupindexpic" src={group.image_url}></img>
                 <div className='grouptitle'>{group.name}</div>

          </Link>

        );
    });



    return (
      <div className="x">
        <div className="backgroundgif">
        <div className="indexheadermain">What do you love?</div>
        <div className="indexheadersecondary">Do more of it with Clique</div>
        </div>
            <Search/>


        <div className="grouplist">{groupItems}</div>

      </div>

    );


  }

}

export default GroupIndex;



// <div className="groupindexheader">
//     <Search/>
//
// <div className='findaclique'>Find a Clique!</div>
//  </div>
//
//         <ul className="grouplist">{groupItems}</ul>
