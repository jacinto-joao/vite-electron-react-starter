import React from 'react';
import UserProfile from './user-profile/UserProfile';


const wrapperStyles: React.CSSProperties ={
  minHeight: '100vh',
  width: '100%',
};

const Home: React.FC = () => {

  return (
    <div className='wrapper' style={wrapperStyles}>
      <div className="container">
        <UserProfile />
      </div>
    </div>
  );
};

export default Home;
