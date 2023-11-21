import { useState } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export const UserData = ({ id, firstName, lastName }: User) => {
  const [user, setUser] = useState({ id, firstName, lastName });

  const changeUser = () => {
    setUser({ ...user, lastName: 'aaa' }); // destructure
  };

  return (
    <div>
      <h2>User Data</h2>
      <p>first name: {user?.firstName}</p>
      <p>last name: {user?.lastName}</p>
      <p>id: {user?.id}</p>

      <button onClick={changeUser}></button>
    </div>
  );
};
