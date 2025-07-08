import { AuthProvider } from "./context/AuthProvider";
import { useAuth } from "./context/useAuth";
import { LoginForm } from "./components/LoginForm";
import { AppBar } from "./components/AppBar";

function InnerApp(){
  const {user} = useAuth();

  return(
    <>
    <AppBar />
    {user?<div>Hello {user}</div>:<LoginForm />}
    </>
  );
}

export default function App(){
  return(
    <AuthProvider>
      <InnerApp />
    </AuthProvider>
  )
}