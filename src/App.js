import Registration from "./components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifiedPage from "./components/VerifiedPage";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import Navbar from "./components/Navbar";
import ResetPassword from "./components/ResetPassword";
import Welcome from "./components/Welcome";

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/verify-email/:token" element={<VerifiedPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
