import {connect} from 'react-redux';
import GroupIndex from './group_index';
import {selectAll} from '../../reducers/selectors';

import {receiveGroups, fetchGroups} from '../../actions/groups_actions';

const mapStateToProps = state => {
  return {
    groups: selectAll(state.groups)
    // errors: state.errors
  };
};

const mapDispatchToProps = dispatch =>( {
  fetchGroups: () => dispatch(fetchGroups()),

});

export default connect(

  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
