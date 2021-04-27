import {FETCH_IMAGES, FETCH_IMAGES_ERRORS} from '../../constans/constans';

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case FETCH_IMAGES_ERRORS:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default imagesReducer;
