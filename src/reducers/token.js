

module.exports = function(state='', action) {
  let {type, payload} = action;
  switch(type) {
    case 'TOKEN_SET':
      return payload;
    case 'TOKEN_DELETE':
      return '';
    default:
      return state;
  };
};