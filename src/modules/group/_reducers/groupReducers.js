const initialState = {
  groupList: [], // User list for admin
  groupCurrentInfo: {}
};

const group = (state = initialState, action) => {
  switch (action.type) {
    case 'GROUP_LIST':
      return {
        ...state,
        groupList: action.payload
      };

    case 'GROUP_CURRENT_INFO':
      return {
        ...state,
        groupCurrentInfo: action.payload
      };

    case 'GROUP_USER_REMOVE_BY_ID':
      return {
        ...state,
        groupCurrentInfo: {
          ...state.groupCurrentInfo,
          members: state.groupCurrentInfo.members.filter(el => el !== action.payload)
        }
      };

    default:
      return state;
  }
};

export default group;
