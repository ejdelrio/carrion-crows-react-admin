

module.exports = (state=[], action) => {
  let {type, payload} = action;

  switch(type) {
    case 'MEMBER_FETCH':
      return payload;
    case 'MEMBER_CREATE':
      return [...state, payload];
    case 'MEMBER_DELETE':
      return state.filter(val => val._id !== payload._id);
    case 'MEMBER_UPDATE':
      return state.map(val => val._id === payload._id ? payload : val);
    default:
      return state;
  }
}