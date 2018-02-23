import superagent from 'superagent';

const fetchMembers = payload => ({
  type: 'MEMBER_FETCH',
  payload
});

const createMember = payload => ({
  type: 'MEMBER_CREATE',
  payload 
});

const updateMember = payload => ({
  type: 'MEMBER_UPDATE',
  payload
});

const removeMember = payload => ({
  type: 'MEMBER_DELETE',
  payload
});

const getMembers = () => dispatch => {
  return superagent.get(`${__API_URL__}/api/bandMember`)
  .then(res => dispatch(fetchMembers(res.body)));
};
const postMember = member => (dispatch, getState) => {
  let {token} = getState();

  return superagent.post(`${__API_URL__}/api/bandMember`)
  .send(member)
  .set('Authorization', `Bearer ${token}`)
  .then(res => dispatch(createMember(res.body)));
};

const putMember = member => (dispatch, getState) => {
  let {token} = getState();

  return superagent.put(`${__API_URL__}/api/bandMember`)
  .send(member)
  .set('Authorization', `Bearer ${token}`)
  .then(res => dispatch(updateMember(res.body)));
};

const deleteMember = member => (dispatch, getState) => {
  let {token} = getState();

  return superagent.delete(`${__API_URL__}/api/bandMember`)
  .send(member)
  .set('Authorization', `Bearer ${token}`)
  .then(res => dispatch(removeMember(member)));
};