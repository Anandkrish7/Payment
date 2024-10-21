import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  // Note the import change
import {Toaster} from "react-hot-toast"
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <Nav />
      <Toaster position="bottom-right" toastOptions={{duration: 4000}}/>
      <Routes>  
        <Route path="/" element={<Home />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
