import {
  FIND_MEMES
} from '../actions';

export function memes(state = null, action) {
  switch (action.type)  {
    case FIND_MEMES:
      return Object.assign({}, state, {
        results: action.memes,
        error: action.error
      });
    default:
      return state;
  }
}
