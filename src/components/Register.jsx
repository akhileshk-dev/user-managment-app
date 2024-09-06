

import { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { add } = useIndexedDB('users');
  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (username && password) {
      try {
        await add({ username, password, status: 'active', previousLogins: [] });
        alert('Registration Successful');
        navigate('/login')
      } catch (error) {
        alert('Error: Username already exists');
      }
    }
  };

  return (
    <div className='register-container'>
    <form onSubmit={handleRegister}>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
    </div>
  );
};

export default Register;
