import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/5_pages/Login";
import Registration from "./components/5_pages/Registration";
import HomePage from "./components/5_pages/HomePage";
import ProtectedRoute from "./components/5_pages/ProtectedRoute";
import PublicRoute from "./components/5_pages/PublicRoute";
import Container from "./components/4_templates/Container";

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/registration"
            element={
              <PublicRoute>
                <Registration />
              </PublicRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage selectedLink="home" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/top-up"
            element={
              <ProtectedRoute>
                <HomePage selectedLink="topUp" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/transaction"
            element={
              <ProtectedRoute>
                <HomePage selectedLink="transaction" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <HomePage selectedLink="profile" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
