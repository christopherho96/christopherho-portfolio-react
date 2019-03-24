import { combineReducers } from 'redux';
import home from '../../screens/HomePage/redux/reducers';
import admin from '../../screens/admin/redux/reducers';

const rootReducers = combineReducers({
  home,
  admin
});

export default rootReducers;