import React from 'react';
import type {User} from '/@/@types/user';

type Props = {
    user:User
}

function Details({user}:Props) {

    const {firstName, lastName, gender, dob} = user;

    const formatDate = (date: Date) => {
        return `${date.getDate()}/${date.getMonth() +1}/${date.getFullYear()}`;
    };

    
  return (
   <div className="details">
        <table>
        <tbody>
            <tr>
                <td>Name</td>
                <td>{`${firstName} ${lastName}`}</td>
            </tr>
            <tr>
                <td>Date of Birth</td>
                <td>{ formatDate(dob) }</td>
            </tr>
            <tr>
                <td>Gender</td>
                <td>{gender}</td>
            </tr>
        </tbody>
    </table>
   </div>
  );
}

export default Details;
