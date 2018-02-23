import {combineReducers} from 'redux';
import token from './token.js';
import bandMembers from './bandMember';



module.exports = combineReducers({
  token,
  bandMembers
});
