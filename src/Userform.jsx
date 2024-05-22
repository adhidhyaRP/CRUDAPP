import React, { useEffect, useState } from 'react';
import './App.css';

const UserForm = ({ addUser, updateUser, currentUser }) => {
  const [user, setUser] = useState({
    name: '',
  
    email: '',
    phone: '',
    website: '',
   
  });

 
  useEffect(() => {
    if (currentUser) {
      setUser(currentUser);
    } else {
      setUser({
        name: '',
        email: '',
        phone: '',
        website: ''
      });
    }
  }, [currentUser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.id) {
      updateUser(user);
     
    } else {
      console.log(user)
      addUser(user);
     
    }

    setUser({
      name: '',
     
      email: '',
      phone: '',
      website: ''
    });
    

  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    
    <div className='formbg'>
      <form className='formdetails' onSubmit={handleSubmit}>
        <label htmlFor="name">NAME: </label>
        <input type="text" required name='name' onChange={handleChange} value={user.name} />


        <label htmlFor="email">EMAIL: </label>
        <input type="email" required name='email' onChange={handleChange} value={user.email} />


        <label htmlFor="phone">PHONE: </label>
        <input type="text" required name='phone' onChange={handleChange} value={user.phone} />

        <label htmlFor="website">WEB: </label>
        <input type="text" required name='website' onChange={handleChange} value={user.website} />

        

        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
};

export default UserForm;
