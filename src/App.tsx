import { Routes, Route } from "react-router-dom";
import { Login, Register, RegisterSubmit } from "./pages";

function App() {
  return (
    <div className="App" style={{ padding: "150px 80px" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/submit" element={<RegisterSubmit />} />
      </Routes>
    </div>
  );
}

export default App;
