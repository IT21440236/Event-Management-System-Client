import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Events from "./components/Events";

import Home from "./components/Home";
<<<<<<< HEAD
import NavBar from "./components/NavBar";
=======
import Ticket from "./components/Tickets";
>>>>>>> 87cdc6bce6075f786ecf10ef499a3cb94079f65b

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
<<<<<<< HEAD
          <Route path="/events" element={<Events />} />
=======
          <Route path = "/tickets" element={<Ticket/>}  />
>>>>>>> 87cdc6bce6075f786ecf10ef499a3cb94079f65b
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
