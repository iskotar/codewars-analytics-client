const initialState = {
  groupList: [], // User list for admin
};

const group = (state = initialState, action) => {
  switch (action.type) {
    case 'GROUP_LIST':
      return {
        ...state,
        groupList: action.payload
      };


    default:
      return state;
  }
};

export default group;
