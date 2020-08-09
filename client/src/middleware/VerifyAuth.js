import React from "react";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import { connect } from "react-redux";

const VerifyAuth = ({ user, logUser }) => {
  // return logged ? <Home /> : <Landing />;
  return user ? (
    <h1>Hello {user.name}</h1>
  ) : (
    <button onClick={logUser}>login</button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUser: () => {
      dispatch({
        type: "LOGIN",
        newUser: {
          name: "Manuel",
        },
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAuth);
