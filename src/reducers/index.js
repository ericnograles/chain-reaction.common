import { combineReducers } from 'redux';
import { email, password, user } from './user';
import { memes } from './meme';

const rootReducer = combineReducers({
  email,
  password,
  user,
  memes
});

export default rootReducer;