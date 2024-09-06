import { useState, useEffect } from 'react';
import { useIndexedDB } from 'react-indexed-db-hook';
import "../styles/UserList.css";

const UserList = () => {
  const { getAll, update, deleteRecord } = useIndexedDB('users');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAll().then((usersFromDB) => {
      setUsers(usersFromDB);
    });
  }, []);

  const blockUser = async (id) => {
    const user = users.find((user) => user.id === id);
    await update({ ...user, status: 'blocked' });
    setUsers(users.map((u) => (u.id === id ? { ...u, status: 'blocked' } : u)));
  };

  const unblockUser = async (id) => {
    const user = users.find((user) => user.id === id);
    await update({ ...user, status: 'active' });
    setUsers(users.map((u) => (u.id === id ? { ...u, status: 'active' } : u)));
  };

  const deleteUser = async (id) => {
    await deleteRecord(id);
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    

   
    <div className='userlist-container'>
      <h2 className='heading-userlist'>User List</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username.toUpperCase()}</td>
              <td className={user.status==='blocked'?'blocked':'active'}>{user.status.toUpperCase()}</td>
              <td>
              <td className='btn-td'>
                
                <button className='block' onClick={() => blockUser(user.id)}>Block</button>
                
                </td>
                <td className='btn-td'>
                <button onClick={() => unblockUser(user.id)}>Unblock</button>
                </td>
                <td className='btn-td'>
                <button className='delete' onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default UserList;
