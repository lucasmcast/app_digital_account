import { combineReducers } from 'redux';
import rootLogin from './rootLogin'
import rootDataAccount from './rootDataAccount'

export default combineReducers({ rootLogin, rootDataAccount });