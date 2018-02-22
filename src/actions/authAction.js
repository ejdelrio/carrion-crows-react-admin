import superagent from 'superagent';


export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token
});

export const tokenDelete = () => {
  return {type: 'TOKEN_DELETE'};
};



export const signup = user => dispatch => {
  return superagent.post(`${__API_URL__}/api/signup`)
  .send(user)
  .then(res => {
    util.createCookie('pingme-token', res.text, 1);
    dispatch(tokenSet(JSON.parse(res.text)));
    return res;
  })
};
