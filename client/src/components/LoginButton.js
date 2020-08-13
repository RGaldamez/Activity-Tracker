import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = ({ custom }) => {
  const { loginWithRedirect } = useAuth0();
  if (custom) {
    const { style, text } = custom;
    return (
      <button className={style} onClick={() => loginWithRedirect()}>
        {text}
      </button>
    );
  } else {
    return (
      <button className='btn btn-info' onClick={() => loginWithRedirect()}>
        Log In
      </button>
    );
  }
};

export default LoginButton;
