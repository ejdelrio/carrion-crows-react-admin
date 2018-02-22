import superagent from 'superagent';
import * as util from '../lib/util';


export const tokenSet = token => ({
  type: 'TOKEN_SET',
  payload: token
});

export const tokenDelete = () => {
  return {type: 'TOKEN_DELETE'};
};

export const login = user => dispatch => {
  let {userName, passWord} = user;
  return superagent.get(`${__API_URL__}/api/user`)
  .auth(userName, passWord)
  .then(res => {
    util.createCookie('ccApp-token', res.text, 1);
    dispatch(tokenSet(res.text));
    return res;
  })
}



export const signup = user => dispatch => {
  return superagent.post(`${__API_URL__}/api/user`)
  .send(user)
  .then(res => {
    util.createCookie('ccApp-token', res.text, 1);
    dispatch(tokenSet(res.text));
    return res;
  })
};

export const checkUser = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/userCheck`)
  .then(res => res.body);
}
