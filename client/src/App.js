import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";

import Home from "./components/Home";
import Ticket from "./components/Tickets";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
          <Route path = "/tickets" element={<Ticket/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
