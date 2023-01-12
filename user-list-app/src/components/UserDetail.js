import axios from "axios";
import React, { useEffect, useState } from "react";

function UserDetail({ activeUserId }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios(`https://jsonplaceholder.typicode.com/users/${activeUserId}`)
      .then((res) => setDetails(res.data))
      .finally(() => setLoading(false));
  }, [activeUserId]);
  return (
    <div>
      <h2>Details</h2>

      {loading && <div>Loading...</div>}
      {!loading && <pre>{JSON.stringify(details, null, 2)}</pre>}
    </div>
  );
}

export default UserDetail;
