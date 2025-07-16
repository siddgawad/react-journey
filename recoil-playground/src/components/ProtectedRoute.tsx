import { useRecoilValue } from "recoil";
import { usernameAtom } from "../atoms/authAtom";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}:{children:React.ReactNode})=>{
    const username = useRecoilValue(usernameAtom);

    return(
        <div>
            {username?(children):(<Navigate to="/"/>)}
        </div>
    )
}