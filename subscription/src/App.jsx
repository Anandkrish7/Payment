import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Register from "./pages/Register";
import {Login} from "./pages/Login";
import Nav from "./components/Nav";
import Success from "./pages/Success";
import Failure from "./pages/Failure";
import { useLocation } from "react-router-dom"; // Import useLocation
import Account from "./pages/Account";

function App() {
  return (
    <Router>
      <Main />
      <Toaster position="bottom-right" toastOptions={{ duration: 4000 }} />
    </Router>
  );
}

function Main() {
  const location = useLocation();

  // Determine whether to show the Nav component
  const showNav = ![ "/success", "/failure" ].includes(location.pathname);

  return (
    <>
      {showNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failure" element={<Failure />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </>
  );
}

export default App;
