import { useAuth } from "../context/useAuth";

export function AppBar() {
  const { user, logout } = useAuth();

  return (
    <header style={{ padding: "1rem", background: "black" }}>
      {user ? (
        <>
          <span>👤 {user}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <span>🔒 Not logged in</span>
      )}
    </header>
  );
}
