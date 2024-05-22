import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserForm from './Userform.jsx';
import UserData from './Userdata.jsx';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  async function deleteUser(id) {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  async function updateUser(user) {
    try {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${user.id}`, user);
      setUsers(users.map(u => (u.id === user.id ? response.data : u)));
    } catch (error) {
      console.error('Error updating user:', error);
    }
  }

  async function createUser(user) {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/users', user);
      setUsers([...users, response.data]);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  }

  function handleEdit(user) {
    setCurrentUser(user);
  }

  return (
    <div  >
      <div className='forcenter'>
      <UserForm addUser={createUser} updateUser={updateUser} currentUser={currentUser} />
      </div>
      <UserData deleteUser={deleteUser} users={users} handleEdit={handleEdit} />
    </div>
  );
};

export default App;
