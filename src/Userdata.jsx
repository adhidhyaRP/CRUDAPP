import React from 'react';
import './App.css';

const UserData = ({ users, deleteUser, handleEdit }) => {
  return (
    <div className='background'>
      {users.map((user,ind) => (
        <div className='containerofusers' key={ind}>
          <h1 style={{ textAlign: 'center' }}>USER-CARD</h1>
          <h3>NAME: {user.name}</h3>
          <h3>ID: {ind+1}</h3>
          <h3>EMAIL: {user.email}</h3>
          <h3>PHONE: {user.phone}</h3>
          <h3>WEB: {user.website}</h3>
          
          <div>
            <button onClick={() => handleEdit(user)}>EDIT</button>
            <button onClick={() => deleteUser(user.id)}>DELETE</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserData;
