import React from "react";

const LandingBody = () => {
  return (
    <div>
      <div className='landing-picture'>
        <div className='landing-overlay'>
          <p className=' main-header'>Don't let your time manage you.</p>
          <div className='btn-header-container'>
            <button className='btn btn-info btn-header'> Get Started </button>
          </div>
        </div>
      </div>
      {/* {user ? <h1>Hello {user.name}</h1> : <h1>User not logged in</h1>} */}
    </div>
  );
};

export default LandingBody;
