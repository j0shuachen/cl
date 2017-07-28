import {connect} from 'react-redux';
import {fetchGroup, fetchGroups} from '../../actions/groups_actions';
import {selectGroup} from '../../reducers/selectors';
import Search from './search';
import {fetchEvent, fetchEvents} from '../../actions/event_actions';
import {selectEvents, selectAll} from '../../reducers/selectors';
const mapStateToProps = state => {
  // console.log(state);
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
)(Search);





// import { connect } from 'react-redux';
// import {selectAll} from '../../reducers/selectors';
//
// import {fetchGroups, fetchGroup, receiveGroups} from '../actions/groups_actions';
// // import {fetchGroups} from '../../util/groups_api_util';
// import Search from './search';
//
// const mapStateToProps = (state) => {
//
//   return {
//     groups: selectAll(state.groups)
//     // groups: fetchGroups(),
//     // currentUser: session.currentUser,
//   };
// };
//
// const mapDispatchToProps = (dispatch) => ({
//   fetchGroups: ()=> dispatch(fetchGroups()),
//   fetchGroup: id => dispatch(fetchGroup(id))
// });
//
// export default connect (
//   mapStateToProps,
//   mapDispatchToProps
// )(Search);
