import { BrowserRouter,Route,Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import { Navbar } from "./components/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { LoginPage } from "./components/LoginPage";
import { DashboardPage } from "./components/DashboardPage";

export default function App(){
  return(
    <BrowserRouter>
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path = "/" element={<div>Hello, welcome Home</div>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path = "/dashboard" element = {
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }/>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  )
}