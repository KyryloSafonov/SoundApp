import {FETCH_IMAGES, FETCH_IMAGES_ERRORS} from '../../constans/constans';

export const fetchImages = () => dispatch => {
  fetch('https://picsum.photos/v2/list')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_IMAGES,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_IMAGES_ERRORS,
        payload: error,
      });
    });
};
