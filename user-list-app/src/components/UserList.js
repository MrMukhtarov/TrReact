import axios from "axios";
import React, { useEffect, useState } from "react";

function UserList({ setActiveUserId }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h2>Users</h2>

      {loading && <div>Loading...</div>}
      <ul className="user-list">
        {users.map((user) => (
          <li onClick={() => setActiveUserId(user.id)} key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
