import {FETCH_AUDIO, FETCH_AUDIO_ERRORS} from '../../constans/constans';

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_AUDIO:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_AUDIO_ERRORS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default audioReducer;
