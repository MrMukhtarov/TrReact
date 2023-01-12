import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

function UserDetail() {
  const { id } = useParams();
  const location = useLocation();
  const [user, setUser] = useState(location.state);

  useEffect(() => {
    if (!user?.id) {
      fetch(`${process.env.REACT_APP_API_ENDPOINT}/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [id, user]);

  return (
    <div>
      <h2>User Details</h2>

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${Number(id) + 1}`}>Next</Link>
    </div>
  );
}

export default UserDetail;
