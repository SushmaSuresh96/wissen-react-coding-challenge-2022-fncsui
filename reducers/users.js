const users = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USERS':
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};

export default users;
