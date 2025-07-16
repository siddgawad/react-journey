import { useAuth } from "../context/useAuth";

export const Dashboard = () => {
  const { logout } = useAuth();

  function handleClick() {
    logout();
  }

  return (
    <>
      <div>
        <button onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};
