
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import UserList from './components/UsersList';
import { initDB } from 'react-indexed-db-hook';
import { dbConfig } from './config/db';
import "./App.css";

initDB(dbConfig);

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route path="/" element={<Register/> }/>
        <Route path="/login" element={<Login/>} />
        <Route path="/users" element={<UserList/>} />
      
    </Routes>
    </BrowserRouter>
  );
};

export default App;

