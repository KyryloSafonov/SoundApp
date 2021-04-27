import {FETCH_AUDIO, FETCH_AUDIO_ERRORS} from '../../constans/constans';

export const fetchAudio = () => dispatch => {
  fetch('https://control.neurobodygym.com/api/demo')
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: FETCH_AUDIO,
        payload: data,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_AUDIO_ERRORS,
        payload: error,
      });
    });
};
