import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import { Container } from "react-bootstrap";

function App() {
  const isAuthLocal = Boolean(localStorage.getItem("isAuth"));
  const [isAuth, setIsAuth] = useState(isAuthLocal);

  return (
    <Container>
      <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <HomePage /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      </Routes>
    </BrowserRouter>
    </Container>
    
  );
}

export default App;
