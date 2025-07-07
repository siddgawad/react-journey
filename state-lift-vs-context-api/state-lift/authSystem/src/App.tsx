import {useState} from "react";
import { AppBar } from "./components/AppBar";
import { LoginForm } from "./components/LoginForm";

export default function App(){
  const [user,setUser] = useState<string|null>(null);

  return(
    <>
    <AppBar user={user} />
    {user? (<div>Hi {user}</div>): <LoginForm onLogin={setUser} />}    
    </>

  )
}