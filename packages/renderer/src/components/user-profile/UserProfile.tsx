import React from 'react';
import Details from './partials/Details';
import type {User} from '/@/@types';

const user: User = {
  firstName:'Jacinto',
  lastName: 'Joao',
  gender:'Male',
  dob: new Date('07/04/1990')

};

function UserProfile() {
  return (
    <div className='user-profile'>

        <div className="avatar"></div>
        <Details user={user} />
    </div>

  );
}

export default UserProfile;
