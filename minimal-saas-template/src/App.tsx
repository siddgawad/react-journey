import { Dashboard } from "./components/Dashboard";
import { HomePage } from "./components/HomePage";
import { LoginPage } from "./components/LoginPage";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

export default function App(){
  return(
    <AuthProvider>
          <BrowserRouter>
          <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path = "/login" element={<LoginPage />} />
      <Route path = "/dashboard" element = {<ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>


  )
}