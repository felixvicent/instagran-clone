import axios from 'axios';

import { ADD_POST, ADD_COMMENT } from './actionTypes';

export const addPost = post => {
  return dispatch => {
    axios
      .post('/posts.json', { ...post })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
}

export const addComment = payload => {
  return {
    type: ADD_COMMENT,
    payload,
  }
}