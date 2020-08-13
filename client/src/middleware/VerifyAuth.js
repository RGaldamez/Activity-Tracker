import React from "react";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

const VerifyAuth = ({ reduxUser, logUser }) => {
  const { user } = useAuth0();
  return user ? <Home /> : <Landing />;
};

const mapDispatchToProps = (dispatch) => {
  return {
    logUser: () => {
      dispatch({
        type: "LOGIN",
        newUser: {
          name: "Ricardo",
        },
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    reduxUser: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyAuth);
