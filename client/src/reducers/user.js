const user = (state = null, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log("ACTION LOG", action);
      return action.newUser;
    default:
      return state;
  }
};

export default user;
