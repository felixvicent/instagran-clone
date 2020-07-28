import { ADD_POST } from '../actions/actionTypes';

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
    default:
      return state;
  }
}

export default reducer;