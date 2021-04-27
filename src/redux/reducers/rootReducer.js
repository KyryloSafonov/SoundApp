import {combineReducers} from 'redux';
import imagesReducer from './imagesReducer';
import audioReducer from './audioReducer';

const rootReducer = combineReducers({
  images: imagesReducer,
  audio: audioReducer,
});

export default rootReducer;
