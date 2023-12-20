import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Login/index";
import Signup from "./pages/Signup/index";
import AdminDashboard from "./pages/AdminDashboard/index";
import UserDashboard from "./pages/UserDashboard/index";
import "./styles/color.css";
import "./styles/global.css";
import "./styles/index.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/" element={<Navigate to="/auth/login" />} />

          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
