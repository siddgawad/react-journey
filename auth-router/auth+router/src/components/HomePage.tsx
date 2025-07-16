import { useNavigate } from "react-router-dom";
export const HomePage = () => {
  const navigate = useNavigate();

  function handle() {
    navigate("/login");
  }

  return (
    <>
      Hello welcome home
      <button onClick={handle}>Go to Login</button>
    </>
  );
};
