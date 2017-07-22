import React from 'react';
import {Link} from 'react-router-dom';


const GroupShow = ({ group, groupId, fetchGroup}) => {

  const groups = {
    [groupId]: group
  };

  return (
    <div className="singlegroup">
      <div className="singlegroupheader">

      </div>
      <div className="singlegroupbody">

        <div className="singlegroupsidebar">
        </div>

        <div className="singlegroupmain">
          <li>{groups.info}</li>
        </div>


        <div className="singlegroupnews">
        </div>
      </div>

    </div>
  );


};


export default GroupShow;
