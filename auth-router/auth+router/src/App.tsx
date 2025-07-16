import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./components/LoginPage";
import { Dashboard } from "./components/DashboardPage";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthProvider";
import { HomePage } from "./components/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
