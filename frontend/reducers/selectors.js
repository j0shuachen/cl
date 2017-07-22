export const selectGroup = ({groups}, id) => {
  const group = groups[id] || {};
  return group;
};


export const asArray = ({ groups }) => (
  Object.keys(groups).map(key=> groups[key])
);
