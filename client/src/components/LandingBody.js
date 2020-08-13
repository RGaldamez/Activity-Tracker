import React from "react";
import LoginButton from "./LoginButton";
const LandingBody = () => {
  return (
    <div>
      <div className='landing-picture'>
        <div className='landing-overlay'>
          <p className=' main-header'>Don't let your time manage you.</p>
          <div className='btn-header-container'>
            {/* <button className='btn btn-info btn-header'> Get Started </button> */}
            <LoginButton
              custom={{ style: "btn btn-info btn-header", text: "Get Started" }}
            />
          </div>
        </div>
      </div>
      {/* {user ? <h1>Hello {user.name}</h1> : <h1>User not logged in</h1>} */}
    </div>
  );
};

export default LandingBody;
