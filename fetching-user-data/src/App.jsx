import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoad(true);
        setError(""); // Clear any previous errors
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        setUsers(data.users);
        setLoad(false); // Set loading to false on success
      } catch (err) {
        console.log(err);
        setError(err.message);
        setLoad(false); // Set loading to false on error
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">User List</h2>
      {load && <div className="text-blue-600">Loading...</div>}
      {error && <div className="text-red-600">{error}</div>}
      {!load && !error && users.length > 0 && (
        <ul className="space-y-2">
          {users.map(user => (
            <li key={user.id} className="p-2 bg-gray-100 rounded">
              {user.firstName} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}