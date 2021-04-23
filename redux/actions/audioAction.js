import {FETCH_AUDIO, FETCH_AUDIO_ERRORS} from '../../constans/constans';

export const fetchAudio = data => dispatch => {
  dispatch({
    type: FETCH_AUDIO,
    payload: data,
  });
};

export const fetchAudioErrors = error => dispatch => {
  dispatch({
    type: FETCH_AUDIO_ERRORS,
    payload: error,
  });
};
