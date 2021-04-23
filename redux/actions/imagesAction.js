import {FETCH_IMAGES, FETCH_IMAGES_ERRORS} from '../../constans/constans';

export const fetchImagesSuccess = data => dispatch => {
  dispatch({
    type: FETCH_IMAGES,
    payload: data,
  });
};

export const fetchImagesError = error => dispatch => {
  dispatch({
    type: FETCH_IMAGES_ERRORS,
    payload: error,
  });
};
