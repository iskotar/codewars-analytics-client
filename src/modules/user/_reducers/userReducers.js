const initialState = {
  userList: [], // User list for admin
  authUserInfo: {}, // user info
  currentUserInfo: {} // Current user info
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LIST':
      return {
        ...state,
        userList: action.payload
      };

    case 'AUTH_USER_INFO':
      return {
        ...state,
        authUserInfo: action.payload
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
