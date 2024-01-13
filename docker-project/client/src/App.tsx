import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get('http://localhost:3000/api/users');
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.firstName} - {user.lastName}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
