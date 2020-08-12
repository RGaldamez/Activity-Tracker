import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const LandingBody = () => {
  const { user } = useAuth0();
  return (
    <div>
      <div className='landing-picture'>
        <div className='landing-overlay'></div>
      </div>
      {user ? <h1>Hello {user.name}</h1> : <h1>User not logged in</h1>}
    </div>
  );
};

export default LandingBody;
