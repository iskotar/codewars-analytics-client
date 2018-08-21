const initialState = {
  userList: [], // User list for admin
  userAuthorizedInfo: {}, // auth user info
  userCurrentInfo: {} // Current user info
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LIST':
      return {
        ...state,
        userList: action.payload
      };

    case 'USER_AUTHORIZED_INFO':
      return {
        ...state,
        userAuthorizedInfo: action.payload
      };

    case 'USER_CURRENT_INFO':
      return {
        ...state,
        userCurrentInfo: action.payload
      };

    case 'USER_LOGOUT':
      return {
        ...initialState
      };

    default:
      return state;
  }
};

export default user;
