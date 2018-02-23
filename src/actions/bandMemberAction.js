import superagent from 'superagent';

export const fetchMembers = payload => ({
  type: 'MEMBER_FETCH',
  payload
});

export const createMember = payload => ({
  type: 'MEMBER_CREATE',
  payload 
});

export const updateMember = payload => ({
  type: 'MEMBER_UPDATE',
  payload
});

export const removeMember = payload => ({
  type: 'MEMBER_DELETE',
  payload
});

export const getMembers = () => dispatch => {
  console.log('__FIRING__');
  return superagent.get(`${__API_URL__}/api/bandMember`)
  .then(res => {
    dispatch(fetchMembers(res.body));
    return res.body;
  });
};
export const postMember = member => (dispatch, getState) => {
  let {token} = getState();

  return superagent.post(`${__API_URL__}/api/bandMember`)
  .send(member)
  .set('Authorization', `Bearer ${token}`)
  .then(res => {
    dispatch(createMember(res.body));
    return res.body;
  });
};

export const putMember = member => (dispatch, getState) => {
  let {token} = getState();

  return superagent.put(`${__API_URL__}/api/bandMember`)
  .send(member)
  .set('Authorization', `Bearer ${token}`)
  .then(res => dispatch(updateMember(res.body)));
};

export const deleteMember = member => (dispatch, getState) => {
  let {token} = getState();

  return superagent.delete(`${__API_URL__}/api/bandMember`)
  .send(member)
  .set('Authorization', `Bearer ${token}`)
  .then(res => dispatch(removeMember(member)));
};