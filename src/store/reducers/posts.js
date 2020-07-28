import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes';

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'Félix Vicente',
    email: 'felixvicent1306@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: [{
      nickname: 'Luciene Candido',
      comment: 'Lindo amor'
    },
    {
      nickname: 'Maria Sophia',
      comment: 'Lindo papai'
    }]
  },
  {
    id: Math.random(),
    nickname: 'Luciene Vieira',
    email: 'lucinecandid1404@gmail.com',
    image: require('../../../assets/imgs/gate.jpg'),
    comments: [],
  }]
}

const reducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
      };
    case ADD_COMMENT:
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post.id === action.payload.postId){
            if(post.comments){
              post.comments = post.comments.concat(action.payload.comment);
            }
            else {
              post.comments = [action.payload.comment];
            }
          }
          return post;        })
      } 
    default:
      return state;
  }
}

export default reducer;