export const initialState = {
  content: 'home',
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_CONTENT':
      return {
        ...state,
        content: action.content,
      };

    case 'GET_CONTENT':
      return {
        ...state,
      };

    default:
      return state;
  }
};
