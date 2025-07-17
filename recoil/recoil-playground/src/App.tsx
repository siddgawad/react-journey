
import { BrowserRouter,Routes,Route} from "react-router-dom";
import { Dashboard } from "./components/Dashboard";

import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./components/LoginPage";
import { Homepage } from "./components/HomePage";

export default function App(){
  return(
    
      <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path = "/login" element={<LoginPage />} />
        <Route path = "/dashboard" element={<ProtectedRoute>
          <Dashboard />
          </ProtectedRoute>} />
      </Routes>
      </BrowserRouter>
    
  )
}
