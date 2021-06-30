import { combineReducers } from 'redux'

import userReducer from '../features/userSlice';
import appReducer from '../features/appSlice';

export default combineReducers({
  user: userReducer,
  app: appReducer
})