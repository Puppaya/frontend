import React, { useState, useEffect } from "react";

export default function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    fetch(`${apiUrl}/user/`)
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {userData ? (
        <ul>
          {userData.map(user => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
