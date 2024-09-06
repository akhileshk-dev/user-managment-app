import { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import { useNavigate } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { getByIndex } = useIndexedDB('users');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = await getByIndex('username', username);

    if (user && user.password === password) {
      // Success
      navigate("/users")
    } else {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className='login-container'>
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
