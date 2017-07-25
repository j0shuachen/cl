export const selectGroup = ({groups}, id) => {
  const group = groups[id] || {};
  return group;
};


export const asArray = ({ groups }) => (
  Object.keys(groups).map(key=> groups[key])
);


export const selectAll = (groups) => {
  return Object.values(groups);
};


// export const selectEvents = ({events}, id) => {
//   const eventss = events[id] || {};
//   return events;
// };

// export const selectEvents = (events) => {
//   return Object.values(events);
// };


export const selectEvents = ({events}, id)=> {
  const eventss =events[id] || {};
  return eventss;
};
