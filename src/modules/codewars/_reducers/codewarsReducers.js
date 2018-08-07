const initialState = {
  codewarsInfo: {} // Current user info
};

const codewars = (state = initialState, action) => {
  switch (action.type) {
    case 'CODEWARS_INFO':
      return {
        ...state,
        codewarsInfo: action.payload
      };

    case 'CODEWARS_CLEAR':
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default codewars;
